/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 10:50:23
 * @LastEditTime: 2022-09-20 11:10:25
 */
/* _____________ Your Code Here _____________ */

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? T[P] extends Function ? T[P] : DeepReadonly<T[P]> : T[P]
}

// js实现 ❗️

// 实现步骤 ⬇️
// 1. 递归遍历对象
// 2. 递归的过程中赋予readonly

// 知识点 📣
// 1. T[P] extends object 类型约束