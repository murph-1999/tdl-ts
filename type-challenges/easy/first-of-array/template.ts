/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:07:52
 * @LastEditTime: 2022-09-20 14:17:23
 */

// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


type ages = [1, 2, 3]
let x: number[] = [1, 2, 3]
type y = '1' | '2' | '3'

// 得到一个union类型
type t2 = ages[number]
// extends遍历union
type t3 = 1 extends t2 ? true : false


// js实现 ❗️
// 1 .不改变原数组
// 索引，扩展运算符
/* const first = (arr: []) => {
  const [first, ...rest] = arr
  return first ? first : 'never'
} */

// 2. 改变原数组

// 实现步骤 ⬇️
// 实现方式①：T[0]
// 实现方式②：tuple 的 length 长度属性T["length"]
// 实现方式③：类型约束为一个 T[number]，union 的类型
// 实现方式④：infer 推断

// 知识点 📣
// 1. 三元表达式条件判断，推荐阅读
// https://juejin.cn/post/ 7133893150837309476
// https://juejin.cn/post/6844904066485583885
// 2. tuple 的 length 长度属性T["length"]
// 3. 运用extends "求交集"
// 4. infer 推断，可以理解为infer就是声明一个变量，类似于for循环中的i，这个变量随后可以使用，但是这个变量只能在true的分支中使用
// 推荐阅读 https://juejin.cn/post/6844904146877808653
