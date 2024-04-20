import Header from '../../Header';
import Footer from '../../Footer';
import { Box } from '@mui/material';
import './getStarted.css';
import { Link } from 'react-router-dom';



const GetStarted: React.FC = () => {
    
    return(
        <div>
            <Header />
            
            <Box>
                <div className='first-sec'>
                    <h3>Atelier</h3>
                    <p></p>

                </div>
                <div className='second-sec'>

                </div>
            </Box>

            <Footer />
        </div>
    );
};

export default GetStarted;