import Footer from '../../Footer';
import { Box } from '@mui/material';
import './getStarted.css';
import { Link } from 'react-router-dom';
import { Height } from '@mui/icons-material';



const GetStarted: React.FC = () => {
    
    return(
        <div>
            <Box>
                <div className='sectionA'>
                    <div className='sectionA-box1'>
                        <div className='sectionA-box1A'>
                        <img src='./src/assets/dummylogo.jpg' alt='Atelier Logo' id='logo'/>
                        <h2 className='atelier-header'>Atelier</h2>
                        </div>
                    <div style={{height: '250px'}}></div>
                    <h1 className='catch-phrase'>CATCH PHRASE</h1>
                    <p className='atelier-desc'> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </p>
                    <div style={{height: '50px'}}></div>
                    <button className='get-started-button'>Get Started</button>
                    </div>

                    <div className='sectionA-box2'>
                    <img src='./src/assets/dummylogo.jpg' alt='Atelier Logo' id='bigimg'/>
                    </div>
                </div>

                <div className='sectionB'>
                    <div className='sectionB-box1'>
                        <h1 id='howitworks-heading'>How it Works</h1>
                    </div>
                    <div style={{height: '50px'}}></div>
                    
                    <div className='sectionB-box2'>
                        <div className='sectionB-box2A'>
                        <img src='./src/assets/chat.jpg' alt='About Img' id='guideimg'/>
                        </div>
                        <div className='sectionB-box2B'>
                        <h2>Directly Interact</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        </div>
                    </div>
                    <div style={{height: '50px'}}></div>
                    
                    <div className='sectionB-box2'>
                        <div className='sectionB-box3A'>
                        <h2>Follow fellow artists</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        </div>
                        <div className='sectionB-box3B'>
                        <img src='./src/assets/follow.jpg' alt='About Img' id='guideimg'/>
                        </div>
                    </div>
                    <div style={{height: '50px'}}></div>
                    
                    <div className='sectionB-box2'>
                        <div className='sectionB-box2A'>
                        <img src='./src/assets/post.jpg' alt='About Img' id='guideimg'/>
                        </div>
                        <div className='sectionB-box2B'>
                        <h2>Promote your art</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        </div>
                    </div>
                </div>

                <div className='sectionC'>
                </div>

                <div className='sectionD'>
                </div>
            </Box>

            <Footer />
        </div>
    );
};

export default GetStarted;