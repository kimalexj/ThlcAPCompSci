import React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';

const HomeWrapper = styled.div`
    padding-top: 0em;
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Typography variant="h2" component="h1">
                <TypeAnimation 
                    cursor={true}
                    sequence={['Welcome to AP Computer Science!', 1500]}
                />
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
                School Year (2021-2022)
            </Typography>
            <br/>
        </HomeWrapper>

    );
}

export default Home;