import Header from "../Header/Header";
import Title from "../Title/Title";
import lessonstyles from "./Lesson.styles";

const Lesson = (props) => {

    fetch().then();

    return(
        <div class={lessonstyles} >
            <Title>{props.title}</Title>
            <Header>{props.header}</Header>
        </div>
    )
}

export default Lesson;