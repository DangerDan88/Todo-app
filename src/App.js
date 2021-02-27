import GlobalStyle from "../src/styles/globalStyles";
import Form from "../src/components/Form";

function App() {
  return (
    <>
      <GlobalStyle />
      <header className="App-header">Todo app</header>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
