
// count sequences, three numbers, first equals to third
// and middle one different, all three numbers equal does not count [4,4,4]

// const first = [8, 6, 8, 6, 7, 4, 7]
// // [8,6,8], [6,8,6], [7,4,7];
// const second = [4, 5, 5, 7, 5, 5, 9]
// // [5,7,6]
// const third = [3, 3, 2, 8, 7, 6, 5]
// //

// //reduce this code to 2 lines of code
// const count = (data) => {
//   return data.reduce((total, item, index) => {
//     console.log(item)
//     // var a=[];
//     // console.log(item === data[index + 2])
//     // console.log(item !== data[index + 1])
//     const match = item === data[index + 2] && item !== data[index + 1]
//     // a.push(match)
//     // console.log(a)
//     if (match) {
//       return total + 1
//     }
//     return total
//   }, 0)
// }

// count(first)
// console.log(count(second))





const first = [8, 6, 8, 6, 7, 4, 7]
// [8,6,8], [6,8,6], [7,4,7];
const second = [4, 5, 5, 7, 5, 5, 9]
// [5,7,6]
const third = [3, 3, 2, 8, 7, 6, 5]
//

const count=(first)=>{
    for (i=0; i<first.length; i++){
        if (first[i] === first[i + 2]){
            if (first[i] !== first[i + 1]){
                // console.log(first[i] === first[i + 2] && first[i] !== first[i + 1])
                console.log(first[i],first[i+1],first[i+2])
            }
        }
    }
}
count(first)
count(second)
count(third)