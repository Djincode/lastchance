

import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import PaginateSecond from '../components/PaginateSecond';
import '../assets/styles/index.css';

const GameConsoles = () => {
  const { pageNumber = 1 } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [page, setPage] = useState(Number(pageNumber));
  const [pages, setPages] = useState(1);
  const pageSize = 9;

  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [selectedBrand, setSelectedBrand] = useState('');
  const specificBrands = ['Retro', 'Atari', 'Nintendo', 'Handheld', 'X7', 'Miyoo'];
  const brands = [...new Set(products.filter(product => specificBrands.includes(product.brand)).map(product => product.brand))];

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
    let filtered = products.filter(product => product.category === 'console');
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
    navigate(`/gameconsoles/page/${newPage}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error}</Message>;
  }

  return (
    <>
      <Row>
        <Col md={3} xl={3} lg={3} className="sticky-filter sticky-filter-lg">
          <Form className='sticky-filter'>
            <Form.Group controlId="priceRange">
              <Form.Label>Price Range</Form.Label>
              <InputRange
                maxValue={100}
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
                <Product product={filteredProduct} />
              </Col>
            ))}
          </Row>
          <PaginateSecond pages={pages} page={page} category="console" onPageChange={handlePageChange} />
        </Col>
      </Row>
    </>
  );
};

export default GameConsoles;

