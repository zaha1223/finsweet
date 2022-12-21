import React from 'react';
import misStyle from './misson.module.css';
import misManImg from '../../assets/misMan.png';
import visImg from '../../assets//visimg.png';

export const Mission = () => {
	return (
		<div className={misStyle.misBox}>
			<div className={misStyle.flex}>
				<div>
					<p>Our Mission </p>
					<h1 className={misStyle.misHead}>Inspire, Innovate, Share</h1>
					<p className={misStyle.misTxt}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<img className={misStyle.misImg} src={misManImg} />
			</div>
			<div className={misStyle.flex} id={misStyle.mistop}>
				<img className={misStyle.misImg} src={visImg} />
				<div className={misStyle.mistop}>
					<p>Our Vision</p>
					<h1 className={misStyle.misHead}>Laser focus</h1>
					<p className={misStyle.misTxt}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
	);
};
