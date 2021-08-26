import headerclass from "./Header.styles";

const Header = (props) =>{
    return(
        <div>
            <h1 key={props.key} class={headerclass}>{props.children}</h1>
        </div>
    )
};

export default Header;