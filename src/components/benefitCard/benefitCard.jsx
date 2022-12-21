import React from 'react';
import bencardstyles from './benefitCard.module.css';

export const BenefitCard = (prop) => {
	return (
		<div className={bencardstyles.bencardbox}>
            <img src={prop.icon} />
			<h2 className={bencardstyles.head}>{prop.head}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
		</div>
	);
};
