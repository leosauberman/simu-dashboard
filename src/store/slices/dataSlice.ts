import { APIData } from '@/services/service';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../store';

type DataType = APIData;

interface DataState {
  data: DataType[];
  municipios: string[];
  selectedMunicipio: string | null;
}

const initialState: DataState = {
  data: [],
  municipios: [],
  selectedMunicipio: null
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataType[]>) => {
      state.data = action.payload.filter((v) => !!v.ano);
    },
    setMunicipios: (state, {payload}: PayloadAction<string[]>) => {
      state.municipios = Array.from(new Set(payload)).sort();
    },
    setSelectedMunicipio(state, action: PayloadAction<string | null>) {
      state.selectedMunicipio = action.payload;
    },
  },
});

const selectData = (state: RootState) => state.data.data;
const selectSelectedMunicipio = (state: RootState) => state.data.selectedMunicipio;

export const selectFilteredDataByMunicipio = createSelector(
  [selectData, selectSelectedMunicipio],
  (data, selectedMunicipio) => {
    if (!selectedMunicipio) return data;
    return data.filter(item => item.municipio === selectedMunicipio);
  }
);


export const { setData, setMunicipios, setSelectedMunicipio } = dataSlice.actions;
export default dataSlice.reducer;
