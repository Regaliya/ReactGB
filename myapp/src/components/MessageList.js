import { useState, memo } from "react";
import './style/style.css';

function InputForm({ setMessageList }) {

  const [nameValue, setAutorValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setMessageList((prev) => [...prev, { author: nameValue, text: textValue }]);
    setTextValue("");
  };

  return (
    <form className="form">
      <input 
      type="text" 
      className="form_author" 
      placeholder="Имя"
      value={nameValue} onChange={(e) => setAutorValue(e.target.value)}
      >
      </input>
      <input type="text" 
      className="form_text"
      placeholder="Сообщение" 
      value={textValue} onChange={(e) => setTextValue(e.target.value)} 
      >
      </input>
      <button 
      type="submit" 
      className="form_button" 
      onClick={(e) => submitHandler(e)}
      >
        Отправить
      </button>
    </form >
  );
};

export default memo(InputForm);