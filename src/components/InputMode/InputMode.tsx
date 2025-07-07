import React from 'react';
import { Label, Group } from 'react-aria-components';
import { StyledButton } from '../../App.styles';
import { useDispatch } from 'react-redux';
import { setCards } from '../../redux/gameSlice';
import { generateCards } from '../../utils/generateCards';
import { InputModeWrapper, DecrementButton, IncrementButton, StyledInput, StyledNumberField } from './InputMode.styles';
import { RootState } from '../../redux/store';

// Choices:
// - The number of pairs is between 2 and 100.
// - 2 is the minimum number of pairs to play the game, because it requires at least two pairs to match.
// - 100 is the maximum number of pairs to play the game, because although the responsive layout would continue to work, the game would become too difficult to play with more than 100 pairs.

const InputMode: React.FC = () => {
    const [value, setValue] = React.useState<number>(2);
    const dispatch = useDispatch();

    return (
        <InputModeWrapper>
            <StyledNumberField defaultValue={value} minValue={2} maxValue={100} value={value} formatOptions={{ style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 }}
                onChange={setValue}>
                <Label>How many pairs would you like to match?</Label>
                <Group>
                    <DecrementButton slot="decrement">-</DecrementButton>
                    <StyledInput />
                    <IncrementButton slot="increment">+</IncrementButton>
                </Group>
            </StyledNumberField>
            <StyledButton
                onPress={() => {
                    dispatch(setCards(generateCards(value)))
                }}
            >
                Start Game
            </StyledButton>
        </InputModeWrapper>
    );
};

export default InputMode;