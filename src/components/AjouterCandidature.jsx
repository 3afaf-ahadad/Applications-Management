import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterCandidat } from "../candidaturesSlice";

export default function AjouterCandidature() {
  const [nom, setNom] = useState("");
  const [poste, setPoste] = useState("");
  const [dept, setDept] = useState("");

  const dispatch = useDispatch();

  const handleAjouter = (e) => {
    e.preventDefault();

    if (nom && poste && dept) {
      const newCand = {
        candidat: nom,
        poste: poste,
        departement: dept,

        statut: "en attente",
      };
      dispatch(ajouterCandidat(newCand));
      setNom("");
      setDept("");
      setPoste("");
    }
  };

  return (
    <div className="container app-container">
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title mb-3">Ajouter une Candidature</h3>
          <form onSubmit={handleAjouter}>
            <div className="mb-2">
              <label className="form-label">Candidat</label>
              <input
                className="form-control"
                type="text"
                placeholder="Candidat"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Poste</label>
              <input
                className="form-control"
                type="text"
                placeholder="Poste"
                value={poste}
                onChange={(e) => setPoste(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Département</label>
              <input
                className="form-control"
                type="text"
                placeholder="Département"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
