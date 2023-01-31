import styled from "styled-components"
import { Text, Button } from "@nextui-org/react";
import { ArmorClassIcon } from "./icons/ArmorClassIcon";
import { InitiativeIcon } from "./icons/InitiativeIcon";
import { useState } from "react";

export const CharacterCard = ({ initiative, ac, name, isHero, characterState }) => {

    const [spell, setSpell] = useState([]);

    const handleKill = () => {
        const updatedCharacters = characterState.characters.filter(c => c.name !== name);
        characterState.setCharacters(updatedCharacters);
    };

    const handleSpell = () => {

        const newSpell = {
            name: 'fireball',
            duration: null,
            damage: '10d6'
        };

        setSpell([...spell, newSpell]);
    };

    return (
        <Card>

            <CardSection>
                <Text
                    size={19}
                    weight="bold"
                    css={{ textGradient: `${isHero ? '45deg, $yellow600 -20%, $red600 100%' : "45deg, $blue600 -20%, $red600 100%"}`, flexGrow: .7 }}
                >
                    {name}
                </Text>
                <Stat>
                    <InitiativeIcon color="#2510e8" />
                    <Text size={15} css={{ color: '#fff' }}>{initiative}</Text>
                </Stat>
                <Stat>
                    <ArmorClassIcon color1="#2510e8" />
                    <Text size={15} css={{ color: '#fff' }}>{ac ? ac : '??'}</Text>
                </Stat>
            </CardSection>

            <CardSection>
                {
                    spell.map(s =>
                        <Text size={15} css={{ color: '#fff' }}>
                           { s.name }
                        </Text>
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
	border: 1px solid #000000;
	border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 13px;
    height: 100px;
    width: 450px;
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