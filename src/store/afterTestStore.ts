import { autorun, makeAutoObservable, runInAction } from "mobx";
import testapi from "../api/testapi";
import FilterShow from "../components/FilterShow";
import RootStore from "./RootStore";
class AfterTestStore{
    private _at:string|undefined;
    constructor(readonly rootStore:RootStore){
        makeAutoObservable(this);
        autorun(()=>{            
            if(!rootStore.testStore.mymy) return;
            runInAction(()=>{
                this._at = "after" + rootStore.testStore.mymy;
            })            
        })        
    }
    get at(){
        return this._at;
    }
}
export default AfterTestStore;