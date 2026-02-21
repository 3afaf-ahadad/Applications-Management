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
    <div className="glass-card">
      <h3 className="mb-4">Add Application</h3>
      <form onSubmit={handleAjouter}>
        <div className="mb-3">
          <label className="form-label">Candidate Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="e.g. John Doe"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Position</label>
          <input
            className="form-control"
            type="text"
            placeholder="e.g. Frontend Engineer"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Department</label>
          <select
            className="form-control"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            required
          >
            <option value="" disabled>Select Department</option>
            <option value="IT">IT & Engineering</option>
            <option value="HR">Human Resources</option>
            <option value="Marketing">Marketing & Design</option>
            <option value="Finance">Finance & Accounting</option>
            <option value="Sales">Sales & Business Development</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Legal">Legal</option>
          </select>
        </div>


        <button type="submit" className="btn btn-primary w-100 py-2">
          Submit Application
        </button>
      </form>
    </div>

  );
}
