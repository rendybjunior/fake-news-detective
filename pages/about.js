import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';

export default function About() {
	return (
		<Layout about>
			<Head>
				<title>About - {siteTitle}</title>
			</Head>
			<h2>About</h2>
			<p>
				The game was part of Summer 2020 <a href="http://omscs6460.gatech.edu/">Educational Technology</a>{' '}
				course, <a href="https://omscs.gatech.edu/">OMSCS Georgia Tech</a>. Developed by{' '}
				<a href="https://rendyistyping.com/about/">Rendy B. Junior</a> with Ken Brooks as mentor. Codes are{' '}
				<a href="https://github.com/rendybjunior/fake-news-detective">open sourced</a> with MIT license.
			</p>
			<h2>Credits</h2>
			<ul>
				<li>
					The game is using <a href="https://cor.stanford.edu/">Civic Online Reasoning</a>'s curriculum.
				</li>
				<li>
					Detective icon is made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from{' '}
					<a href="https://www.flaticon.com/">www.flaticon.com</a>
				</li>
				<li>
					Hosted on <a href="https://www.heroku.com/">Heroku</a> using Free and Hobby plan.
				</li>
			</ul>
		</Layout>
	);
}
