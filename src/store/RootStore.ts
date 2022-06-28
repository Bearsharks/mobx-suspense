import AfterTestStore from "./afterTestStore"
import FilterStore from "./filterStore"
import TestStore from './testStore'
import UserStore from "./UserStore"
class RootStore{
    testStore
    filterStore
    afterTestStore
    userStore
    constructor(){
        this.userStore = new UserStore(this);
        this.filterStore = new FilterStore(this);
        this.testStore = new TestStore(this);
        this.afterTestStore = new AfterTestStore(this);       
    }
}

export default RootStore;