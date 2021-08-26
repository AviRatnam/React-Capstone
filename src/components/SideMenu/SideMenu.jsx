import SideMenuclass from "./SideMenu.styles";

const SideMenu = (props) => {
    return(
        <a href={props.target} onClick={`${props.path}`}>
            <div class={SideMenuclass}>
                {props.children}
            </div>
        </a>
    )
}

export default SideMenu;