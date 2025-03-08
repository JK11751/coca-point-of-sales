import React, { useEffect } from 'react';
import { Box, SimpleGrid  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import MenuCard from '../../components/Cards/MenuCard';
import { fetchProducts } from '../../redux/features/ProductSlice';


const Dashboard = ({ categoryType }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

 useEffect(() => {
  if (categoryType) {
    dispatch(fetchProducts(categoryType)); // Ensure categoryType is passed as a string
  }
}, [dispatch, categoryType]);
 


  return (
    <Box
    bg='#F8F9FD'
    padding="12px"
     
    >
        <SimpleGrid columns={6} spacing={2}>
          {products.map((product) => (
            <MenuCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
    
      
    </Box>
  );
};

export default Dashboard;
