import { combineReducers } from 'redux';
import { SongReducer } from './SongReducer';
import { SelectedSongReducer } from './SelectedSongReducer';


//we have two reducers that are combined bec we wanna track state of boths.
export default combineReducers({
    songs: SongReducer, 
    selectedSong: SelectedSongReducer
})
