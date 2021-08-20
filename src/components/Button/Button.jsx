import buttonClass from "./Button.styles";


const Button = (props) => {

    return (
        <button class={buttonClass}>
        {props.children}
    </button>
    )
};

export default Button;