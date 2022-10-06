import './App.scss';

import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div className="App">
      <h1 class="text-danger">Howdy</h1>
      <Badge bg="danger" as="Button">
      New
    </Badge>
    </div>
  );
}

export default App;
