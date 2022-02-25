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
  return (
    <div className="App">
      <Header />
      <Career />
      <Skill />
      <Education />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
