import { useState } from "react";

function InputField({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function onButtonPress() {
    if (inputValue.length > 0) {
      console.log(`Submitting ${inputValue}`);
      onSubmit(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="input-field">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onButtonPress} placeholder="Add a grocery item">
        Add
      </button>
    </div>
  );
}

export default InputField;
