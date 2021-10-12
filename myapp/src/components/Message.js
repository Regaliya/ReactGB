import './style/style.css';

function Messege({ messageList }) {
    return (
      <ul className="messege">
        {messageList ? messageList.map((element) => <li className="messege_item"><span className="messege_item-author">{element.author + ":"}</span><span className="messege_item-text">{" " + element.text}</span></li>) : null}
      </ul>
    )
  };
  
  export default Messege;