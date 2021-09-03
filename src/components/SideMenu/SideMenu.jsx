import SideMenuclass from "./SideMenu.styles";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
    return(
        <Link to={props.target}>
            <div class={SideMenuclass}>
                {props.children}
            </div>
        </Link>
    )
}

export default SideMenu;