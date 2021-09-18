import buttonClass from "./Button.styles";


const Button = (props) => {

    const targetFunction = props.target;

    return (
        <button class={buttonClass} onClick={targetFunction}>
            {props.children}
        </button>
    )
};

export default Button;