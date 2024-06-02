import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore"; 
import { db } from "../../../FirebaseConfig"; 
import "./ExploreStyles.css";
import Header from "../../Header";
import Footer from "../../Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const filterByTag = (artwork, selectedTag) => {
  if (!selectedTag) return true;
  return artwork.tags && artwork.tags.includes(selectedTag);
};

const sortArtworks = (artworks, sortOption) => {
  return [...artworks].sort((a, b) => {
    if (!a || !b || !a.name || !b.name || !a.artist || !b.artist || !a.dateAdded || !b.dateAdded) {
      return 0;
    }

    switch (sortOption) {
      case "name":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "artist":
        return a.artist.localeCompare(b.artist);
      case "artist-desc":
        return b.artist.localeCompare(a.artist);
      case "date":
        return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      case "date-desc":
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case "price":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });
};

const Explore: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [artworks, setArtworks] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [artworksPerPage] = useState(30);
  const [sortOption, setSortOption] = useState<string>("date-desc");
  const [displayedArtworks, setDisplayedArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
    
      const accountsSnapshot = await getDocs(collection(db, "accounts"));
      const allArtworks = [];
    
      for (const accountDoc of accountsSnapshot.docs) {
        const accountId = accountDoc.id;
        const collectionsSnapshot = await getDocs(collection(db, `accounts/${accountId}/collections`));
    
        for (const collectionDoc of collectionsSnapshot.docs) {
          const collectionId = collectionDoc.id;
          const artworksSnapshot = await getDocs(collection(db, `accounts/${accountId}/collections/${collectionId}/artworks`));
    
          const artworksData = artworksSnapshot.docs.map((artworkDoc) => {
            const artworkData = artworkDoc.data();
            return {
              id: artworkDoc.id,
              ...artworkData,
              owner: accountDoc.data().username // Assuming username is stored in the account document
            };
          });
    
          allArtworks.push(...artworksData);
        }
      }
    
      setArtworks(allArtworks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching artworks:", error);
    }
  };
  
  
  const filterBySearch = (artwork) => {
    if (!searchInput) return true;
    return artwork.name.toLowerCase().includes(searchInput.toLowerCase());
  };

  const paginateArtworks = (artworks) => {
    const indexOfLastArtwork = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    return artworks.slice(indexOfFirstArtwork, indexOfLastArtwork);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const filteredArtworks = artworks.filter((artwork) => filterByTag(artwork, selectedTag) && filterBySearch(artwork));
    const sortedFilteredArtworks = sortArtworks(filteredArtworks, sortOption);
    const paginatedArtworks = paginateArtworks(sortedFilteredArtworks);
    setDisplayedArtworks(paginatedArtworks);
  }, [artworks, currentPage, selectedTag, searchInput, sortOption]);

  return (
    <div>
      <Header />
      <h2 className="text-header">Explore and discover amazing artworks and artists!</h2>
      
      {loading ? (
        <div className="loading-animation">
          Loading...
        </div>
      ) : (
        <div>
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
            <button onClick={() => setSelectedTag("Painting")}>Painting</button>
            <button onClick={() => setSelectedTag("Photograph")}>Photograph</button>
            <button onClick={() => setSelectedTag("Crafts")}>Crafts</button>
            <button onClick={() => setSelectedTag("Scripture")}>Scripture</button>
            <button onClick={() => setSelectedTag("Oil canvas")}>Oil Canvas</button>
            <button onClick={() => setSelectedTag("Digital")}>Digital</button>
          </div>

          <div style={{ marginBottom: "200px" }} className="artworks-container">
            {displayedArtworks.map((artwork, index) => (
              <div key={index} className="artwork">
                <div className="artwork-container">
                  <img src={artwork.coverPhoto} alt={artwork.type} />
                  <div className="artwork-details">
                    <p className="title">
                      {artwork.name} by: {artwork.artist}
                    </p>
                    <p className="owner">Owner: {artwork.owner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="pagination-container">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(displayedArtworks.length / artworksPerPage)}
                variant="outlined"
                onChange={handlePageChange}
              />
            </Stack>
          </div>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              labelId="sort-label"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as string)}
            >
              <MenuItem value="name">Name (A-Z)</MenuItem>
              <MenuItem value="name-desc">Name (Z-A)</MenuItem>
              <MenuItem value="artist">Artist (A-Z)</MenuItem>
              <MenuItem value="artist-desc">Artist (Z-A)</MenuItem>
              <MenuItem value="date">Oldest Date</MenuItem>
              <MenuItem value="date-desc">Newest Date</MenuItem>
              <MenuItem value="price">Price (Low to High)</MenuItem>
              <MenuItem value="price-desc">Price (High to Low)</MenuItem>
            </Select>
          </FormControl>

          <Footer />
        </div>
      )}
    </div>
  );

};

export default Explore;
