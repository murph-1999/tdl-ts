/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 10:28:46
 * @LastEditTime: 2022-09-20 10:45:58
 */
/* _____________ Your Code Here _____________ */

type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [P in K]: T[P] } & MyOmit<T, K>

// js实现 ❗️

// 实现步骤 ⬇️
// 1. 将交集设置为readonly
// 2. 合并差集

// 知识点 📣
// 1. & 符号 用来合并{}
// 2. 这样写有什么问题？

// type MyReadonly2<T, K extends keyof T> = { readonly [P in K]: T[P] } & MyOmit<T, K>
// 为什么要加上 = keyof T
