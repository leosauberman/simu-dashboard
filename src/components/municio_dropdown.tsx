
import React, { useCallback } from 'react';
import { setSelectedMunicipio } from '../store/slices/dataSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const MunicipioDropdown = () => {
  const dispatch = useAppDispatch();
  const municipios = useAppSelector((state) => state.data.municipios);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMunicipio = event.target.value;
    dispatch(setSelectedMunicipio(selectedMunicipio || null));
  }, [dispatch]);

  return (
    <select onChange={handleChange}>
      <option key="00" value="">Selecione um município</option>
      {municipios.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  );
};

export default MunicipioDropdown;
