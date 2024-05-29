import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { motion } from 'framer-motion';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import PaginateSecond from '../components/PaginateSecond';
import '../assets/styles/index.css';

const Notebooks = () => {
  const { pageNumber = 1 } = useParams(); 
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [page, setPage] = useState(Number(pageNumber));
  const [pages, setPages] = useState(1);
  const pageSize = 8; 

  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedBrand, setSelectedBrand] = useState('');
  const brands = [...new Set(products.map(product => product.brand))];

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/products/all`);
      if (!response.ok) {
        throw new Error('Failed to Fetch');
      }
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products.filter(product => product.category === 'Notebook');
    filtered = filtered.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }
    setFilteredProducts(filtered);
    setPages(Math.ceil(filtered.length / pageSize));
  }, [products, priceRange, selectedBrand]);

  useEffect(() => {
    setPage(Number(pageNumber)); 
  }, [pageNumber]);

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginated = filteredProducts.slice(startIndex, endIndex);
    setPaginatedProducts(paginated);
  }, [filteredProducts, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/notebooks/page/${newPage}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error}</Message>;
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1,
      transition: {
        duration: 1, 
        ease: 'easeInOut', 
      }
     },
  };

  return (
    <>
      <Row>
        <Col md={3} xl={3} lg={3} className="sticky-filter sticky-filter-lg">
          <Form className='sticky-filter'>
            <Form.Group controlId="priceRange">
              <Form.Label>Price Range</Form.Label>
              <InputRange
                maxValue={6000}
                minValue={0}
                value={priceRange}
                onChange={value => setPriceRange(value)}
              />
            </Form.Group>
            <Form.Group controlId="brand" className="mt-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control 
                as="select" 
                value={selectedBrand} 
                onChange={(e) => setSelectedBrand(e.target.value)}>
                <option value="">All</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          <Row>
            {paginatedProducts.map(filteredProduct => (
              <Col key={filteredProduct._id} sm={12} md={6} lg={4} xl={4}>
                <motion.div variants={item} initial="hidden" animate="visible">
                  <Product product={filteredProduct} />
                </motion.div>
              </Col>
            ))}
          </Row>
          <PaginateSecond pages={pages} page={page} category="notebooks" onPageChange={handlePageChange} />
        </Col>
      </Row>
    </>
  );
};

export default Notebooks;






