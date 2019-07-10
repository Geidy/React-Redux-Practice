import React from 'react';
import { connect } from 'react-redux'
import { statement } from '@babel/template';
import { selectSong } from '../actions';
import style from '../css/style.css';

class SongList extends React.Component {


	renderList() {
		
		//const SONGS = [{ title: "Song 1" }, { title: "Song 2" }, { title: "Song 3" }]

		return this.props.songs.map((song) => {
			return (
				<div className="grid-container" key={song.title}>
					<div className="row">
						<button type="button" className="button"
							
							onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">
						{song.title}
					</div>
				</div>
			);
		});
	}

	render() {

		return (
			<div className="content">
				{this.renderList()}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return{ songs: state.songs }
};




export default connect(mapStateToProps, {selectSong})(SongList);