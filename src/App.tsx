import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import "./common.scss"
import ErrorFallback from './components/ErrorBoundary';
import FilterBtn from './components/FilterBtn';
import FilterShow from './components/FilterShow';
import Test from './components/Test';

function App() {    
    return (
        <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Test></Test>         
            </ErrorBoundary>
               
            <br></br><br></br><br></br>
            Hello worltestd 
            <FilterBtn></FilterBtn>
            <FilterShow></FilterShow>
        </div>    
    )

}

export default App;