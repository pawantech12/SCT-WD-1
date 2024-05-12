import NavBar from "./components/NavBar";

function App({ element }) {
  return (
    <>
      <NavBar />
      <div className="content">{element}</div>
    </>
  );
}

export default App;
