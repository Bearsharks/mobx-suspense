import {FallbackProps} from 'react-error-boundary'
import React, { useEffect } from 'react';
import { ErrorWithPromise } from '../store/testStore';

const promiseCheck = (data:unknown): data is ErrorWithPromise=>{
    return !!((data as ErrorWithPromise).loader?.then);
}
const ErrorFallback = ({error, resetErrorBoundary}:FallbackProps)=>{
    useEffect(()=>{
        if(!promiseCheck(error)) return;
        console.log("catch !");
        (error as any).loader.then(()=>{
            resetErrorBoundary();
        });
    },[error,resetErrorBoundary]);
    
    return <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
    </div>
}
export default ErrorFallback;

