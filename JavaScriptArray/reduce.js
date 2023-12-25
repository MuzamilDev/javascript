let symbols = ["Circle","Square","Rectangle"];
let arry = symbols.reduce((pre, curr)=>{
    return "" + pre + " Will Take Place of " + curr;
})
console.log(arry);