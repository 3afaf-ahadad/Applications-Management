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
    <div className="glass-card">
      <h3 className="mb-4">Active Applications</h3>
      {candidatures.length === 0 ? (
        <div className="alert alert-info bg-transparent border-info text-info">No applications available</div>
      ) : (
        <div className="custom-table-container">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Job Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidatures.map((c) => (
                <tr key={c.id} className="candidature-row">
                  <td>
                    <div className="fw-bold">{c.candidat}</div>
                  </td>
                  <td>{c.poste}</td>
                  <td>{c.departement}</td>
                  <td>
                    <span className={`badge ${c.statut === 'accepted' ? 'bg-success' : c.statut === 'refused' ? 'bg-danger' : 'bg-secondary'}`}>
                      {c.statut}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex">
                      {c.statut === "on hold" && (
                        <>
                          <button className="btn btn-success btn-sm me-2 action-btn" onClick={() => dispatch(accepterCandidat(c.id))}>
                            Accepte
                          </button>
                          <button className="btn btn-warning btn-sm me-2 action-btn" onClick={() => dispatch(refuserCandidat(c.id))}>
                            Refuse
                          </button>
                        </>
                      )}
                      <button className="btn btn-danger btn-sm action-btn" onClick={() => handleSupp(c.id)}>Delete</button>
                    </div>
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
