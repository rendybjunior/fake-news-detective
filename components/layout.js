import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Score from './score';

const name = 'Username';
export const siteTitle = 'Fake News Detective';

export default function Layout({ children, home, levels, score, about }) {
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
				alt={name}
			  />
			  <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
			</>
		  ) : (
			<>
				<Score step={score ? score : 0} />
				<img
					src="/images/explore.png"
					className={`${styles.headerImage} ${utilStyles.borderCircle}`}
					alt={name}
				/>
			  <h2 className={utilStyles.headingMd}>{name}</h2>
			</>
		  )}
		</header>
		<main>{children}</main>
		{!home && !levels && (
		  <div className={styles.backToHome}>
			<Link href="/levels">
			  <a>← Back to Levels</a>
			</Link>
		  </div>
		)}
		{(levels) && (
			<div>
			<Link href="/about">
				<a>About</a>
			</Link>
			</div>
		)}
	  </div>
	);
}
