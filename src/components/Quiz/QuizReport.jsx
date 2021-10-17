const QuizReport = (props) => {

    return(
        <div>
            <h1>Marks Obtained: {props.score}</h1>
            <h2>Questions you got right: </h2>
            {props.correctquestions.map((data,i)=>(
                <div key={i}>{data}</div>
            ))}
            <h2>Questions you got wrong: </h2>
            {props.wrongquestions.map((data,i)=>(
                <div key={i}>{data}</div>
            ))}
        </div>
    )
}

export default QuizReport;