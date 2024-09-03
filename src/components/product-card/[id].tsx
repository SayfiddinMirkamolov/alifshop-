// import { useRouter } from 'next/router';
// import { useStore } from '@/store/store';
// import { ProductType } from '@/types/product.types';
// import { useEffect, useState } from 'react';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [product, setProduct] = useState<ProductType | null>(null);
//   const cart = useStore((state) => state.cart);

//   useEffect(() => {
//     if (id) {
//       // `cart` dan mahsulotni topish
//       const foundProduct = cart.find((item: ProductType) => item.id === id);
//       setProduct(foundProduct || null);
//     }
//   }, [id, cart]);

//   if (!product) {
//     return <div>Mahsulot topilmadi</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>Narxi: {product.price}$</p>
//       <p>Chegirma: {product.discountPercentage}%</p>
//       <p>Batafsil: {product.description}</p>
//       <img src={product.images[0]} alt={product.title} />
//     </div>
//   );
// };

// export default ProductDetails;
