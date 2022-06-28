import { makeAutoObservable, runInAction } from "mobx";
import testapi from "../api/testapi";
import RootStore from "./RootStore";
import { ErrorWithPromise } from "./testStore";

class UserStore{
    private _user:string = "";
    isInited:boolean = false;

    constructor(readonly rootStore:RootStore){
        makeAutoObservable(this);
    }

    updateUser = async ()=>{
        this.isInited = false;
        const res = await testapi.getmymy();
        runInAction(()=>{
            this._user = res;
            this.isInited = true;            
        })
    }
    get user(){
        console.log("user");
        if(this.isInited === false) {
            new ErrorWithPromise(this.updateUser());
        }
        return this._user;
    }
}


export default UserStore;