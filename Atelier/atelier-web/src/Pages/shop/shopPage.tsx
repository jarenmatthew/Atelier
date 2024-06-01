import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './shopStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Shop: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchInput, setSearchInput] = useState<string>(''); // State for search input
    const [artworks, setArtworks] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [artworksPerPage] = useState(30); // Set the number of artworks per page
  
    useEffect(() => {
      fetchArtworks();
    }, []);
  
    const fetchArtworks = async () => {
        try {
          const imageRef = ref(storage, 'img');
          const images = await listAll(imageRef);
          const urls = await Promise.all(images.items.map(async (item) => {
            const url = await getDownloadURL(item);
            const types = ['painting', 'photograph', 'crafts', 'scripture', 'oil canvas'];
            const randomType = types[Math.floor(Math.random() * types.length)];
            const title = `${randomType.charAt(0).toUpperCase()}${randomType.slice(1)}`; // Capitalize the type for title
            const artistNames = ['John Doe', 'Jane Doe', 'Alice Smith', 'Bob Johnson']; // Sample artist names
            const randomArtist = artistNames[Math.floor(Math.random() * artistNames.length)];
            const price = Math.floor(Math.random() * 100) + 50; // Generate a random price
            return { imageUrl: url, type: randomType, title, artist: randomArtist, price };
          }));
          setArtworks(urls);
        } catch (error) {
          console.error('Error fetching artworks:', error);
        }
      };
  
    const filteredArtworks = artworks.filter((artwork) => {
      // Filter by selected tag
      if (selectedTag && artwork.type !== selectedTag) return false;
      // Filter by search input
      if (searchInput && !artwork.type.toLowerCase().includes(searchInput.toLowerCase())) return false;
      return true;
    });

    // Logic for pagination
    const indexOfLastArtwork = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks = filteredArtworks.slice(indexOfFirstArtwork, indexOfLastArtwork);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };

    return (
      <div>
        <Header />

        <h2 className='text-header'>Explore and discover amazing artworks and artists!</h2>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search artworks"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>

        <div className="filter-tags">
          <button onClick={() => setSelectedTag(null)}>All</button>
          <button onClick={() => setSelectedTag('painting')}>Painting</button>
          <button onClick={() => setSelectedTag('photograph')}>Photograph</button>
          <button onClick={() => setSelectedTag('crafts')}>Crafts</button>
          <button onClick={() => setSelectedTag('scripture')}>Scripture</button>
          <button onClick={() => setSelectedTag('oil canvas')}>Oil Canvas</button>
        </div>

        <div style={{ marginBottom: '200px' }} className="artworks-container">
          {currentArtworks.map((artwork, index) => (
            <div key={index} className="artwork">
              <div className="artwork-container">
                <img src={artwork.imageUrl} alt={artwork.type} />
                <div className="artwork-details">
                  <p className="title">{artwork.title}, {artwork.artist}</p>
                  <p className="price">{artwork.price}</p>
                  <p className="category">{artwork.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <Stack spacing={2}>
            <Pagination 
              count={Math.ceil(filteredArtworks.length / artworksPerPage)} 
              variant="outlined" 
              onChange={handlePageChange} 
            />
          </Stack>
        </div>

        <Footer />
      </div>
    );
  };
  

export default Shop;
