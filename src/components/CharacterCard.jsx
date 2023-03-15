import styled from "styled-components"
import { Text, Button } from "@nextui-org/react";
import { ArmorClassIcon } from "./icons/ArmorClassIcon";
import { InitiativeIcon } from "./icons/InitiativeIcon";
import { useState } from "react";
import Spell from "./Spell";


export const CharacterCard = ({ initiative, ac, name, isHero, characterState, index, counter, turn }) => {

    const [ spells, setSpells ] = useState([]);
    const [ animation, setAnimation ] = useState('animate__animated animate__fadeInUp');
    
    const handleKill = () => {
        const updatedCharacters = characterState.characters.filter(c => c.name !== name);
        characterState.setCharacters(updatedCharacters);
    };

    const handleSpell = () => {

        const newSpell = {
            name: 'Wall of fire',
            duration: 7,
            damage: '10d6'
        };

        setSpells([...spells, newSpell]);
    };

    return (
        <Card activePlayer={index === counter} className={animation} >

            <CardSection>
                <Text
                    size={19}
                    weight="bold"
                    css={{ textGradient: `${isHero ? '45deg, $yellow600 -20%, $red600 100%' : "45deg, $blue600 -20%, $red600 100%"}`, flexGrow: .7 }}
                    onDoubleClick={handleKill}
                >
                    {name}
                </Text>
                <Stat>
                    <InitiativeIcon color="#63d2ee" />
                    <Text size={15} css={{ color: '#fff' }}>{initiative}</Text>
                </Stat>
                <Stat>
                    <ArmorClassIcon color1="#7664ff" />
                    <Text size={15} css={{ color: '#fff' }}>{ac ? ac : '??'}</Text>
                </Stat>
            </CardSection>

            <CardSection>
                {
                    spells &&
                    spells.map((spell, index) =>
                        <Spell key={`${spell.name}-${index}`} {...spell} turn={turn} />
                    )
                }
            </CardSection>

            <CardSection>
                <Button.Group size="xs" color="warning" flat>
                    <Button onPress={handleSpell}>Spell</Button>
                    <Button>Buff</Button>
                    <Button>Debuff</Button>
                    <Button onPress={handleKill}>Kill</Button>
                </Button.Group>
            </CardSection>

        </Card>
    )
}

const Card = styled.div`
    background: #111;
	background: linear-gradient(#1b1b1b, #111);
	border: ${ ({ activePlayer }) => activePlayer ? "1px solid #fdadfe" : "none" };
	border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 13px;
    max-height: 100px;
    width: 550px;
    justify-content: space-between;
`;

const CardSection = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Stat = styled.section`
    display: flex;
    gap: 6px;
`;