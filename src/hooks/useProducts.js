import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return products;
};

export default useProducts;