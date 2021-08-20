//import classnames from 'classnames';
import buttonClass from "./Button.styles";
function Button ({children}) {
    return (
        <button class={buttonClass}>
        {children}
    </button>
    )
};

export default Button;