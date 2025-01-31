'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter, useSearchParams } from 'next/navigation';

// Load Stripe.js
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Wrapper component for useSearchParams
function PaymentFormContent() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const searchParams = useSearchParams();
  const amountInCents = parseInt(searchParams.get('amount') || '0', 10);
  const amountInDollars = amountInCents / 100; // Convert cents back to dollars for display
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  // Debugging: Check if Stripe.js loaded
  useEffect(() => {
    if (!stripePromise) {
      console.error('Stripe.js failed to load.');
    } else {
      console.log('Stripe.js loaded successfully.');
    }
  }, [stripePromise]);

  // Validate the amount
  if (amountInCents <= 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-lg font-semibold mb-6">Invalid Amount</h2>
          <p className="text-red-500">The payment amount must be greater than $0.00.</p>
          <button
            onClick={() => router.push('/CheckOut')}
            className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg w-full mt-6"
          >
            Go Back to Checkout
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) return;

    try {
      // Create a payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      });

      if (paymentMethodError) {
        throw paymentMethodError;
      }

      // Call your API route to create a payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInCents }), // Send amount in cents
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Confirm the payment
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod!.id,
      });

      if (confirmError) throw confirmError;

      // Redirect to a success page
      router.push(`/order-confirmation?amount=${amountInDollars}`);
    } catch (err: any) {
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-lg font-semibold mb-6">Complete Your Payment</h2>
        <form onSubmit={handleSubmit}>
          <CardElement
            className="p-3 border border-gray-300 rounded-lg"
            options={{ hidePostalCode: true }}
          />
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <button
            type="submit"
            disabled={!stripe || processing}
            className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg w-full mt-6 disabled:opacity-50"
          >
            {processing ? 'Processing...' : `Pay $${amountInDollars.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentFormContent />
      </Suspense>
    </Elements>
  );
}