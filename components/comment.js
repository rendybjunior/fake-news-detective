import homeStyles from '../styles/home.module.css';

export default function Comment({ image_url, text }) {
	return (
		<div className={`${homeStyles.comment}`}>
			<img src={image_url} className={`${homeStyles.commentImage}`} />
			<div className={`${homeStyles.speechbubblewrapper}`}>
				<div className={`${homeStyles.speechbubble}`}>
					<div className={`${homeStyles.speechbubbletext}`}>{text}</div>
				</div>
			</div>
		</div>
	);
}
