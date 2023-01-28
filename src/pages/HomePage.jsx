import { useState } from 'react'
import styled from 'styled-components';
import { Glitch } from '../components/Glitch'
import { IniciativeTracker } from '../IniciativeTracker';
import '../style/HomePage.css'

export const HomePage = () => {

    const [start, setStart] = useState(false);

    return (
        start 
        ? 
        <IniciativeTracker/> 
        : 
        <HomePageContainer>
            <Glitch text="Agostina" />
            <button onClick={() => setStart(true)}>Comenzar</button>
        </HomePageContainer>
    )
}

const HomePageContainer = styled.data`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`;