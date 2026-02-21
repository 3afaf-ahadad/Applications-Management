import ListeCandidatures from "./components/ListeCandidatures";
import AjouterCandidature from "./components/AjouterCandidature";

function App() {
  return (
    <div className="app-wrapper">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">TalentStream</h1>
        <p className="text-muted">Streamline your hiring process with ease.</p>
      </header>

      <div className="row">
        <div className="col-lg-4">
          <AjouterCandidature />
        </div>
        <div className="col-lg-8">
          <ListeCandidatures />
        </div>
      </div>
    </div>
  );
}

export default App;

