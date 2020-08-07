const initialState = {

};

export default function (state = initialState, action) {
  switch (action.type) {

    case "ADD_WINNER": {
      return {
        ...state,
        isWinning: true,
        shouldBoardMove: false,
      };
    }
    

    default:
      return state;
  }
}

// -- Selectors
// export function getGameScore(state) {
//   return state.game.score;
// }


