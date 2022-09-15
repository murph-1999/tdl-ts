/*
 * @Description: 实际上就是求差集
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-01 19:40:32
 * @LastEditTime: 2022-09-15 14:25:12
 */
type MyExclude<T, K> = T extends K ? never : T


// js实现 ❗️
/* function MyExclude(T: any[], U: any[]) {
  const result = []
  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    if (!U.includes(t)) {
      result.push(t)
    }
  }
  return result
} */


/*
function MyExclude(T: any[], U: any[]){
  return T.filter(t=>!U.includes(t))
}
*/
// 实现步骤 ⬇️
// 1. 三元表达式  T extends K 如果匹配上则返回never，匹配不上直接返回T

// 知识点 📣
// 1. extends 三元表达式
// 2. 推迟解析条件类型，”差集“，”交集“