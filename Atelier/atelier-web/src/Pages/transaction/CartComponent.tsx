import React, { useState } from 'react';
// import { auth } from "../../../FirebaseConfig";

import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
// import MessagesComponent from './MessagesComponent';
// import TransactionsComponent from './TransactionsComponent';
import Header from '../../Header';

const CartComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'cart' | 'transactions'>('cart');

  const handleOptionSelect = (option: 'cart' | 'transactions') => {
    setSelectedOption(option);
  };


  return (
    <div>
      {/* Display list of messages */}
      <h1>Cart</h1>
      {/* Add message input form */}
      {/* Message list */}
    </div>
  );
};

export default CartComponent;