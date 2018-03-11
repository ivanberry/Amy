/**
 * options: @param []
 * onchange: func
 * onClick: func
 */

const Select = (props) => {
  let { options } = props;
  render() {
    return (
      <div>
        <input list='' />
        <datalist id=''>
          options.map(option => {
            <option>{option}</option>
          })
         </datalist>
      </div>
    )
  }
};

export default Select;