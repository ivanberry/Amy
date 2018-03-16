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
      hasTags: true,
      selectedTags: [],
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
    let _value = e.target.value.trim();
    if (e.keyCode === 13) {
      this.props.onSelectTags(this.state.selectedTags.concat(_value.trim()).join(','));
      this.setState({
        selectedTags: this.state.selectedTags.concat(e.target.value.trim())
      });
      e.target.value = '';
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
      <section>
        <section>
          <div className={styles['tag-choice-container']}>
            {/* placeholder container */}
            <div onClick={this.placeholderClick} className={focus}>
              placeholder
						</div>
            {/* selected items from dropdown lists or input directly */}
            <ul>
              {this.state.selectedTags.map((value, index) =>
                <li className={styles['tag-choice__item']} key={value}>{value}</li>
              )}
              <li className={styles['tag-choice__item']}>
                <input
                  ref={saveRef(this, 'tagInput')}
                  onBlur={this.handleInputBlur}
                  onKeyDown={this.handleKeydown}
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
        </section>
        {/* dropdown lists */}
        <div className={styles['tag-options__wrapper']}>
          <ul className={blur}>
            {options.length ? options.map((option, index) => <li key={`option_${index}`}>{option['name']}</li>) : <li>{this.props.notFoundContent}</li>}
          </ul>
        </div>
      </section>
    );
  }
}

export default Select;

Select.display = 'Select';
