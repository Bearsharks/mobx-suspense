const delay = (obj:any) => {
    return new Promise<any>((resolve) =>
      setTimeout(() => {
        resolve(obj);
      }, 1000)
    );
  };

const testapi = {
    getmymy : async ():Promise<string>=>{
        return (await delay({test:Date.now().toString()})).test;
    }
}
export default testapi;