// 'use client'; // Ensures this is a client-side component

// import { useRouter } from 'next/router'; // Import useRouter hook
// import { ProductType } from '@/types/product.types';
// import Image from 'next/image';
// import { MdOutlineShoppingCart } from 'react-icons/md';
// import { Bounce, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LikeButton from '../like';

// const ProductCard = ({ product }: { product: ProductType }) => {
//   const router = useRouter(); // Initialize the router inside the component

//   const addLike = () =>
//     toast.success('Add to Favorites', {
//       position: 'top-right',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: 'light',
//       transition: Bounce,
//     });

//   const addCard = () => {
//     toast.success('Add to Cart', {
//       position: 'top-right',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: 'light',
//       transition: Bounce,
//     });

//     // Navigate to the product details page after adding to the cart
//     router.push(`/product/${product.id}`);
//   };

//   return (
//     <div className='w-[150px] cursor-pointer py-5'>
//       {product.images && product.images.length > 0 ? (
//         <Image
//           src={product.images[0]}
//           alt={product.title}
//           width={194}
//           height={194}
//           className="h-[130px] object-cover"
//         />
//       ) : (
//         <div className="h-[130px] flex items-center justify-center bg-gray-200">
//           Rasm mavjud emas
//         </div>
//       )}

//       <div className='relative'>
//         {product.discountPercentage && (
//           <div className='text-sm font-semibold inline-block px-3 py-0.5 bg-red-500 text-white rounded-2xl absolute left-2 -top-8'>
//             {Math.round(product.discountPercentage)}%
//           </div>
//         )}
//         <div onClick={addLike} className='absolute right-2 -top-32'>
//           <ToastContainer />
//           <LikeButton />
//         </div>
//         <div className='text-xs h-[24px]'>{product.title}</div>
//         {product.discountPercentage && (
//           <div className='line-through text-[13px] pt-1 text-gray-400'>
//             {product.price}$
//           </div>
//         )}
//         <div className='text-red-500 text-[13px] py-1 font-medium'>
//           {product.discountPercentage
//             ? (
//                 product.price -
//                 (product.price * product.discountPercentage) / 100
//               ).toFixed(2)
//             : product.price}
//           $
//         </div>
//         <button
//           onClick={addCard}
//           className='flex items-center gap-1 bg-yellow-400 px-3 py-2 rounded-md'
//         >
//           <MdOutlineShoppingCart /> Add to Cart
//           <ToastContainer />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
