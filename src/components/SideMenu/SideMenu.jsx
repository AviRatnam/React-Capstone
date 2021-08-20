import SideMenuclass from "./SideMenu.styles";

const SideMenu = (props) => {
    return(
        <a href={props.target}>
            <div class={SideMenuclass}>
                {props.children}
            </div>
        </a>
    )
}

export default SideMenu;