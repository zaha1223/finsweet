import React from 'react';
import styles from './main.module.css';
import whoareyou from '../../assets/whoareyou.png';

export const Main = () => {
	return (
		<main>
			<div className={styles.flex}>
				<div>
					<p>Who we are</p>
					<h2 className={styles.mainHead}>Goal focussed</h2>
					<p className={styles.mainTxt}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div>
					<h2 className={styles.mainHead}>Continuous improvement</h2>
					<p className={styles.mainTxt}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
			<img className={styles.mainImg} src={whoareyou} />
		</main>
	);
};
