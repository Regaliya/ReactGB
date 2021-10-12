import './style.css';

const MyComponent = (props) => {
    console.log(props, 'mine props')
    return (
        <div className="mine">
            My Component
        </div>

    )

};

export default MyComponent;
