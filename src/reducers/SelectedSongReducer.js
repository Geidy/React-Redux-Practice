
export const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong; 
}