
import React from 'react';
import SectionCard from './SectionCard';

const standingsData = [
    { pos: '1°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '2°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '3°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '4°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '5°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '6°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '7°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '8°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '9°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '10°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '11°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '12°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '13°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '14°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '15°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '16°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '17°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '18°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '19°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
    { pos: '20°', team: 'time', p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
];

const headers = ['#', 'Time', 'P', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG'];

const Standings: React.FC = () => {
  return (
    <SectionCard title="Classificação Geral" icon="fas fa-list-ol">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-yellow-400 uppercase bg-green-900/50">
            <tr>
              {headers.map((header) => (
                 <th key={header} scope="col" className={`px-4 py-3 ${header === 'Time' ? 'text-left' : 'text-center'}`}>
                   {header}
                 </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standingsData.map((row, index) => (
              <tr key={index} className="border-b border-green-800 hover:bg-green-900/70 transition-colors duration-200">
                <td className="px-4 py-3 text-center font-medium">{row.pos}</td>
                <td scope="row" className="px-4 py-3 font-semibold text-white whitespace-nowrap">{row.team}</td>
                <td className="px-4 py-3 text-center font-bold">{row.p}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.j}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.v}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.e}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.d}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.gp}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.gc}</td>
                <td className="px-4 py-3 text-center text-gray-300">{row.sg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
};

export default Standings;
