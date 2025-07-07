import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardFront, CardWrapper, CardBack } from './Card.styles';
import {
    setActiveCards,
    setMatchedCards,
    setTurnCounter,
    setGameSuccess
} from '../../redux/gameSlice';
import { RootState } from '../../redux/store';

interface CardProps {
    value: string;
    index: number;
}

const Card: React.FC<CardProps> = ({ value, index }) => {
    const dispatch = useDispatch();
    const { activeCards, matchedCards, turnCounter, cards } = useSelector((state: RootState) => state.game);

    const isFlipped = activeCards.includes(value) || matchedCards.includes(value);
    const isClickable = !isFlipped && activeCards.length < 2;

    function handleCardClick() {
        const newActive = [...activeCards, value];
        dispatch(setActiveCards(newActive));

        if (newActive.length === 2) {
            dispatch(setTurnCounter(turnCounter + 1));
            const [first, second] = newActive;
            // Design choice: to avoid creating an overcomplicated object structure for each card, we use the value of the card as a string appended with A or B to differentiate between the two cards. If we didnt append and additional identifier, the two cards would be indistinguishable and the flip state would be set incorrectly across both cards revealing the matching card each click.
            if (first.split('-')[0] === second.split('-')[0]) {
                setTimeout(() => {
                    const newMatched = [...matchedCards, first, second];
                    dispatch(setMatchedCards(newMatched));
                    dispatch(setActiveCards([]));
                    if (newMatched.length === cards?.length) {
                        dispatch(setGameSuccess(true));
                    }
                }, 500);
            } else {
                setTimeout(() => {
                    dispatch(setActiveCards([]));
                }, 1500);
            }
        }
    };

    return (
        // Design choice: by splitting the front and back of the card, we can hide the number value until the card is flipped.
        // This is to prevent the user from seeing the value or reading it using dev tools before clicking the card.
        <CardWrapper
            onClick={isClickable ? handleCardClick : undefined}
            $isClickable={isClickable}
            tabIndex={isClickable ? 0 : -1}
            role="button"
            aria-pressed={isFlipped}
            aria-label={`Card ${index + 1}`}
            onKeyDown={(e) => {
                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                    handleCardClick();
                }
            }}
        >
            <CardBack $isFlipped={isFlipped} $isMatched={matchedCards.includes(value)} aria-live='assertive'>
                {isFlipped ? value.split('-')[0] : null}
            </CardBack>
            <CardFront $isFlipped={isFlipped} />
        </CardWrapper>
    );
};

export default Card;