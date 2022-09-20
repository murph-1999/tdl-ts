/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 09:46:14
 * @LastEditTime: 2022-09-20 10:14:42
 */
/* _____________ Your Code Here _____________ */

// 求差集
type _Exclude<T, U> = T extends U ? never : T
// 第一种:
// type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] }

// 第二种:
type MyOmit<T, K extends keyof T> = Pick<T, _Exclude<keyof T, K>>



// js实现 ❗️
// function myPick(todo,keys){
// const obj={}
// const todoKeys = Object.keys(todo)
// todoKeys.forEach(key => {
//   if(!keys.include(key)){
//     obj[key] = todo[key]
//   }
// });
// return obj
// }

// 实现步骤 ⬇️
// 1. 核心就是找到差集

// 知识点 📣
// 1. extends求差集
// 2. as P?