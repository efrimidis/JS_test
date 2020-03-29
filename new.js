// let options = {
//     width: 1024,
//     height: 1024,
//     name: "zalupa" 
// };

// console.log(options.name);
// options.bool = false;

// options.colors = {
//     border: "black",
//     bg: "tomato"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ["nasvay", 2, "pedik", 4, 5];

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // arr.forEach(function(item, i, vsyaEbala) {
// //     console.log(i + ': ' + item + " (массив: " + vsyaEbala + ')');
// // });

// // console.log(arr);


// // let ans = prompt("", ""),
// //     arr = [];

// // arr = ans.split(',');
// // console.log(arr);     



const becomeJavaScriptMaster = (name = "Igor") => {
    if (name === "Igor" )
    return "Приветствую, мастер!";
}

console.log(becomeJavaScriptMaster("Igor"));
