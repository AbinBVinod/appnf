import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          <hr />
          <Setup />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
