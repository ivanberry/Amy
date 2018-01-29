import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PopOver.module.css';

/**
 * items: @obejcet{content, fn[option], path}
 * styles: [option]
 * @param {*} props 
 */
const PopOver = props => {
	let { items } = props;
	return (
		<div className={styles.container}>
			<div className='popover-arrow'></div>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						<Link to={item['path']}>{item['content']}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

PopOver.propTypes = {
	items: PropTypes.array
};

export default PopOver;
