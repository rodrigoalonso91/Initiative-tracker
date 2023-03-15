import { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button, Grid, Switch, Text } from "@nextui-org/react";
import { useField } from "./hooks/useField";
import { CharacterCard } from "./components/CharacterCard";
import { useCounter } from "./hooks/useCounter";
import TurnInfo from "./components/TurnInfo";


export const BattleTracker = () => {

    const [turn, setTurn] = useState(0);
    const [isHero, setIsHero] = useState(true);
    const [characters, setCharacters] = useState([]);
    const { counter, increment, decrement, reset } = useCounter(0)

    const currentPlayer = useMemo(() => {

        return characters.length > 0 && counter < characters.length
            ? characters[counter].name
            : '-';

    }, [counter]);

    const characterInputRef = useRef(null);

    const characterInput = useField({ type: 'text' });
    const initiativeInput = useField({ type: 'number' });
    const acInput = useField({ type: 'number' });

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown); }

    }, [counter]);

    useEffect(() => {

        if (counter === characters.length) {
            setTurn(turn + 1);
            reset();
        }

    }, [counter]);

    const addCharacterCard = () => {

        const name = characterInput.value;
        const initiative = initiativeInput.value;
        const ac = acInput.value;

        if ((!name || !initiative) || (!initiative && !ac) ) return;

        setCharacters([...characters, { name, initiative, ac, isHero }]);
        characterInput.clean();
        initiativeInput.clean();
        acInput.clean();

        characterInputRef.current.focus();
    };

    const handleClick = () => {
        addCharacterCard();
    };

    const handleEnter = ({ keyCode }) => {
        if (keyCode !== 13) return
        addCharacterCard();
    };

    const handleSwitch = ({ target }) => {
        const { checked } = target;
        setIsHero(checked);
    };

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 39) increment();
        if (keyCode === 37) decrement();
    };

    return (
        <>
            <FormSection>
                <CharacterForm onKeyDown={handleEnter} >
                    <TeamMemberSwitch>
                        <Text color="#fff"> Team member </Text>
                        <Switch initialChecked size="sm" color="secondary" onChange={handleSwitch} />
                    </TeamMemberSwitch>

                    <Input {...characterInput} placeholder="Character" ref={characterInputRef} />
                    <Input {...initiativeInput} placeholder="Initiative" />
                    <Input {...acInput} placeholder="AC" />

                    <Button bordered color="primary" auto onPress={handleClick}>Add</Button>
                </CharacterForm>
            </FormSection>

            <PlayerSection>
                <Grid.Container gap={1} direction="column">
                    {
                        characters.sort((a, b) => b.initiative - a.initiative)
                            .map((character, index) => (
                                <Grid key={index} xs={12} direction="column">
                                    <CharacterCard
                                        {...character}
                                        index={index}
                                        counter={counter}
                                        characterState={{ setCharacters, characters }}
                                        turn={turn}
                                    />
                                </Grid>
                            ))
                    }
                </Grid.Container>
            </PlayerSection>

            <TurnInfo
                turn={turn}
                currentPlayer={currentPlayer} 
            />
        </>
    )
}

const TeamMemberSwitch = styled.header`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 2px;
`

const FormSection = styled.section`
    position: absolute;
    top: 25px;
    left: 25px;
`;

const PlayerSection = styled.section`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100vh;
    /* width: 500px; */

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #a8bbbf;
    }
`;

const CharacterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px;
    
    background: #111;
	background: linear-gradient(#1b1b1b, #111);
	border: 1px solid #000;
	border-radius: 5px;
	box-shadow: inset 0 0 0 1px #272727;
`;

const glow = keyframes`

    0% {
		border-color: #337c99;
		box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
    }	
    100% {
		border-color: #66f7ff;
		box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
    }
`;

const Input = styled.input`
    background: #222;	
	background: linear-gradient(#333, #222);	
	border: 1px solid #444;
	border-radius: 8px;
	box-shadow: 0 2px 0 #000;
	color: #888;
	display: block;
	float: left;
	font-family: 'Cabin', helvetica, arial, sans-serif;
	font-size: 13px;
	font-weight: 400;
	height: 40px;
	margin: 0;
	padding: 0 10px;
	text-shadow: 0 -1px 0 #000;
	width: 200px;

    &::-webkit-input-placeholder {
        color: #888;
    }

    &:-moz-placeholder {
        color: #888;
    }

    &:focus {
        animation: ${glow} 800ms ease-out infinite alternate;
        background: #222922;
        background: linear-gradient(#333933, #222922);
        border-color: #393;
        box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
        color: #efe;
        outline: none;
    }

    &:focus::-webkit-input-placeholder { 
        color: #efe;
    }

    &:focus:-moz-placeholder {
        color: #efe;
    }
`;