import "./App.css";
import { Calculator } from "./Calculator";

function App() {
  return (
    <div style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}>
      <main className="py-28 px-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
        <Calculator operation="1 + 1" result={2} />
      </main>
    </div>
  );
}

export default App;
