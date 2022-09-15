/*
 * @Description:将每个属性变成readonly
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-24 14:50:38
 * @LastEditTime: 2022-09-15 13:28:24
 */
type MyReadonly<T> = { readonly [K in keyof T]: T[K] }

// js实现 ❗️
/* function readonly(obj: any) {
  const result = {}
  for (const key in obj) {
    result["readonly" + key] = obj[key]
  }
  return result
} */

// 实现步骤 ⬇️
// 1. 遍历接口的key
// 2. 将每一个key变成readonly

// 知识点 📣
// 1. readonly