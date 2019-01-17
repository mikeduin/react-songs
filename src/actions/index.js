// Action Creator
export const selectSong = song => {
  // return an action. type is required, payload is option
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
}
