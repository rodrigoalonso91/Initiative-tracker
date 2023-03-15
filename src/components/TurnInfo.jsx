import { Text } from "@nextui-org/react";
import styled from "styled-components";

export default function TurnInfo ({ turn, currentPlayer }) {
    return (
        <TurnSection>
            <Text h3 color="success">Turn</Text>
            <Text h5 color="white">{turn}</Text>
            <Text h3 color="success">Player</Text>
            <Text h5 color="white">{currentPlayer}</Text>
        </TurnSection>
    )
}

const TurnSection = styled.section`
    position: absolute;
    top: 25px;
    right: 25px;

    background: #111;
	background: linear-gradient(#1b1b1b, #111);
	border: 1px solid #000;
	border-radius: 5px;
	box-shadow: inset 0 0 0 1px #272727;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    padding: 20px;
`;