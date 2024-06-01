import Footer from '../../Footer';
import { Box } from '@mui/material';
import './getStarted.css';
import { Link } from 'react-router-dom';


const GetStarted: React.FC = () => {

    return(
        <div>
            <Box>
                <div className='hero-section'>
                    <div className='atelier-brand'>
                        <div className='atelier-logo'>
                        <img src='./src/assets/atelier-logo2.png' alt='Atelier Logo' id='logo'/>
                        
                    </div>
                    <div style={{height: '150px'}}></div>
                    <h1 className='catch-phrase'>Where art finds its voice. Where artists find their community.</h1>
                    <p className='atelier-desc'> 
                    Atelier is a vibrant community where artists of all kinds come together to showcase their work, find inspiration, and support one another.
                    With Atelier, you can effortlessly share and sell your art while engaging with a diverse network of fellow creatives. Whether you're a painter, sculptor, photographer, 
                    or any other type of artist, Atelier provides the platform for you to shine.
                    </p>
                    <p className='join-us'>Join us today and unlock a world of artistic possibilities!</p>
                    <div style={{height: '50px'}}></div>
                    
                    <Link id='start-link' to="/SignUp">
                        <button id='get-started-button'>
                        Get Started
                        </button>
                    </Link>
                    
                    </div>

                    <div className='hero-image'>
                        <img src='./src/assets/atelier-room.png' alt='Atelier Room' id='hero'/>
                    </div>
                </div>
                <div style={{height: '50px'}}></div>

                <div className='main-features-section'>
                    <div className='features-heading'>
                        <h1 id='howitworks-heading'>How it Works</h1>
                    </div>
                    
                    <div className='main-feature-box'>
                        <div className='main-feature-img'>
                        <img src='./src/assets/chat.png' alt='About Img' id='mfimg'/>
                        </div>
                        <div className='main-feature-desc'>
                        <h2>Directly Interact</h2>
                        <p className='atelier-desc'>
                        Atelier fosters a sense of community among fellow artists, enthusiasts, and buyers. 
                        Through its feature of direct messaging among users, Atelier encourages engagement, dialogue, and collaboration which strengthen connections 
                        and a supportive system for artistic growth.
                        </p>
                        </div>
                    </div>
                    
                    <div className='main-feature-box'>
                        <div className='main-feature-desc2'>
                        <h2>Follow fellow artists</h2>
                        <p className='atelier-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        </div>
                        <div className='main-feature-img2'>
                        <img src='./src/assets/follow.png' alt='About Img' id='mfimg'/>
                        </div>
                    </div>
                    
                    <div className='main-feature-box'>
                        <div className='main-feature-img'>
                        <img src='./src/assets/post.png' alt='About Img' id='mfimg'/>
                        </div>
                        <div className='main-feature-desc'>
                        <h2>Promote your art</h2>
                        <p className='atelier-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        </div>
                    </div>
                </div>

                <div className='featured-arts-section'>
                    <div className='features-heading'>
                        <h1 id='artworks-heading'>Featured Artworks</h1>
                    </div>

                    <div className='artworks-box'>
                        <div className='artwork-img'>
                            <img src="./src/assets/artwork1.jpg" alt="Featured Artwork" id='artwork'/>
                        </div>
                        <div className='artwork-img'>
                            <img src="./src/assets/artwork2.jpg" alt="Featured Artwork" id='artwork'/>
                        </div>
                    </div>
                </div>
                <div style={{height: '50px'}}></div>

                <div className='featured-artists-section'>
                    <div className='features-heading'>
                        <h1>Featured Artists</h1>
                    </div>

                    <div className='artists-box'>
                        <div className='artist-profile'>
                        <img src="./src/assets/avatar1.png" alt="Artist Profile" id='artist'/>
                        <h4>Name</h4>

                        </div>
                        <div className='artist-profile'>
                        <img src="./src/assets/avatar2.png" alt="Artist Profile" id='artist'/>
                        <h4>Name</h4>

                        </div>
                        <div className='artist-profile'>
                        <img src="./src/assets/avatar3.png" alt="Artist Profile" id='artist'/>
                        <h4>Name</h4>

                        </div>
                    </div>
                </div>
            </Box>

            <Footer />
        </div>
    );
};

export default GetStarted;