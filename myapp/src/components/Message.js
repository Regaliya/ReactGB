import './style/style.css';

function Messege({ messageList }) {
    return (
      <ul className="messege">
        {messageList ? messageList.map((el, index) => <li key={index} className="messege_item"><span className="messege_item-author">{el.name + ":"}</span><span className="messege_item-text">{" " + el.text}</span></li>) : null}
      </ul>
    )
  };
  
  export default Messege;