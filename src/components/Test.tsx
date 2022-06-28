import { observer } from "mobx-react";
import React from "react";
import useStore from "../hooks/useStore";
import { ErrorWithPromise } from "../store/testStore";

const Test = ()=>{
    const {testStore} = useStore();
    const test = testStore.mymy;
    return <div>
        {test}        
    </div>
}

export default Test;