import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './ProductStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';


const Product: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [stickerImageUrl, setStickerImageUrl] = useState<string | null>(null);
  const [bookmarkImageUrl, setBookmarkImageUrl] = useState<string | null>(null);
  const [mediumImageUrl, setMediumImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Reference to the image in Firebase storage
    const imageRef = ref(storage, 'bg2.jpg');
    const stickerRef = ref(storage, 'bg2.jpg');
    const bookmarkRef = ref(storage, 'bg2.jpg');
    const mediumRef = ref(storage, 'bg2.jpg');

    // Get the download URL of the images
    getDownloadURL(imageRef)
      .then((url) => {
        // Set the image URL to state
        setImageUrl(url);
      })
      .catch((error) => {
        console.error('Error getting download URL:', error);
      });

    getDownloadURL(stickerRef)
      .then((url) => {
        // Set the sticker image URL to state
        setStickerImageUrl(url);
      })
      .catch((error) => {
        console.error('Error getting sticker image download URL:', error);
      });

    getDownloadURL(bookmarkRef)
      .then((url) => {
        // Set the bookmark image URL to state
        setBookmarkImageUrl(url);
      })
      .catch((error) => {
        console.error('Error getting bookmark image download URL:', error);
      });

    getDownloadURL(mediumRef)
      .then((url) => {
        // Set the medium image URL to state
        setMediumImageUrl(url);
      })
      .catch((error) => {
        console.error('Error getting medium image download URL:', error);
      });
  }, []);

  return (
    
    <div>
      <Header />
      <div className="container">
        <div className="artwork-container">
          <p>Artwork Name</p>
          <div className="artwork">
            {imageUrl && <img src={imageUrl} alt="Artwork" />}
          </div>
          <div className='available'>
        <h5>Stock Available: <div className="tags_"><div className="tag">12</div></div></h5>
      </div>
        </div>
        <div className="details-container">
          <div className="artist-info">
            <div className="profile-pic"></div>
            <p>Artist Name</p>
          </div>
          
          <div className="description">
            {/* <h3>Artwork Description</h3> */}
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</h5>
          </div>
          <div className="tags">
            <div className="tag">Tag 1</div>
            <div className="tag">Tag 2</div>
            <div className="tag">Tag 3</div>
          </div>
          <div className="price">$100</div>
          <div className="buttons">
            <a href="#" className="button"> <ShoppingCartCheckoutIcon />        Buy</a>
            <a href="#" className="button"> <ShoppingCartIcon />  Add to Cart</a>
          </div>
        </div>
      </div>
      
      <div className="availability">
        <h4>You May Also Like:</h4>
        <div className="availability-options">
          <div className="availability-option">
            <div className="availability-item">
              {stickerImageUrl && <img src={stickerImageUrl} alt="Stickers" />}
              <p>Artwork Title</p>
            </div>
            <div className="price">$10</div>
          </div>
          <div className="availability-option">
            <div className="availability-item">
              {bookmarkImageUrl && <img src={bookmarkImageUrl} alt="Bookmarks" />}
              <p>Artwork Title</p>
            </div>
            <div className="price">$15</div>
          </div>
          <div className="availability-option">
            <div className="availability-item">
              {mediumImageUrl && <img src={mediumImageUrl} alt="Medium" />}
              <p>Artwork Title</p>
            </div>
            <div className="price">$20</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
