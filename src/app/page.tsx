"use client"

import Chart from "@/components/chart";
import MunicipioDropdown from "@/components/municio_dropdown";
import { DataService } from "@/services/service";
import { selectFilteredDataByMunicipio, setData, setMunicipios } from "@/store/slices/dataSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export default function Home() {

  const data = useAppSelector(selectFilteredDataByMunicipio);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadData = async () => {
      const dataService = new DataService();

      const res = await dataService.getMockedDataFromAPI();
      dispatch(setData(res.data));
      dispatch(setMunicipios(res.data.map((data) => data.municipio)));
    };

    loadData();
  }, [dispatch]);

  return (
    <div className="m-8">
      <MunicipioDropdown />
      <Chart data={data}/>
    </div>
  );
}

