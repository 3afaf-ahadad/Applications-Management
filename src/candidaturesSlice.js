import { createSlice } from "@reduxjs/toolkit";

const candidatureSlice = createSlice({
  name: "candidatures",
  initialState: [
    {
      id: 1,
      candidat: "Mohamed El Amrani",
      poste: "Développeur Web",
      departement: "IT",
      statut: "en attente",
    },
    {
      id: 2,
      candidat: "Fatima Zahra",
      poste: "Assistante RH",
      departement: "RH",
      statut: "en attente",
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
      if (cand) cand.statut = "acceptée";
    },
    refuserCandidat: (state, action) => {
      const cand = state.find((c) => c.id === action.payload);
      if (cand) cand.statut = "refusée";
    },
    supprimerCandidat: (state, action) => {
      return state.filter(
        (c) => c.id !== action.payload || c.statut !== "en attente",
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
