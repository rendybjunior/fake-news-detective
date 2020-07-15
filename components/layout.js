import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';
import Score from './score';
import BGM from './bgm'
import Social from './social';

// const name = 'Username';
export const siteTitle = 'Fake News Detective';
export const siteUrl = 'https://fake-news-detective.herokuapp.com/';

export default function Layout({ children, home, levels, score, story }) {
	return (
	<div className={styles.container}>
		<Head>
		  <link rel="icon" href="/favicon.ico" />
		  <meta name="description" content="Fake News Detective Game" />
			<title>{siteTitle}</title>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@rendybjunior" />
			<meta name="twitter:title" content="Fake News Detective Game" />
			<meta
				name="twitter:description"
				content="Check this game out to learn how to spot fake stories on social media."
			/>
			<meta name="twitter:image" content="https://fake-news-detective.herokuapp.com/images/explore.png" />
		</Head>
		<header className={styles.header}>
		  {home ? (
			<>
			  <img
				src="/images/explore.png"
				className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
				alt={siteTitle}
			  />
			  <h1 className={utilStyles.headingLg}>{siteTitle}</h1>
			</>
		  ) : (
			<>
				<div className={styles.gameHeader}>
					<Score step={score ? score : 0} />
					<img
						src="/images/explore.png"
						className={`${styles.gameImage} ${utilStyles.borderCircle}`}
						alt={siteTitle}
					/>
				</div>
			</>
		  )}
		</header>
		<main>{children}</main>
		<footer className={styles.footer}>
		{!home && !levels && !story && (
			<div className={styles.gameFooter}>
				<div className={styles.backToHome}>
				<Link href="/levels">
					<a className={homeStyles.button}>← Back to Levels</a>
				</Link>
				</div>
			</div>
		)}
		{(home && (<BGM />))}
		{(levels) && (
			<>
			<div className={styles.gameFooter}>
				<Link href="/about">
					<a className={`${homeStyles.button} ${homeStyles.floatleftbutton}`} >About</a>
				</Link>
				<Social />
			</div>
			<BGM />
			</>
		)}
		</footer>
	  </div>
	);
}
