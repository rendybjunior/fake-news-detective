// import Head from 'next/head';
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';

// const name = 'Rendy';
// export const siteTitle = 'Fake News Detective';

export default function GameLayout({ children }) {
	return (
		<div>
			<div>We just got our first case! Hmm there's not much information here, but let's do our best!</div>
			<div>{children}</div>
		</div>
	);
}
