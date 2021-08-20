import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Button> Click </Button>
      <Card title="Mathematics" subtitle="Prof Avi" length="25 Minutes"></Card>
    </div>
  );
}

export default App;
