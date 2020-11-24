import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Filters from 'components/Filters';

type TypeAnimalFilter = 'dog' | 'cat' | 'rat';

const FILTERS: TypeAnimalFilter[] = ['dog', 'cat', 'rat'];

const App: React.FC = () => {

  const [selectedAnimal, setSelectedAnimal] = useState<TypeAnimalFilter>('' as TypeAnimalFilter)
  useEffect(() => {
    setSelectedAnimal('cat');
  }, [])

  const handleSelectedFilter = (filter: TypeAnimalFilter) => {
    setSelectedAnimal(filter)
  }

  return (
    <Box>
      <Filters<TypeAnimalFilter>
        currSelectedFilter={selectedAnimal}
        onSelect={handleSelectedFilter}
        filters={FILTERS}
      />
    </Box>
  )
}

export default App;
