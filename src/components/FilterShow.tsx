import React from 'react';
import { observer } from "mobx-react-lite";
import useStore from '../hooks/useStore';


const FilterShow = observer(()=>{
    const context = useStore();
    return <div>{context.filter}</div>
})

export default FilterShow;