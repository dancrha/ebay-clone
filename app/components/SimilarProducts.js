"use client";

import { BiLoader } from "react-icons/bi";
import ProductComp from "./Product";

const SimilarProducts = ({ product }) => {
  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "School Books",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://picsum.photos/id/20",
      price: 1999,
    },
  ];
  return (
    <>
      <div>
        <div className='border-b py-1 max-w-[1200px] mx-auto'>
          <div className='max-w-[1200px] mx-auto'>
            <div className='text-2xl font-bold py-2 mt-4'>
              Similar sponsored items
            </div>

            {products.length > 0 ? (
              <div className='grid grid-cols-5 gap-4'>
                {products.map((product) => (
                  <ProductComp key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center gap-4 font-semibold'>
                  <BiLoader size={30} className='text-blue-400 animate-spin' />
                  Loading Products...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarProducts;
