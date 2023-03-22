import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewData }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (inputValue.length <= 2) return;

    onNewData(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={sendData}>
      <input
        type="text"
        placeholder={"Buscar GIF"}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewData: PropTypes.func.isRequired,
};
