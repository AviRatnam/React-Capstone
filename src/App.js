import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title>Capstone</Title>
      <Header>2021</Header>
      <Button> Click </Button>
      <div class="lg:grid-cols-3 gap-10 py-10 ">
        <Card title="Mathematics" subtitle="Prof Avi" length="25 Minutes"></Card>
        <Card title="Mathematics" subtitle="Prof Avi" length="25 Minutes"></Card>
        <Card title="Mathematics" subtitle="Prof Avi" length="25 Minutes"></Card>
      </div>
      
    </div>
  );
}

export default App;
