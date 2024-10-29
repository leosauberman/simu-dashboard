import { APIData } from '@/services/service';
import React, { useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export const Chart = ({ data }: {data: APIData[]}) => {

    const orderedData = useMemo(() => {
    if(data && data.length)
            return [...data].sort((a, b) => a.ano - b.ano);
    }, [data]);

  return (
    <ResponsiveContainer width={350} height={800}>
      <BarChart 
        layout="vertical"
        data={orderedData} 
        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis 
          type="category" 
          dataKey="ano" 
          width={80} 
        />
        <XAxis 
          type="number" 
          tickFormatter={(val) => 
            `${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)}`} 
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor_investimento" fill="#98D2EB" />
        <Bar dataKey="valor_desbloqueado" fill="#462255" />
        <Bar dataKey="valor_desembolsado" fill="#CC3363" />
        <Bar dataKey="valor_empenhado" fill="#50723C" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
