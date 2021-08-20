import './App.css';
import Card from './components/Card/Card';
import SideMenu from './components/SideMenu/SideMenu';
import LoginCard from './components/LoginCard/LoginCard';
import Title from './components/Title/Title';


function App() {
  return (
    <div className="App" >
      <div class="grid md:grid-cols-5 ">
        <div class="md:col-span-2 md:py-20 bg-white align-left">
          <Title>Learning</Title>
          <Title>Begins</Title>
          <Title>Now</Title>
        </div>
        <div class="md:col-span-3 md:py-20 bg-gray-100">
          <div class="px-10 pt-20">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
