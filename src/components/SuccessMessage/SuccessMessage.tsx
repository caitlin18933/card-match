import React from 'react';
import { StyledButton } from '../../App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from '../../redux/gameSlice';
import { RootState } from '../../redux/store';
import Campfire from '../../assets/campfire.svg';

const SuccessMessage: React.FC<{
}> = ({

}) => {
        const dispatch = useDispatch();
        const { cards, turnCounter } = useSelector((state: RootState) => state.game);

        return (
            <>
                <img src={Campfire} alt=" " width='300px' height='300px' role='decoration' />
                <p aria-live='assertive'>Congratulations! You successfully matched {cards?.length} cards in {turnCounter} turns</p>
                <StyledButton onPress={() => dispatch(resetGame())}>Play Again</StyledButton>
            </>
        );
    };

export default SuccessMessage;