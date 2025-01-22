 'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import { client } from '../../sanity/lib/client'; // Adjust path as necessary
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source).url();

const Main = () => {
  const [foods, setFoods] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Router instance for navigation

  useEffect(() => {
    // Fetch food data from Sanity
    const fetchData = async () => {
      try {
        const query = `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          image,
          description,
          available
        }`;
        const data = await client.fetch(query);
        setFoods(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setFoods([]); // Set empty array to avoid rendering issues
        setError("An error occurred while fetching the data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id: any) => {
    router.push(`/Shop/${id}`); // Navigate to the product detail page
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedCategories((prevCategories) => {
      if (checked) {
        return [...prevCategories, value];
      } else {
        return prevCategories.filter((category) => category !== value);
      }
    });
  };

  const filteredFoods = foods.filter((food) => {
    // Filter based on search term
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter based on selected categories
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(food.category);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen mt-14 bg-gray-100 p-4">
      {error ? (
        <div className="text-center text-red-500">
          <p className="text-xl">{error}</p>
        </div>
      ) : (
        <>
          {/* Header with Sort By and Show */}
          <header className="flex flex-wrap items-center justify-start space-x-4 space-y-2 md:space-y-0 mb-4">
            <select className="p-2 border rounded-md w-full md:w-auto">
              <option>Sort By: Newest</option>
              <option>Sort By: Price</option>
              <option>Sort By: Popular</option>
            </select>
            <select className="p-2 border rounded-md w-full md:w-auto">
              <option>Show: Default</option>
              <option>Show: Highest Rated</option>
            </select>
          </header>

          {/* Main Content */}
          <div className="flex flex-wrap">
            {/* Products Section */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredFoods.length === 0 ? (
                <div className="text-center text-gray-500">
                  <p className="text-xl">No products available.</p>
                </div>
              ) : (
                filteredFoods.map((food) => (
                  <div
                    key={food._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => handleCardClick(food._id)} // Navigate on card click
                  >
                    <Image
                      src={urlFor(food.image).toString()}
                      alt={food.name}
                      className="w-full h-40 object-cover"
                      width={500}
                      height={300}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{food.name}</h3>
                      <p className="text-[#FF9F0D]">${food.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 lg:pl-4 mt-4 lg:mt-0">
              {/* Search */}
              <div className="mb-4 mt-3">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full p-2 border bg-[#FF9F0D1A] rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="mb-4 flex flex-col gap-3">
                <h2 className="text-[20px] font-bold mb-2">Category</h2>
                <ul className="space-y-2 flex flex-col gap-4">
                  {['Sandwich', 'Drink', 'Dessert', 'Main Course', 'Appetizer'].map((category) => (
                    <li key={category}>
                      <label className="flex items-center">
                        <input type="checkbox" value={category} onChange={handleCategoryChange} className="mr-2" /> {category}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filter By Price */}
              <div className="mb-4 pt-4">
                <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
                <input type="range" min="0" max="100" className="w-full" />
              </div>

              {/* Latest Products */}
              <div className="mb-4">
                <h2 className="text-[20px] font-bold mb-2">Latest Products</h2>
                <ul className="flex flex-col gap-4 space-y-2">
                  {filteredFoods.slice(0, 5).map((food) => (
                    <li key={food._id}>
                      <p className="text-gray-700">{food.name} - ${food.price}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Tags */}
              <div>
                <h2 className="text-lg font-bold pt-4 mb-2">Product Tags</h2>
                <div className="flex flex-wrap gap-4">
                  {['Pizza', 'Burger', 'Drinks', 'Sandwiches', 'Cookies', 'Services', 'Our Menu', 'Tandoori'].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
