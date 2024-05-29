

// // import { Row, Col } from 'react-bootstrap';
// // import { useParams, Link } from 'react-router-dom';
// // import { useGetProductsQuery } from '../slices/productsApiSlice';
// // import Product from '../components/Product';
// // import Loader from '../components/Loader';
// // import Message from '../components/Message';
// // import ProductCarousel from '../components/ProductCarousel';
// // import Meta from '../components/Meta';
// // import '../assets/styles/index.css';
// // import { useState, useEffect } from 'react';

// // const HomeScreen = () => {
// //   const { pageNumber, keyword } = useParams();
// //   const [data, setData] = useState([]);
// //   const pageSize = 8; 

// //   const { isLoading, error } = useGetProductsQuery({
// //     keyword,
// //     pageNumber,
// //   });

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/products/all`);
// //       if (!response.ok) {
// //         throw new Error('Failed to Fetch');
// //       }
// //       const data = await response.json();
// //       setData(data.products);
// //     } catch (err) {
// //       console.log(err.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //       {!keyword ? (
// //         <ProductCarousel />
// //       ) : (
// //         <Link to='/' className='btn btn-light mb-4'>
// //           Go Back
// //         </Link>
// //       )}
// //       {isLoading ? (
// //         <Loader />
// //       ) : error ? (
// //         <Message variant='danger'>
// //           {error?.data?.message || error.error}
// //         </Message>
// //       ) : (
// //         <>
// //           <Meta />
// //           <Row>
// //             <Col className='d-flex justify-content-center' lg={12} md={6} sm={4}>
// //               <Link to={"/all"}><button className='mx-2'>All</button></Link>
// //               <Link to={"/phones"}><button className='mx-2'>Phones</button></Link>
// //               <Link to={"/gameconsols"}><button className='mx-2'>Game Consols</button></Link>
// //               <Link to={"/notebooks"}><button className='mx-2'>NoteBooks</button></Link>
// //               <button className='mx-2'>Accesories</button>
// //             </Col>
// //           </Row>
// //           <h1>Latest Products : </h1>
// //           <Row>
// //             {data.slice(-pageSize).reverse().map((product) => (
// //               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
// //                 <Product product={product} />
// //               </Col>
// //             ))}
// //           </Row>
// //         </>
// //       )}
// //     </>
// //   );
// // };

// // export default HomeScreen;


// import React, { useState, useEffect ,useRef} from 'react';
// import { Row, Col, Container } from 'react-bootstrap';
// import { useParams, Link } from 'react-router-dom';
// import { useGetProductsQuery } from '../slices/productsApiSlice';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import ProductCarousel from '../components/ProductCarousel';
// import Meta from '../components/Meta';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';


// const HomeScreen = () => {
//   const { pageNumber, keyword } = useParams();
//   const [data, setData] = useState([]);
//   const pageSize = 8;

//   const { isLoading, error } = useGetProductsQuery({
//     keyword,
//     pageNumber,
//   });


//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/products/all`);
//       if (!response.ok) {
//         throw new Error('Failed to Fetch');
//       }
//       const data = await response.json();
//       setData(data.products);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       {!keyword ? (
//         <ProductCarousel />
//       ) : (
//         <Link to='/' className='btn btn-light mb-4'>
//           Go Back
//         </Link>
//       )}
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>
//           {error?.data?.message || error.error}
//         </Message>
//       ) : (
//         <>
//           <Meta />
//           <Row>
//             <Col className='d-flex justify-content-center' lg={12} md={6} sm={4}>
//               <Link to={"/all"}><button className='mx-2'>All</button></Link>
//               <Link to={"/phones"}><button className='mx-2'>Phones</button></Link>
//               <Link to={"/gameconsols"}><button className='mx-2'>Game Consols</button></Link>
//               <Link to={"/notebooks"}><button className='mx-2'>NoteBooks</button></Link>
//               <button className='mx-2'>Accesories</button>
//             </Col>
//           </Row>
//           <h1>Latest Products : </h1>
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
              
//             }}
//             pagination={true}
//             autoplay={{
//               delay: 1500,
//               disableOnInteraction: false,
//             }}
//             speed={1000}
//             modules={[EffectCoverflow, Pagination,Autoplay]}
           
//             className="mySwiper"
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//               1200: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//             }}
//           >
//             {data.slice(-pageSize).reverse().map((product) => (
//               <SwiperSlide key={product._id}>
//                 <Product product={product} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </>
//       )}
//     </>
//   );
// };

// export default HomeScreen;



import React, { useState, useEffect } from 'react';
import { Row, Col ,Container} from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BackgroundScene from '../components/Background';// Yeni arka plan bileşeni

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [data, setData] = useState([]);
  const pageSize = 8;

  const { isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/all`);
      if (!response.ok) {
        throw new Error('Failed to Fetch');
      }
      const data = await response.json();
      setData(data.products);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <BackgroundScene /> 
          <Container className="container">
            <Row>
              <Col className='d-flex justify-content-center' lg={12} md={6} sm={4}>
                <Link to={"/all"}><button className='mx-2'>All</button></Link>
                <Link to={"/phones"}><button className='mx-2'>Phones</button></Link>
                <Link to={"/gameconsols"}><button className='mx-2'>Game Consols</button></Link>
                <Link to={"/notebooks"}><button className='mx-2'>NoteBooks</button></Link>
                <Link to={"/accesories"}><button className='mx-2'>Accesories</button></Link>
              </Col>
            </Row>
            <h1>Latest Products :</h1>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={1000}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {data.slice(-pageSize).reverse().map((product) => (
                <SwiperSlide key={product._id}>
                  <Product product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
