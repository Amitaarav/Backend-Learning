//These are the function
let add=(a,b)=>{
    return a+b
}
let prod=(a,b)=>{
    return a*b
}

/**
 * 
...individual export--o/p is product only we are getting
module.exports=add

module.exports=prod
 */  // override
//instead of exporting individual function export in object

//method 1
module.exports={
    add: add,
    prod:prod
}

//method 2
exports.sub=(a,b)=>{
    return a+b
}
exports.div=(a,b)=>{
    return a*b
}