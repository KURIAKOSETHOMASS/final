import React from 'react';
import { Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Img from './images/Restobackground.jpg';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120vh',
        fontSize: '50px',
    };

    return (
        <div style={backgroundImageStyle}>
        <br /><br />
            <Typography variant='h4' color='floralwhite' align='center'>Welcome to Clasic Resto</Typography>
            <br />
            <Typography variant='h4' color='floralwhite' align='center'>RESTAURANT HOURS</Typography>
            <br />
            <Typography variant='h6' color='floralwhite' align='center'>
                Dine-in: <br /><br />
                Sun - Wed 11:30am - 9:00pm <br /><br />
                Thurs 11:30am - 9:30pm <br /><br />
                Fri - Sat  11:30 AM - 10:00 <br />
                _____
            </Typography>
            <br />
            <Typography variant='h5' fontWeight='bold' color='floralwhite'>Pala, Kottayam</Typography>
            <br /><br /><br />
            <Typography variant='h6' color='black' align='center'>
                "Step into the cozy charm of Clasic Resto, where every dish is a delight and every moment memorable. 
                <br />Our menu boasts a fusion of flavors that will tantalize your taste buds and leave you craving for more.
                <br />From sizzling steaks to mouthwatering pastas, we've got something to satisfy every craving.
                <br /><br /><br />
                Come dine with us and experience the magic of Clasic Resto!"
            </Typography>
            <Typography variant='h6' color='black' align='center'> TO US, FOOD IS EVERYTHING WITH CUSTOMER SATISFACTION <br />WE’RE PROUD TO SHARE OUR TRADITIONS WITH YOU. </Typography>
            <Typography variant='h6' color='black' align='center'> CONTACT US </Typography>
            <Typography variant='contained' style={{ margin: '0 10px' }} color='success'>
                <Stack direction='row' spacing={2}>
                    <Link to='/About' style={{ textDecoration: 'none', color: 'white', margin: 'center' }}>
                        HERE
                    </Link>
                </Stack>
            </Typography>
            
        </div>
    );
};

export default Home;
