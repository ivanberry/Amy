import React, { Component } from 'react';
import styles from './select.module.css';
import classNames from 'classnames';

import { saveRef } from '../../../ulti/';

/*o
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

		let blur = classNames({
			[styles['isFocus']]: !this.state.isFocus
		});

		return (
			<div className={styles['tag-choice__container']}>
				<div className={styles['tag-choice__wrapper']}>
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
								onKeydown={this.handleKeydown}
							/>
						</li>
					</ul>
				</div>
				{/* dropdown lists */}
				<div className={styles['tag-options__wrapper']}>
					<ul iclassName={blur}>
						{options.map((option, index) => <li key={`option_${index}`}>{option['name']}</li>)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Select;

Select.display = 'Select';
