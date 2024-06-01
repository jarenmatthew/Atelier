import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { storage } from '../../../FirebaseConfig';
import './ExploreStyles.css';
import Header from '../../Header';
import Footer from '../../Footer';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  Stack,
} from "@mui/material";

const Explore: React.FC = () => {
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

    // Get current artworks
    const indexOfLastArtwork = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks = filteredArtworks.slice(indexOfFirstArtwork, indexOfLastArtwork);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

        <Box m="0 auto"  sx={{ width: "80vw", height: "auto", overflowX: "none" }}>
          <ImageList variant="masonry" cols={4} gap={15}>
            {currentArtworks.map((artwork, index) => (
              <ImageListItem key={index}>
                <img 
                  src={artwork.imageUrl} 
                  alt={artwork.type} 
                  className="artwork" 
                />
                <ImageListItemBar position="below" title={artwork.artist} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Stack spacing={2} sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
          <Pagination count={Math.ceil(filteredArtworks.length / artworksPerPage)} variant="outlined" shape="rounded" onChange={(event, page) => paginate(page)} />
        </Stack>

        <Footer />
      </div>
    );
  };
  

export default Explore;
