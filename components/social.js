import { Component } from 'react';
import { siteUrl, siteTitle } from './layout';
import homeStyles from '../styles/home.module.css';

import { FacebookShareButton, TwitterShareButton, TwitterIcon, WhatsappShareButton } from 'react-share';

export default class Social extends Component {
	render() {
		const hashtags = [ 'FakeNewsDetectiveGame' ];
		return (
			<span className={`${homeStyles.button}  ${homeStyles.floatleftbutton}`}>
				{/* <TwitterIcon size={16} />{' '} */}
				<TwitterShareButton
					url={siteUrl}
					children="Share"
					title="Check this out, game to spot fake stories: Fake New Detective Game"
					hashtags={hashtags}
				/>
			</span>
		);
	}
}
