import React from 'react';
import { fetchPointInfo } from '@/app/lib/data';

// Sample data
// const data:Member[] = [
//   { id: 1, name: 'Alice', points: 50 },
//   { id: 2, name: 'Bob', points: 70 },
//   { id: 3, name: 'Charlie', points: 60 },
  
// ];

const data = await fetchPointInfo();

// Main component
const RankTable = () => {
  
  return (
    // <table className="p-20 text-3xl w-full h-36 text-center border-collapse border-2">
    <table className="rounded-3xl text-left border border-separate border-tools-table-outline border-transparent border-5 w-full">
      <thead className="h-20">
        <tr className="h-20 bg-green-200 rounded-3xl">
          <th className="pl-20 pr-20 text-3xl w-1/4 h-24 rounded-l-3xl">Rank</th>
          <th className="pl-20 pr-20 text-3xl w-1/2 h-24" >Name</th>
          <th className="pl-20 pr-20 text-3xl w-3/12 h-24 rounded-r-3xl">Points</th>
        </tr>
      </thead>
      <tbody>
          <tr className="pl-20 pr-10 text-2xl w-1/4 h-3 rounded-l-3xl"></tr>
        {data.map((member) => ( 
          <tr key={member.id} className="bg-gray-200 rounded-3xl  "> 
            <td className="pl-20 pr-10 text-2xl w-1/4 h-20 rounded-l-3xl">{member.id}</td> 
            <td className="pl-20 pr-10 text-2xl w-1/4 h-20">{member.name}</td> 
            <td className="pl-20 pr-10 text-2xl w-1/4 h-20 rounded-r-3xl">{member.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankTable;
