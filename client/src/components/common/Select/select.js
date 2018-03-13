import React, { Component } from 'react';
import styles from './select.module.css';
import classNames from 'classnames';

import { saveRef } from '../../../ulti/';

/**
 * options: @param []
 * onchange: func
 * onClick: func
 */
class Select extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocus: false,
			hasTags: true
		};
	}

	placeholderClick = e => {
		let _target = e.target;
		this.tagInput.focus();
		this.setState({
			isFocus: true
		});
	};

	handleInputBlur = e => {
		this.setState({
			isFocus: false
		});
	};

	handleKeydown = e => {
		if (e.keyCode === 'Enter') {
			this.props.testFunc();
		}
	};

	render() {
		let { options } = this.props;
		let focus = classNames({
			[styles['tag-choice']]: true,
			[styles['isFocus']]: this.state.isFocus
		});
		return (
			<div>
				<div>
					<div className={styles['tag-choice-container']}>
						{/* placeholder container */}
						<div onClick={this.placeholderClick} className={focus}>
							placeholder
						</div>
						{/* selected items from dropdown lists or input directly */}
						<ul>
							<li className={styles['tag-choice__item']}>
								<input
									ref={saveRef(this, 'tagInput')}
									onBlur={this.handleInputBlur}
									onKeydown={this.props.testFunc()}
								/>
							</li>
						</ul>
					</div>
					{/* dropdown lists */}
					<div>
						<ul style={{ display: 'none' }}>
							{options.map((option, index) => <li key={`option_${index}`}>{option['name']}</li>)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Select;

Select.display = 'Select';
