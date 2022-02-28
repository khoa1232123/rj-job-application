import { print } from "react-pdf-print";
import {
  Career,
  Education,
  Experience,
  Footer,
  Header,
  Project,
  Skill,
} from "./components";

function App() {
  const ids = [1, 2];
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
      <Experience />
      <Project />
      <Footer />
      {/* </div>
      </Printer> */}
    </div>
  );
}

export default App;
