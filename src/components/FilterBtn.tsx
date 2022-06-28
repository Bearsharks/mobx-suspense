import React, { useContext } from 'react';
import { Filter } from '../store/filterStore';
import useStore from '../hooks/useStore';

const FilterBtn = ()=>{
    const context = useStore();
    const filters = Object.keys(Filter);
    return <div>
        {filters.map((filter)=>(
            <div key={filter} onClick={()=>context.setFilter(filter as Filter)}>{filter}</div>
        ))}
    </div>
};

export default FilterBtn;