import React, { Component } from 'react';

import styles from './Editor.module.css';

class Editor extends Component {
	constructor() {
		super();
		this.state = {
			isPreview: true,
			hasContent: false
		};
    }
    
    componentDidMount() {
        // this.input.focus();
    }

	toggleEditorState = event => {
		let _target = event.target,
			_isPreview = this.state.isPreview,
			_state = _target.dataset.state === 'prev';
		if (_state) {
			this.setState({
				isPreview: true
			});
		} else {
			this.setState({
				isPreview: false
			});
		}
	};

    contentChange = () => {
        if ( !this.state.hasContent && this.textInput.value) {
            this.setState({
                hasContent: true
            })
        }
    };

	render() {
		let _isPreview = this.state.isPreview,
			_hasContent = this.state.hasContent;
		return (
			<div className={styles.container}>
				<nav className={styles['nav']} onClick={this.toggleEditorState}>
					<button className={_isPreview ? '' : styles.selected}>编写</button>
					<button data-state="prev" className={_isPreview ? styles.selected : ''}>
						预览
					</button>
				</nav>
				<article className={styles['content-container']}>
					{this.state.isPreview ? (
						<div>xxx</div>
					) : (
						<textarea onChange={this.contentChange} ref={input => (this.textInput = input)} />
					)}
				</article>
				<div className={styles['publish-container']}>
					<button
						type="submit"
						className={
							(_hasContent ? styles['publish'] : styles['unpublish']) +
							' ' +
							styles['float-right-button']
						}
					>
						发布
					</button>
				</div>
			</div>
		);
	}
}

export default Editor;
