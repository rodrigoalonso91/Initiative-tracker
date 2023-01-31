import { useState } from 'react'
import styled , { keyframes } from 'styled-components';
import { Glitch } from '../components/Glitch'
import { BattleTracker } from '../BattleTracker';
import { DiceIcon } from '../components/icons/DiceIcon';

export const HomePage = () => {

    const [start, setStart] = useState(false);

    return (
        start 
        ? 
        <BattleTracker/> 
        : 
        <HomePageContainer>
            <DiceContainer>
                <DiceIcon color1='#7f00f5' color2={'#484843'} />
            </DiceContainer>
            <Glitch text="Battle-tracker" />
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

const rotateFx = keyframes`

    0% {
		transform: rotate(0deg);
    }	
    100% {
		transform: rotate(360deg);
    }
`;

const DiceContainer = styled.div`
    width: 120px;
    animation: ${rotateFx} 50s linear infinite;
    background: radial-gradient(circle, #ff8f47 0%, #bc48ff 100%);
    border-radius: 100%;
    padding: none;
`;