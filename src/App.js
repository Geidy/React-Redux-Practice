import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Header from './components/Header';

const App = () => {
	return (
		<div>
			<Header path="./component/Header"/>
		
		<div className="grid-container"> 
			<div className="row">
				<div className="column">
					<SongList />
				</div>
				<div className="column"> 
					<SongDetail />
				</div>
			</div>
		</div>
		</div>
	);  
};

export default App;
