import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewData }) => {
  // Estado del input
  const [inputValue, setInputValue] = useState("");

  // Funcion para capturar el evento de teclado en el input, tomando su valor.
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  // Funcion de envio de valores del input a la funcion de componente padre.
  const sendData = (e) => {
    // Detiene el evento para que no actualice el DOM.
    e.preventDefault();

    // Condicional que valida si el input esta vacio o con la cantidad minima para aceptar el nuevo valor.
    if (inputValue.length <= 2) return;
    // Enviar el nuevo valor tomado desde el estado del input
    onNewData(inputValue);
    // Limpia el input.
    setInputValue("");
  };

  return (
    // Formulario que contiene un input y un evento submit
    <form onSubmit={sendData}>
      {/* Comoponente Input al cual se le asigna el valor del estado del input */}
      <input
        type="text"
        placeholder={"Buscar GIF"}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

// Asignación de PropTypes de las valores que son recibidos y su obligatoria asignación.
AddCategory.propTypes = {
  onNewData: PropTypes.func.isRequired,
};
