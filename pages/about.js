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
					Curriculum and some materials are from{' '}
					<a href="https://cor.stanford.edu/">Civic Online Reasoning</a>. Licensed under{' '}
					<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
						Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
					</a>{' '}
					and{' '}
					<a href="https://creativecommons.org/licenses/by/4.0/">
						Attribution 4.0 International (CC BY 4.0)
					</a>.
				</li>
				<li>
					Detective icon is made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from{' '}
					<a href="https://www.flaticon.com/">www.flaticon.com</a>
				</li>
				<li>
					Hosted on <a href="https://www.heroku.com/">Heroku</a> using Free and Hobby plan.
				</li>
				<li>
					Background music <a href="http://dig.ccmixter.org/files/Javolenus/61812">Incognito</a> by Javolenus
					(c) copyright 2020 Licensed under a{' '}
					<a href="https://creativecommons.org/licenses/by-nc/3.0/">
						Creative Commons Attribution Noncommercial (3.0) license
					</a>. Ft: Martijn de Boer (NiGiD)
				</li>
				<li>
					Winning sound effect by{' '}
					<a href="https://freesound.org/people/rhodesmas/sounds/320775/">rhodesmas</a>. Licensed under{' '}
					<a href="https://creativecommons.org/licenses/by/3.0/">the Attribution License</a>.
				</li>
				<li>
					Losing sound effect by <a href="https://freesound.org/people/TaranP/sounds/362204/">TaranP</a>.{' '}
					Licensed under <a href="https://creativecommons.org/licenses/by/3.0/">the Attribution License</a>.
				</li>
			</ul>
		</Layout>
	);
}
