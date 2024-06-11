// // console.log("Rachel");


// function sumVariable(inputUser1, inputUser2) {
//     return inputUser1 + inputUser2
// }

// let cekValue = sumVariable(9, 10)
// console.log(cekValue);


// let resultOne = 9 + 10
// let resultTwo = 8 + 7

// console.log(sumVariable(8, 7));
// console.log(sumVariable(3, 7));


// function toFahrenheit(haha) {
//     return (5/9) * (haha-32)
// }


// function varibaleFunction(params) {
//     return params
// }


// // function fullName(inputUser1, inputUser2) {
// //     console.log(`${inputUser1} ${inputUser2}`);
// // }

// // const fullName = (inputUser1, inputUser2) => {
// //     console.log(`${inputUser1} ${inputUser2}`);
// // }

// const fullName = (firstName, lastName) => `${firstName} ${lastName}`


// // const sumTwo = inputUser1 => inputUser1 + inputUser1
// console.log(fullName("febrian", "aditya"), "==> INI YANG BARU");
// fullName("Febrian", "Aditya")

// console.log("Hari ini cuaca " + varibaleFunction(99));


// let cekValue = 5 !== "5"
// console.log(cekValue);

// let inputUser = "asdasd"

// if (inputUser === "1234") {
//     console.log("berhasil login");
// }else {
//     console.log("gagal login");
// }


// let personAge = 16

// if (personAge < 3) {
//     console.log("Balita");
// }else if (personAge < 8) {
//     console.log("Anak2");
// }else if (personAge < 15) {
//     console.log("Remaja");
// }else {
//     console.log("Dewasa");
// }

// personAge < 3 ? console.log("Balita") : personAge < 8 ? console.log("Anak") : personAge < 15 ? console.log("Dewasa") : console.log("Orang tua");

/**
 * OR = ||
 * AND = &&
 */
// let inputUser1 = "rachel"
// let inputUser2 = "hihi"

// if (8 < 9) {
//     console.log("iya");
// }else {
//     console.log("tidak");
// }



// inputUser1.length <= inputUser2.length ? console.log("iya") : console.log(tidak)


// const cekValue = () => {
//     let responseData = prompt("cek yaa")

//     console.log(responseData, "--> ini VAL");
// }

let counter = 0

// while (counter <= 2) {
//     console.log(counter);
//     counter++
// }

/**
 * Looping 1
 * counter = 0
 * 0 <= 2 ==> TRUTHY
 *      PRINT COUNTER / 0
 *      0 + 1 = 1
 * 
 * Looping 2
 * counter = 1
 * 1 <= 2 ==> TRUE
 *      PRINT COUNTER / 1
 *      1 + 1 = 2
 * 
 * Looping 3
 * counter = 2
 * 2 <= 2 ==> TRUE
 *      PRINT COUNTER / 2
 *      2 + 1 = 3
 *
 * Looping 4
 * counter = 3
 * 3 <= 2 ==> FALSE
 * 
 */


// do {
//     console.log(counter);
//     counter++
// } while (counter <= 2);


/**
 * Looping 1
 * PRINT Counter / 0
 * Counter++
 * 0 + 1 = 1
 * 
 *      1 <= 2 // => TRUE
 * 
 */

const students = ["febrian", "rachel"]

for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
}

/**
 * Looping 1
 * index = 0
 * 0 < students.length
 * 0 < 2 // => TRUE
 *      PRINT students[0] / => febrian
 * 0 + 1 = 1
 * 
 * Looping 2
 * index = 1
 * 1 < 2 // =>> TRUE
 *      PRINT students[1] / => rachel
 * 1 + 1 = 2
 * 
 * Looping 3
 * index = 2
 * 2 < 2 // => FALSE
 */

// students.forEach(el => {
//     console.log(el, "==> INI");
// })

// for (let index = 0; index < students.length; index++) {
//     // const element = array[index];
    
// }

for (let index = 0; index < 2; index++) {
    // console.log(index);
}

/**
 * Looping 1
 * index = 0
 * 0 < 2 // => TRUE
 *      PRINT / 0
 * 0 + 1 = 1
 * 
 * Looping 2
 * index = 1
 * 1 < 2 // => TRUE
 *      PRINT / 1
 * 1 + 1 = 2
 * 
 * Looping 3
 * index = 2
 * 2 < 2 // => False
 */
