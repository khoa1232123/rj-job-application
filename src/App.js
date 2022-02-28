import {
  Career,
  Education,
  Experience,
  Footer,
  Header,
  Project,
  Skill,
} from "./components";
import Printer, { print } from "react-pdf-print";

const ids = [1, 2];

function App() {
  document.title = "Nguyễn Đình Khôi";
  return (
    <div className="App">
      <input
        type="button"
        style={{ position: "relative", float: "right" }}
        onClick={() => print(ids)}
        value="Stampa"
      />
      {/* <Printer>
        <div id={ids[0]} style={{ width: "210mm", height: "297mm" }}> */}
      <Header />
      <Career />
      <Skill />
      <Education />
      {/* </div>
        <div id={ids[1]} style={{ width: "210mm", height: "297mm" }}> */}
      <Experience />
      <Project />
      <Footer />
      {/* </div>
      </Printer> */}
    </div>
  );
}

export default App;
