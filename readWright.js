// /**
//  * Read from an external file
//  */
const fs =require('fs')
// // console.log(typeof fs)
// /**
//  * read in the sync way
//  */
// console.log("Before starting to read")

// // const content=fs.readFileSync("index.txt")

// // reading in async
// fs.readFile("input.txt",(err,content)=>
// {
//     if(err)
//     {
//         return console.log(err)
//     }
//     console.log("content of the file is:",content)
// })
// // console.log(content)//byte content
// // console.log("output content :"+content)

// console.log("Last line")

/**
 * write the code to write to an external file
 */

console.log("Before")
// fs.writeFileSync('output1.txt','Hello Students!')

//async
fs.writeFile('output2.txt',"Hello students again",err=>{
    if(err){

        return console.log(err)
    }
    console.log("written successfully")
})
console.log('After')