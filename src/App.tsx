import { useEffect, useState } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import Filters from 'components/Filters';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

type TAnimals = 'bat' | 'spider' | 'panther';

const FILTERS: TAnimals[] = ['bat', 'spider', 'panther'];

const App: React.FC = () => {
  const classes = useStyles();
  const [selectedAnimal, setSelectedAnimal] = useState<TAnimals>(null!)
  useEffect(() => {
    setSelectedAnimal('spider');
  }, [])

  const handleSelectedFilter = (filter: TAnimals) => {
    setSelectedAnimal(filter)
  }

  return (
    <Grid container className={classes.root}>
      <Filters<TAnimals>
        currSelectedFilter={selectedAnimal}
        onSelect={handleSelectedFilter}
        filtersGroup={FILTERS}
      />
    </Grid>
  )
}

export default App;
