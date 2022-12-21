import React from 'react';
import { BenefitCard } from '../../components';
import benstyles from './benefit.module.css';
import odamicon from '../../assets/odamla.png';
import taroq from '../../assets/taroruchlka.png'
import written from '../../assets/writeicon.png'

export const Benefit = () => {
	return (
		<div className={benstyles.benbox}>
			<h1 className={benstyles.benhead}>
				The benefits of working <br /> with us
			</h1>
			<div className={benstyles.flex}>
				<BenefitCard icon={written} head='Customize with ease' />
				<BenefitCard icon={taroq} head='Perfectly Responsive' />
				<BenefitCard icon={odamicon} head='Friendly Support' />
			</div>
		</div>
	);
};
