import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, CssBaseline } from '@mui/material';
import CartComponent from './CartComponent';
import TransactionsComponent from './TransactionsComponent';
import Header from '../../Header';
import './TransactionStyle.css';

const LayoutComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'cart' | 'transactions'>('cart');

  const handleOptionSelect = (option: 'cart' | 'transactions') => {
    setSelectedOption(option);
  };

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', mt: '100px' }}> 
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              mt: '64px', // Ensure Drawer starts below the Header
            },
          }}
        >
          <List>
            <ListItem button onClick={() => handleOptionSelect('cart')}>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem button onClick={() => handleOptionSelect('transactions')}>
              <ListItemText primary="Transactions" />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}> {/* Adjust margin-left based on Drawer width */}
          {selectedOption === 'cart' && <CartComponent />}
          {selectedOption === 'transactions' && <TransactionsComponent />}
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutComponent;
