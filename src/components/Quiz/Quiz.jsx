import Header from "../Header/Header";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
//import Button from "../Button/Button";
import quizClass from "./Quiz.styles";
//import Axios from "axios";
import React from "react";
//import { setState } from "react";
//import { map } from "async";

export default class Quiz extends React.Component {
  //const [data, setData] = useState("");

  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results[0], loading: false });
  }

  /*
  const getData = () => {
    Axios.get("https://randomuser.me/api/").then((response) => {
      setData(response.data);
      console.log(data);
      return data.map((data)=><span>{data}</span>)
    });
  };
  */

  //let outerStyle = "bg-gray-200 px-10 py-10";

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>Didn't get a person</div>;
    }

    return (
        <div class={quizClass}>
          <div class="text-left px-5">
            <Title>Addition</Title>
            <Header>Mathematics</Header>
          </div>
          <Timer initialMinute="5" initialSeconds="30" />
          <div>
            {this.state.people.map(person => (
              <div key={person.name.first + person.name.last}>
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large} alt="img" />
              </div>
            ))}
          </div>
        </div>
    );
  }
}
