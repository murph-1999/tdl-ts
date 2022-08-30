/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-26 17:45:05
 * @LastEditTime: 2022-08-30 12:29:59
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// 遍历数组
// T[number]

// js
// 需要注意键的类型
// function TupleToObject(arr) {
//   let obj = {}
//   arr.forEach(v => {
//     obj[v] = v
//   });
//   return obj
// }