import titleclass from "./Title.styles";

const Title = (props) => {
    return(
        <div>
            <h2 class={titleclass}>{props.children}</h2>
        </div>
    )
}

export default Title;