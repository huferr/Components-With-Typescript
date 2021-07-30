import { Button } from "./components/Button";
import Globalstyles from "./styles/globalstyles";

function App() {
  return (
    <>
      <div>
        <Button>BOTÃO</Button>
        <Button color="secondary">CLIQUE AQUI</Button>
        <Button disabled={true}>DESABILIDADO</Button>
      </div>
      <Globalstyles />
    </>
  );
}

export default App;
