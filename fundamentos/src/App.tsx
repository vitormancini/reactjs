import "./App.css";
import { MeuComponente } from "./components/MeuComponente";

function App() {
  return (
    <div>
      <MeuComponente variant="blue">
        <p>Children do componente</p>
      </MeuComponente>
    </div>
  );
}

export default App;
