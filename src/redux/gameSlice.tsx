import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  cards: string[] | undefined;
  activeCards: string[];
  matchedCards: string[];
  turnCounter: number;
  gameSuccess: boolean; 
}

const initialState: GameState = {
  cards: undefined,
  activeCards: [],
  matchedCards: [],
  turnCounter: 0,
  gameSuccess: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Set of shuffled cards created after the game has been started
    setCards(state, action: PayloadAction<string[] | undefined>) {
      state.cards = action.payload;
    },
    // Active cards the the 1-2 cards that the user has currently flipped
    setActiveCards(state, action: PayloadAction<string[]>) {
      state.activeCards = action.payload;
    },
    // Matched cards are the cards that have been successfully matched 
    setMatchedCards(state, action: PayloadAction<string[]>) {
      state.matchedCards = action.payload;
    },
    // Turn counter is the number of attempts the user has made to match cards, It increments by 1 each time the user flips two cards
    setTurnCounter(state, action: PayloadAction<number>) {
      state.turnCounter = action.payload;
    },
    // Game success is a boolean that indicates whether the user has successfully matched all cards
    setGameSuccess(state, action: PayloadAction<boolean>) {
      state.gameSuccess = action.payload;
    },
    // Reset the game state to initial values
    resetGame(state) {
      state.cards = undefined;
      state.activeCards = [];
      state.matchedCards = [];
      state.turnCounter = 0;
      state.gameSuccess = false;
    },
  },
});

export const {
  setCards,
  setActiveCards,
  setMatchedCards,
  setTurnCounter,
  setGameSuccess,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;