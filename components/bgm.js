import { Component } from 'react';

export default class BGM extends Component {
	componentDidMount() {
		window.document.getElementById('bgm').volume = 0.2;
	}

	render() {
		return <audio id="bgm" src="/sounds/Javolenus_-_Incognito-32.mp3" loop={true} autoPlay={true} />;
	}
}
