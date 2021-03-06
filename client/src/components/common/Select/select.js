import React, { Component } from 'react';
import styles from './select.module.css';
import classNames from 'classnames';

import * as Ulti from '../../../ulti/';

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
      hasTags: true,
      selectedTags: Ulti.getInfo('__TAGS__').tags.v || [],
      width: 0
    };
  }

  shouldComponentUpdate(nextProp, nextState) {
    return true;
  }

  handleClickToFocus = e => {
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
    if (e.keyCode === 13 )  {
      // let _hasValue = this.state.selectedTags.findIndex(_value);
      // if (_hasValue !== -1) return false;
      //after enter, lift up the tags inputed to parent component
      //local state async change first
      this.setState({
        selectedTags: [...this.state.selectedTags, e.target.value.trim()]
      }, () => Ulti.storeInfo('__TAGS__', { tags: { v: this.state.selectedTags } }));
      this.props.onSelectTags(this.state.selectedTags.concat(_value.trim()).join(','));
      e.target.value = '';
    } else {
      this.mirrorInput.innerText = _value;
      this.setState({
        width: this.mirrorInput.offsetWidth
      });
    }
  };

  render() {
    let inline_input = classNames({
      [styles['tag-choice__item']]: true,
      [styles['tag-choice__inline']]: true
    });

    return (
      <section>
        <section className={styles['tag-choice__container']}>
          <div className={styles['tag-choice__wrapper']} onClick={this.handleClickToFocus}>
            <ul>
              {/* why change preview state will change Select component state? */}
              {this.state.selectedTags.map((value, index) =>
                <li className={styles['tag-choice__item']} key={value + '_' + index}>
                  <div className={styles['tag-choice__item__content']}>
                    {value}
                  </div>
                  <span className={styles['tag-choice__item__remove']}>x</span>
                </li>
              )}
              <li className={inline_input}>
                <div className={styles['tag-choice__wrap']}>
                  <input
                    ref={Ulti.saveRef(this, 'tagInput')}
                    onBlur={this.handleInputBlur}
                    onKeyDown={this.handleKeydown}
                    className={styles['tag-choice__inline']}
                    style={{width: this.state.width}}
                  />
                  <span ref={Ulti.saveRef(this, 'mirrorInput')} className={styles['tag-choice__mirror']}>"&nbsp"</span>
                </div>
              </li>
            </ul>
          </div>
          {/* dropdown lists */}
          {/* <div>
            <ul style={{ display: 'none' }}>
              {options.map((option, index) => <li key={`option_${index}`}>{option['name']}</li>)}
            </ul>
          </div> */}
        </section>
        {/* dropdown lists */}
        {/* <div className={styles['tag-options__wrapper']}>
          <ul className={blur}>
            {options.length ? options.map((option, index) => <li key={`option_${index}`}>{option['name']}</li>) : <li>{this.props.notFoundContent}</li>}
          </ul>
        </div> */}
      </section>
    );
  }
}

export default Select;

Select.display = 'Select';
