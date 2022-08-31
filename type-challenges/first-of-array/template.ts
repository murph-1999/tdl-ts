/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:07:52
 * @LastEditTime: 2022-08-31 18:29:25
 */

// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


// 1.T[0] extends类型条件判断
// 2.tuple的length长度属性
// 3.extends union
type ages = [1, 2, 3]
let x: number[] = [1, 2, 3]
type y = '1' | '2' | '3'

// 得到一个union类型
type t2 = ages[number]
// extends遍历union
type t3 = 1 extends t2 ? true : false
// 4.inter推断 结合 js 解构
// const first = (arr: []) => {
//   const [first, ...rest] = arr
//   return first ? first : 'never'
// }

