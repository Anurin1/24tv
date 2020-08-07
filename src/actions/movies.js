export function clearGameStates() {
  return dispatch => {
    dispatch({
      type: "CLEAR_GAME_STATES",
    });
  };
}