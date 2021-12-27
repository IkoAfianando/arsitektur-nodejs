// const getUserSync = (id) => {
//     // let  nama = '';
//     // if(id === 1) {
//     //     nama = "Iko";
//     // }else {
//     //     nama = "Afianando";
//     // }
//     const nama = id === 1 ? "Iko" : "Afianando";
//     return {id, nama};
// }
//
// const userSatu = getUserSync(1);
// console.info(userSatu);
//
// const userDua = getUserSync(2);
// console.info(userDua);
//
// const hello = "Hello World!";
// console.info(hello);


import {user} from "./getUserSync.mjs";

const userSatu = user(1, (hasil) => {
    console.log(hasil);
});

const userDua = user(2, (hasil) => {
    console.log(hasil);
});

const hello = "Hello World!";
console.log(hello);