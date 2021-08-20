import headerclass from "./Header.styles";

const Header = (props) =>{
    return(
        <div>
            <h1 class={headerclass}>{props.children}</h1>
        </div>
    )
};

export default Header;