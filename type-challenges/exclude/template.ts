/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-01 19:40:32
 * @LastEditTime: 2022-09-01 20:03:09
 */
// T extends K 如果匹配上则返回never，匹配不上直接返回T
type MyExclude<T, K> = T extends K ? never : T

// js实现外层遍历T
function MyExclude(T: any[], U: any[]) {
  const result = []
  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    if (!U.includes(t)) {
      result.push(t)
    }
  }
  return result
}

// function MyExclude(T: any[], U: any[]){
//   return T.filter(t=>!U.includes(t))
// }