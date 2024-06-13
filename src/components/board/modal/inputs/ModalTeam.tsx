import euroTeam from '../../../../data/euroTeam';
import { ModalStyle } from '../../../../styles/main/modal';
import { useState, ChangeEvent } from 'react';
import useBoardStore from '../../../../store/BoardStore';

export default function ModalTeam() {
  const { group, team, setGroup, setTeam } = useBoardStore();

  // console.log(subject)
  // console.log(euroTeam.A조);
  // console.log(Object.keys(euroTeam)[0]);

  const [isGroup, setIsGroup] = useState('A조');
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setIsGroup(selected);
    setSelectedTeam('');

    // store
    setGroup(selected);
    setTeam('');
  };

  const handleTeamChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = e.target.value;
    setSelectedTeam(selectedTeam);
    setTeam(selectedTeam);
  };

  return (
    <ModalStyle.Teambox>
      <select
        value={isGroup}
        onChange={handleChange}
        className={group === '' ? 'default' : 'active'}
      >
        {Object.keys(euroTeam).map((groupKey, index) => (
          <option key={index} value={groupKey}>
            {groupKey}
          </option>
        ))}
      </select>
      <select
        value={selectedTeam}
        onChange={handleTeamChange}
        className={team === '' ? 'default' : 'active'}
      >
        {euroTeam[isGroup].map((team, index) => (
          <option key={index} value={Object.values(team)[0]}>
            {Object.values(team)[0]}
          </option>
        ))}
      </select>
    </ModalStyle.Teambox>
  );
}
