'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '../../../sanity/lib/client'; 
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Navbar from '@/app/Navbar';
import Footer from '@/app/HomeComponents/Footer';

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source).url();

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "food" && _id == $id][0]{
        name,
        category,
        price,
        originalPrice,
        tags,
        image,
        description,
        available
      }`;
      const data = await client.fetch(query, { id });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    // Store the product with its image
    const productWithImage = { ...product, image: urlFor(product.image).toString() };
    
    // Get existing cart items from localStorage (if any)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the new product to the cart
    existingCart.push(productWithImage);
    
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    alert(`${product.name} has been added to your cart!`);
  };
  

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='bg-black'>
        <h1 className='font-bold text-white text-5xl text-center p-10'>Product Detail</h1>
      </div>
      <div className="min-h-screen mt-14 bg-gray-100 p-4">
        <button
          className="mb-4 bg-[#FF9F0D] rounded-xl px-3"
          onClick={() => router.back()} 
        >
          Go Back
        </button>
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
          <Image
            src={urlFor(product.image).toString()}
            alt={product.name}
            className="w-full h-60 object-cover"
            width={2000}
            height={1000}
          />
          <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-[#FF9F0D] text-xl mt-2">${product.price}</p>
          {product.originalPrice && (
            <p className="text-gray-400 line-through">${product.originalPrice}</p>
          )}
          <p className="text-gray-700 mt-2">Category: {product.category}</p>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-200 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            className="mt-6 px-4 py-2 bg-[#FF9F0D] text-white font-bold rounded hover:bg-blue-600"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
