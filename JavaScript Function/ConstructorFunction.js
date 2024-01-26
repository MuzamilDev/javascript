function greeting(job,physco){
    this.job=job;
    this.physco=physco;
}
let variable = new greeting("Mobile App Development","Tech Skills");
console.log(`Mine Muzamil Job is ${variable.job} because it chooses ${variable.physco}`);
//Mine Muzamil Job is Mobile App Development because it chooses Tech Skills