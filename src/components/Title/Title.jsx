import titleclass from "./Title.styles";

const Title = (props) => {
    return(
        <div>
            <h2 key={props.key} class={titleclass}>{props.children}</h2>
        </div>
    )
}

export default Title;