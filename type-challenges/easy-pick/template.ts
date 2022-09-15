/*
 * @Description:返回一个新的包含可选属性的对象
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:07:52
 * @LastEditTime: 2022-09-15 14:00:30
 */

// |是联合类型，遍历它使用in
// K 是 T 的 键
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// js实现❗️
// function myPick(todo,keys){
// const obj={}
// keys.forEach(key => {
//   if(key in todo){
//     obj[key]=todo[key]

//   }
// });
// return obj
// }

// 实现步骤 ⬇️
// 1.返回一个对象
// 2.遍历
// 3.todo[key] indexed  -https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4.检查key 在不在 todo中


// 知识点 📣
// 1. look up 使用 keyof 来获取接口所有的key，得到的是一个联合类型
// 2. in 来遍历联合类型
// 2. extends 类型约束 实际上暗含着一种循环  【A,B】与【A,B,C】依次比较，在这表示 K 中的子集是否在 keyof T 中