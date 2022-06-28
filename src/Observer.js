class Observer{
    constructor(){

    }
    onNotify = (entity, event)=>{

    }
}
const TEST = "TEST";
class Achievements extends Observer{
    constructor(){
        super();
    }
    onNotify = (entity, event)=>{
        switch(event){
            case TEST:
                if(entity.isHero()){
                    console.log("entity is hero");
                }
            default:
                return;
        }
    }
}

class subject{
    observers = []
    constructor(){

    }
    addObserver = (observer)=>{
        this.observers.push(observer);
    }
    removeObserver = (observer)=>{
        const idx = this.observers.findIndex((ob)=>ob === observer);
        this.observers.splice(idx);
    }
    notify = (entity, event)=>{
        this.observers.forEach(ob=>ob.onNotify(entity,event));
    }
}

class Physics extends subject{
    constructor(){
        super();
    }
}

const achive = new Achievements();
const physics = new Physics();

physics.addObserver(achive);
export default physics;