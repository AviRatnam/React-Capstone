import Card from "../components/Card/Card";
import SideMenu from "../components/SideMenu/SideMenu";
import Title from "../components/Title/Title";
import Header from "../components/Header/Header";
import Hamburger from "../Hamburger/Hamburger";

const Dashboard = () => {
  const subjects = [
    {
      title: "Addition",
      subtitle: "Mathematics",
      length: "25 minutes",
      target: "#",
    },
    {
      title: "Subtraction",
      subtitle: "Mathematics",
      length: "15 minutes",
      target: "#",
    },
    {
      title: "Metals",
      subtitle: "Science",
      length: "20 minutes",
      target: "#",
    },
    {
      title: "Grammar Basics",
      subtitle: "English",
      length: "15 minutes",
      target: "#",
    },
    {
      title: "Lifecycle",
      subtitle: "Science",
      length: "35 minutes",
      target: "#",
    },
    {
      title: "Literature",
      subtitle: "English",
      length: "15 minutes",
      target: "#",
    },
  ];

  return (
    <div class=" grid md:grid-cols-5 ">
      <div class="md:col-span-1 bg-gray-100 ">
        <div class="px-10 py-10 bg-gray-100 ">
          <Header> Capstone 2021</Header>
        </div>
        <div id="menu">
          <SideMenu>Profile</SideMenu>
          <SideMenu>Testing</SideMenu>
          <SideMenu>Learning</SideMenu>
          <SideMenu>Logout</SideMenu>
        </div>
        <div class="px-10 py-10 bg-gray-100"></div>
        <div class="px-10 py-12 bg-gray-100"></div>
      </div>
      <div class="col-span-4 px-5 py-5 gap-x-10 gap-y-10 ">
        <div class="text-left px-5 py-3">
          <Title>Begin Learning</Title>
          <Header>New Lessons</Header>
        </div>
        <div class="px-10 py-10 md:grid grid-cols-3 gap-10">
          <Card
            title={subjects[0].title}
            subtitle={subjects[0].subtitle}
            length={subjects[0].length}
            target={subjects[0].target}
          ></Card>
          <Card
            title={subjects[1].title}
            subtitle={subjects[1].subtitle}
            length={subjects[1].length}
            target={subjects[1].target}
          ></Card>
          <Card
            title={subjects[2].title}
            subtitle={subjects[2].subtitle}
            length={subjects[2].length}
            target={subjects[2].target}
          ></Card>
        </div>
        <div class="px-10 py-10 md:grid grid-cols-3 gap-10">
          <Card
            title={subjects[3].title}
            subtitle={subjects[3].subtitle}
            length={subjects[3].length}
            target={subjects[3].target}
          ></Card>
          <Card
            title={subjects[4].title}
            subtitle={subjects[4].subtitle}
            length={subjects[4].length}
            target={subjects[4].target}
          ></Card>
          <Card
            title={subjects[5].title}
            subtitle={subjects[5].subtitle}
            length={subjects[5].length}
            target={subjects[5].target}
          ></Card>
        </div>
        <div class="text-left px-5 py-3">
          <Header>Get Tested</Header>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
