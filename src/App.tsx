import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import {
  resetGame,
} from './redux/gameSlice';
import InputMode from './components/InputMode/InputMode';
import Card from './components/Card/Card';
import { AppWrapper, Header, HeaderButtons, ResetButton, TurnCounter, CardGrid } from './App.styles';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    cards,
    turnCounter,
    gameSuccess
  } = useSelector((state: RootState) => state.game);

  // Calculates the number of columns based on the number of cards to create a responsive grid that resembles a square layout
  // The maximum number of columns is set to 8 to ensure the grid remains manageable and visually appealing. Beyond this, the user can scroll to see more cards.
  const columns = Math.min(8, Math.ceil(Math.sqrt(cards?.length ?? 0)));

  return (
    <AppWrapper>
      <Header>
        <h1>Match Up</h1>
      </Header>
      {gameSuccess ? (
        <SuccessMessage />
      ) : (
        <>
          {cards ? (
            <>
              <HeaderButtons>
                <ResetButton onPress={() => dispatch(resetGame())}>Reset</ResetButton>
                <TurnCounter>Attempts: {turnCounter}</TurnCounter>
              </HeaderButtons>

              <CardGrid $columns={columns}>
                {cards.map((card, index) => (
                  <Card key={index} value={card} index={index} />
                ))}
              </CardGrid>

            </>
          ) : (
            <>
              <h2>Welcome to Match Up!</h2>
              <p>Match all pairs of cards in the least number of turns possible</p>
              <p>To start, select the number of pairs you want to match.</p>
              <p>Once the game starts, click on a card to flip it over. Click on another card to try to find a match.</p>
              <p>If the cards match, they will remain face up. If they do not match, they will flip back over.</p>
              <p>Keep flipping cards until you match all pairs!</p>
              <InputMode />
            </>
          )}
        </>
      )}
    </AppWrapper>
  );
}

export default App;
