"use client";

import MainLayout from "@/app/layouts/MainLayout";

const Product = ({ params }) => {
  const product = {
    id: 1,
    title: "Brown Leather Bag",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex px-4 py-10'>
            {product?.url ? (
              <img className='w-[40%] rounded-lg' src={product?.url + "/280"} />
            ) : (
              <div className='w-[40%]' />
            )}
            <div className='px-4 w-full'>
              <div className='font-bold text-xl'>{product?.title}</div>
              <div className='text-sm text-gray-700 pt-2'>
                Brand New — Full Warranty
              </div>
              <div className='border-b py-1' />
              <div className='pt-3 pb-2'>
                <div className='flex items-center'>
                  Condition:{" "}
                  <span className='font-bold text-[17px] ml-2'>New</span>
                </div>
              </div>
              <div className='border-b py-1' />

              <div className='pt-3'>
                <div className='w-full flex items-center justify-between'>
                  <div className='flex items-center'>
                    Price:{" "}
                    {product.price ? (
                      <div className='font-bold text-[20px] ml-2'>
                        CAD ${(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button className='bg-[#3498C9] text-white py-2 px-20 rounded-full cursor-pointer'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Product;
