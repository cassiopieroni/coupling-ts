import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { PropsWithChildren, useEffect, useState } from 'react';

type Props<TypeFilter> = {
  onSelect: (x: TypeFilter) => void;
  filtersGroup: TypeFilter[];
  currSelectedFilter: TypeFilter;
}

const Filters = <TypeStringFilter extends string>(
  props: PropsWithChildren<Props<TypeStringFilter>>) => {
  
  const { onSelect, filtersGroup, currSelectedFilter } = props;
  const [selectedValue, setSelectedValue] = useState<TypeStringFilter>(null!)

  useEffect(() => {
    if (currSelectedFilter && currSelectedFilter !== selectedValue) {
      setSelectedValue(currSelectedFilter);
    }
  }, [currSelectedFilter, selectedValue])

  const handleChange = (filterValue: TypeStringFilter | null) => {
    if (!filterValue || filterValue === currSelectedFilter) {
      return
    }
    setSelectedValue(filterValue);
    onSelect(filterValue)
  };

  return (
    <Box>
      <ToggleButtonGroup
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
      </ToggleButtonGroup>
    </Box>
  )
}

export default Filters;