import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';
import Score from './score';
import BGM from './bgm'

// const name = 'Username';
export const siteTitle = 'Fake News Detective';

export default function Layout({ children, home, levels, score, story }) {
	return (
	<div className={styles.container}>
		<Head>
		  <link rel="icon" href="/favicon.ico" />
		  <meta
			name="description"
			content="Learn how to build a personal website using Next.js"
		  />
		  <meta
			property="og:image"
			content={`https://og-image.now.sh/${encodeURI(
			  siteTitle
			)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
		  />
		  <meta name="og:title" content={siteTitle} />
		  <meta name="twitter:card" content="summary_large_image" />
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
		{(levels) && (
			<>
			<div className={styles.gameFooter}>
				<Link href="/about">
					<a className={homeStyles.button}>About</a>
				</Link>
			</div>
			<BGM />
			</>
		)}
		</footer>
	  </div>
	);
}
