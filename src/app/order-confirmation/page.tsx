'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Wrapper component for useSearchParams
function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');
  const [orderId, setOrderId] = useState<string | null>(null);

  // Simulate generating an order ID (replace with your actual logic)
  useEffect(() => {
    const generatedOrderId = `ORDER-${Math.floor(Math.random() * 1000000)}`;
    setOrderId(generatedOrderId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
        <p className="text-green-500 mb-4">Your payment was successful!</p>
        <div className="text-left space-y-2">
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Amount Paid:</strong> ${amount}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>
        <Link
          href="/"
          className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg inline-block mt-6"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}