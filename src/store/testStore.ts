import { makeAutoObservable, runInAction } from "mobx";
import testapi from "../api/testapi";
import RootStore from "./RootStore";


export class ErrorWithPromise extends Error{
    constructor(readonly loader: Promise<any>){
        super("pending");
    }
}


class TestStore{
    private _mymy:string = "";
    isInited:boolean = false;
    constructor(readonly rootStore:RootStore){
        makeAutoObservable(this);
    }
    updateMymy = async (user:string)=>{
        this.isInited = false;
        const res = await testapi.getmymy() + user + "// add user";
        runInAction(()=>{
            this._mymy = res;
            this.isInited = true;
            
        })
    }
    get mymy(){
        console.log("mymy");
        if(this.isInited === false) {
            
            throw new ErrorWithPromise(this.updateMymy(this.rootStore.userStore.user));
        }
        return this._mymy;
    }
}


export default TestStore;