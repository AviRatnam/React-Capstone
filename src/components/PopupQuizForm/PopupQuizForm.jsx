import Header from "../Header/Header";

const PopupQuizForm = () => {

    const quizformstyle = `rounded-lg shadow-lg text-gray-700 px-10 py-10 flex-initial flex items-center object-right-top transition `;
    const borderstyle = `border-2 border-gray-200 rounded-md`;

    return(
        <div class={quizformstyle}>
            <form>
                <Header>Quiz Details</Header>
                <h3>Quiz Name</h3>
                <input class={borderstyle} type="text" id="quizname" />
                <h3>Subject</h3>
                <input class={borderstyle} type="text" id="subject" />
                <h3>Number of Questions</h3>
                <input class={borderstyle} type="number" min="1" max="10" defaultValue="1" />
                <h3>Time Limit</h3>
                <input class={borderstyle} type="number" min="1" max="10" defaultValue="1" />
            </form>
        </div>
    )
}

export default PopupQuizForm