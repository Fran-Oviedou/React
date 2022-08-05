import "./styles.css";
import data from "./data";

export default function App() {
  let index = Math.floor(Math.random() * data.length);
  console.log(data[index]);
  return (
    <div className="App">
      <div className="titulo">
        <h1 id="tt"> hola {data[index].name}</h1>
        <h2 id="tt"> {data[index].frase} </h2>
        <p id="tt"> {data[index].planeta}</p>
      </div>

      <div className="todo">
        <div className="d1">
          <img
            src="https://api.minimalavatars.com/avatar/random/svg"
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
}
