import { Button, Input, NumberField } from "react-aria-components";
import styled from "styled-components";
import { colors } from "../Colors";

export const InputModeWrapper = styled.div`
    margin-top: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const StyledInput = styled(Input)`
    padding: 8px;
    border-radius: 0;
    border: 1px solid ${colors[1]};
    flex: 1;

    &:focus-visible {
        outline: none;
    }
`;

export const CounterButtons = styled(Button)`
    padding: 8px;
    background-color: ${colors[0]};
    border: 1px solid ${colors[1]};
    color: ${colors[1]};

    &:hover {
        background-color: ${colors[2]};
    }
`;

export const DecrementButton = styled(CounterButtons)`
    border-radius: 4px 0 0 4px;
    border-right: none;

`;

export const IncrementButton = styled(CounterButtons)`
    border-radius: 0 4px 4px 0;
    border-left: none;
`;

export const StyledNumberField = styled(NumberField)`   
    &:has(input:focus-visible) {
        ${StyledInput}, ${CounterButtons} {
            border-color: ${colors[2]} !important;
        }
    }
`;