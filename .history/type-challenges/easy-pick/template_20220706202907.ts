/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:07:52
 * @LastEditTime: 2022-07-06 20:29:07
 */

// |是联合类型，遍历它使用in
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


// 先使用js的思想实现，其实就是返回一个新的包含可选属性的对象
// function myPick(todo,keys){
// const obj={}
// keys.forEach(key => {
//   if(key in todo){
//     obj[key]=todo[key]

//   }
// });
// return obj
// }

// 1.返回一个对象
// 2.遍历
// 3.todo[key] indexed
// -https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4.检查key在不在todo中
// - look up
// extends 类型约束 实际上暗含着一种循环  【A,B】与【A,B,C】依次比较