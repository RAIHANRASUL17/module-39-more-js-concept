// /*_________________ step-1 ________________*/ 
// const getData = new Promise((resolve, reject) => {
//     resolve(99)
// })

// // call function
// console.log(getData)


// /*_________________ step-2 ________________*/ 
// const getData = new Promise((resolve, reject) => {
//     resolve(99)
// })

// // call function
// console.log(getData + 5)


// /*_________________ step-3 ________________*/ 
// const getData = new Promise((resolve, reject) => {
//     resolve(99)
// })

// // call function
// // console.log(getData + 5)
// getData.then(newData =>{console.log(newData)})



// /*_________________ step-3 ________________*/ 
// const getData = new Promise((resolve, reject) => {
//     resolve(99)
// })

// // call function
// // console.log(getData + 5)
// getData.then(newData =>{console.log(newData + 5)})


// /*_________________ step-3 ________________*/ 
// const getData = new Promise((resolve, reject) => {
//     // resolve(99)
//     reject('No data Found')
// })

// // call function
// // console.log(getData + 5)
// getData.then(newData =>{console.log(newData + 5)})


// /*_________________ step-4 ________________*/ 
// const getData = new Promise((resolve, reject) => {
//     // resolve(99)
//     reject('No data Found')
// })

// // call function

// getData
// .then(newData =>{console.log(newData + 5)})
// .catch(err => console.log('ERR is: ', err))


/*_________________ step-4 ________________*/ 
const getData = new Promise((resolve, reject) => {
    const randomNum = (Math.random()*10)
    console.log(randomNum)
    if(randomNum < 5){
        resolve(99)
    }
    else{
        reject('No data Found') 
    }
    // resolve(99)
    // reject('No data Found')
})

// call function

getData
.then(newData =>{console.log(newData + 5)})
.catch(err => console.log('ERR is: ', err))