import React, { useState } from 'react';

export function Points(props) {
  const [inputValue, setInputValue] = useState(null);

  function handleBlur(event) {
    if (Number(event.target.value)) {
      props.onChange(event);
    }

    setInputValue(null);
  }

  function handleChange(event) {
    const newValue = event.target.value.replace(/^0+|\D/g, '');
    setInputValue(newValue);
  }

  return (
    <input
      className="text-right appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none points-input"
      type="text"
      placeholder="Points"
      value={inputValue == null ? (props.value || '') : inputValue}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}
