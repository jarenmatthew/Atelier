import Header from '../../Header';
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
                    <button className='get-started-button'>GET STARTED</button>

                    </div>

                    <div className='sectionA-box2'>
                    <img src='./src/assets/dummylogo.jpg' alt='Atelier Logo' id='bigimg'/>


                    </div>
                </div>
                <div className='sectionB'>
                </div>
            </Box>

            <Footer />
        </div>
    );
};

export default GetStarted;