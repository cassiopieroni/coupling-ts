import { Paper, makeStyles, withStyles, Theme } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React, { PropsWithChildren, useEffect, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
  },
  buttonGroup: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

type Props<T> = {
  onSelect: (x: T) => void;
  filtersGroup: T[];
  currSelectedFilter: T;
}

const Filters = <TypeFilters extends string>(props: PropsWithChildren<Props<TypeFilters>>) => {
  
  const classes = useStyles();
  const { onSelect, filtersGroup, currSelectedFilter } = props;
  const [selectedValue, setSelectedValue] = useState<TypeFilters>(null!)

  useEffect(() => {
    if (currSelectedFilter && currSelectedFilter !== selectedValue) {
      setSelectedValue(currSelectedFilter);
    }
  }, [currSelectedFilter, selectedValue])

  const handleChange = (filterValue: TypeFilters | null) => {
    if (!filterValue || filterValue === currSelectedFilter) {
      return
    }
    setSelectedValue(filterValue);
    onSelect(filterValue)
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <StyledToggleButtonGroup
        className={classes.buttonGroup}
        value={selectedValue}
        exclusive
        onChange={(_, filter) => handleChange(filter)}
      >
        {filtersGroup.map(filter => (
          <ToggleButton 
            key={filter}  
            value={filter}
          >
            {filter}
          </ToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </Paper>
  )
}

function assertFC<P>(component: React.FC<P>): asserts component is React.FC<P> {}

assertFC(Filters)

export default Filters;