import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

export default function Ending() {
	return (
		<Layout about>
			<Head>
				<title>Congratulations!</title>
			</Head>
			<h2>Congratulations!!!</h2>
			<p>
				You have finished all the cases, good job! Now you are officially part of the Hoax Buster Fact Checking
				Organization!
			</p>
			<p>
				<Link href="/about">
					<a className={homeStyles.button}>About</a>
				</Link>
			</p>
		</Layout>
	);
}
