import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './exploreStyle.css';
import Header from '../../Header';
import Footer from '../../Footer';

const Explore: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchInput, setSearchInput] = useState<string>(''); // State for search input
    const [artworks, setArtworks] = useState<any[]>([]);
  
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
  
    return (
      <div>
        <Header />
        <h2>Explore and discover amazing artworks and artists!</h2>
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

        <div className="artworks-container">
          {filteredArtworks.map((artwork, index) => (
            <img key={index} src={artwork.imageUrl} alt={artwork.type} className="artwork" />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  

export default Explore;
