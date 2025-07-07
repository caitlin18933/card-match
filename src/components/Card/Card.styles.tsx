import styled from "styled-components";
import UnlitMatch from '../../assets/unlit.svg';
import LitMatch from '../../assets/lit.svg';
import { colors } from "../Colors";

export const CardWrapper = styled.div<{ $isClickable?: boolean }>`
    ${({ $isClickable }) => `
        position: relative;
        width: 100px;
        height: 150px;
        border-radius: 8px;

        ${$isClickable && `
            cursor: pointer;

            &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        `}
    `}
`;

export const CardBack = styled.div<{ $isFlipped?: boolean; $isMatched: boolean }>`
${({ $isFlipped, $isMatched }) => `
    background-color: ${colors[3]};
    border: 1px solid ${colors[4]};
    border-radius: 8px;
    color: ${colors[0]};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform 0.5s;

    ${$isFlipped && `
        transform: rotateY(0deg);
        z-index: 2;
    `}

    ${$isMatched && `
        background-image: url(${LitMatch});
        background-repeat: no-repeat;
        background-size: auto 80%;
        background-position: center;
    `}
  `}
`;

export const CardFront = styled.div<{ $isFlipped?: boolean }>`
    ${({ $isFlipped }) => `
        background-color: ${colors[4]};
        background-image: url(${UnlitMatch});
        background-repeat: no-repeat;
        background-size: auto 80%;
        background-position: center;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        transition: transform 0.5s;
        transform: rotateY(0deg);

        ${$isFlipped && `
            transform: rotateY(180deg);
            z-index: 1;
        `}
    `}
`;
