import React, { Children } from 'react';
import styles from './processCard.module.css'

export const ProcessCard = (children) => {
	return (
		<div className={styles.Card}>
            <div className={styles.cardFlex}>
                <div className={styles.round}></div>
                <div className={styles.border}></div>
            </div>
			<h2 className={styles.cardHead}>{children.head}</h2>
			<p className={styles.cardText}>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
		</div>
	);
};
