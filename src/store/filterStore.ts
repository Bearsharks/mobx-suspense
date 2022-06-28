import { action, makeObservable, observable} from "mobx";
import RootStore from "./RootStore";

export enum Filter{
    All = "All",
    Active = "Active",
    Completed = "Completed"
}
export default class FilterStore{
    filter = Filter.All;
    constructor(readonly rootStore:RootStore){
        makeObservable(this,{
            filter:observable,
            setFilter:action
        });
    }
    setFilter = (filter:Filter)=>{
        this.filter = filter;
    }
}