import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("candidatures");
    if (serializedState === null) {
      return [
        {
          id: 1,
          candidat: "Mohamed El Amrani",
          poste: "Web developer",
          departement: "IT",
          statut: "on hold",
        },
        {
          id: 2,
          candidat: "Fatima Zahra",
          poste: "HR Assistant",
          departement: "HR",
          statut: "accepted",
        },
        {
          id: 3,
          candidat: "John Smith",
          poste: "Marketing Manager",
          departement: "Marketing",
          statut: "on hold",
        },
        {
          id: 4,
          candidat: "Sarah Connor",
          poste: "Security Engineer",
          departement: "IT",
          statut: "refused",
        }
      ];

    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("candidatures", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const candidatureSlice = createSlice({
  name: "candidatures",
  initialState: loadState(),
  reducers: {
    ajouterCandidat: (state, action) => {
      const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
      const newCand = {
        id: id,
        candidat: action.payload.candidat,
        poste: action.payload.poste,
        departement: action.payload.departement,
        statut: "on hold",
      };
      state.push(newCand);
      saveState(state);
    },
    accepterCandidat: (state, action) => {
      const cand = state.find((c) => c.id === action.payload);
      if (cand) cand.statut = "accepted";
      saveState(state);
    },
    refuserCandidat: (state, action) => {
      const cand = state.find((c) => c.id === action.payload);
      if (cand) cand.statut = "refused";
      saveState(state);
    },
    supprimerCandidat: (state, action) => {
      const newState = state.filter((c) => c.id !== action.payload);
      saveState(newState);
      return newState;
    },
  },
});
export const {
  ajouterCandidat,
  supprimerCandidat,
  accepterCandidat,
  refuserCandidat,
} = candidatureSlice.actions;
export default candidatureSlice.reducer;

