import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../../../FirebaseConfig";
import "./CartStyle.css";
import Header from "../../Header";
import Footer from "../../Footer";

const Cart: React.FC = () => {
  return (
    <div>
      <Header />
      <h2>My Cart</h2>
    </div>
  );
};


export default Cart;
