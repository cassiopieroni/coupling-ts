import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Filters from 'components/Filters';

type TypeAnimalFilter = 'bat' | 'spider' | 'panther';

const FILTERS: TypeAnimalFilter[] = ['bat', 'spider', 'panther'];

const App: React.FC = () => {

  const [selectedAnimal, setSelectedAnimal] = useState<TypeAnimalFilter>(null!)
  useEffect(() => {
    setSelectedAnimal('spider');
  }, [])

  const handleSelectedFilter = (filter: TypeAnimalFilter) => {
    setSelectedAnimal(filter)
  }

  return (
    <Box>
      <Filters<TypeAnimalFilter>
        currSelectedFilter={selectedAnimal}
        onSelect={handleSelectedFilter}
        filtersGroup={FILTERS}
      />
    </Box>
  )
}

export default App;
