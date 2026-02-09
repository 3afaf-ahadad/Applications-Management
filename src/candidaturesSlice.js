import { createSlice } from "@reduxjs/toolkit";

const candidatureSlice = createSlice({
  name: "candidatures",
  initialState: [
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
      poste: "HR Assistante",
      departement: "RH",
      statut: "on hold",
    },
  ],
  reducers: {
    ajouterCandidat: (state, action) => {
      const newCand = {
        id: state[state.length - 1].id + 1,
        candidat: action.payload.candidat,
        poste: action.payload.poste,
        departement: action.payload.departement,
        statut: action.payload.statut,
      };
      state.push(newCand);
    },
    accepterCandidat: (state, action) => {
      const cand = state.find((c) => c.id === action.payload);
      if (cand) cand.statut = "accepted";
    },
    refuserCandidat: (state, action) => {
      const cand = state.find((c) => c.id === action.payload);
      if (cand) cand.statut = "refused";
    },
    supprimerCandidat: (state, action) => {
      return state.filter(
        (c) => c.id !== action.payload || c.statut !== "on hold",
      );
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
