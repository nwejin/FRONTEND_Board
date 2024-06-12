import euroTeam from '../../../../data/euroTeam';
import { ModalStyle } from '../../../../styles/modal';
import { useState, ChangeEvent } from 'react';

export default function ModalTeam() {
  console.log(euroTeam.A조);
  console.log(Object.keys(euroTeam)[0]);

  const [port, setPort] = useState('A조');
  const [selectedTeam, setSelectedTeam] = useState('');

  const handlePortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPort = e.target.value;
    setPort(selectedPort);
    setSelectedTeam('');
  };

  const handleTeamChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = e.target.value;
    setSelectedTeam(selectedTeam);
  };

  return (
    <ModalStyle.Teambox>
      <select value={port} onChange={handlePortChange}>
        {Object.keys(euroTeam).map((groupKey, index) => (
          <option key={index} value={groupKey}>
            {groupKey}
          </option>
        ))}
      </select>
      <select value={selectedTeam} onChange={handleTeamChange}>
        {euroTeam[port].map((team, index) => (
          <option key={index} value={Object.values(team)[0]}>
            {Object.values(team)[0]}
          </option>
        ))}
      </select>
    </ModalStyle.Teambox>
  );
}
