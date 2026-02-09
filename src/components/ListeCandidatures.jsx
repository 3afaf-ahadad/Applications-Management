import { useDispatch, useSelector } from "react-redux";
import {
  accepterCandidat,
  refuserCandidat,
  supprimerCandidat,
} from "../candidaturesSlice";

export default function ListeCandidatures() {
  const candidatures = useSelector((state) => state.candidatures);
  const dispatch = useDispatch();

  const handleSupp = (id) => {
    dispatch(supprimerCandidat(id));
  };

  return (
    <div className="container app-container">
      <h1 className="mb-3"> Applications Management</h1>
      {candidatures.length === 0 ? (
        <div className="alert alert-info">No applications available</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Candidate</th>
                <th>Job</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidatures.map((c) => (
                <tr key={c.id}>
                  <td>{c.candidat}</td>
                  <td>{c.poste}</td>
                  <td>{c.departement}</td>
                  <td>
                    <span className={`badge ${c.statut === 'accepté' ? 'bg-success' : c.statut === 'refusé' ? 'bg-danger' : 'bg-secondary'}`}>
                      {c.statut}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-2" onClick={() => dispatch(accepterCandidat(c.id))}>
                      Accepte
                    </button>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => dispatch(refuserCandidat(c.id))}>
                      Refuse
                    </button>
                    {c.statut === "on hold" && (
                      <button className="btn btn-danger btn-sm" onClick={() => handleSupp(c.id)}>Delete</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
