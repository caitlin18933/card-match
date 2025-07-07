import styled from "styled-components";
import { colors } from './components/Colors'
import { Button } from "react-aria-components";

export const AppWrapper = styled.div`
    text-align: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: ${colors[0]};
    position: relative;
`;

export const StyledButton = styled(Button)`
    padding: 10px 20px;
    background-color: ${colors[1]};
    border: none;
    border-radius: 4px;
    color: ${colors[0]};

    &:hover {
        background-color: ${colors[2]};
    }

    &:active {
        color: ${colors[1]};
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors[1]};
    color: ${colors[0]};
    position: sticky;
    top: 0;
    height: 80px;
    z-index: 10;

    h1 {
        font-size: 3rem;
    }

    @media (max-width: 600px) {

        h1 {
            font-size: 2rem;
        }
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 80px;
    z-index: 10;
`;

export const ResetButton = styled(Button)`
    flex: 1;
    background-color: ${colors[0]};
    color: ${colors[1]};
    border: none;
    border: 1px solid ${colors[1]};
    border-top: none;
    padding: 10px 20px;
    font-size: 1.2rem;

    &:hover {
        background-color: ${colors[2]};
    }

    &:active {
        color: ${colors[1]};
    }
`;

export const TurnCounter = styled.span`
    flex: 1;
    padding: 10px 20px;
    border: 1px solid ${colors[1]};
    border-top: none;
    border-left: none;
    font-size: 1.2rem;
    color: ${colors[1]};
    background-color: ${colors[0]};
`;

export const CardGrid = styled.div<{ $columns: number }>`
    ${({ $columns }) => `
        display: grid;
        grid-template-columns: repeat(${$columns}, 1fr);
        gap: 10px;
        margin: 20px auto;
        max-width: fit-content;
        justify-items: center;

        @media (max-width: 800px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 500px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `}
`;