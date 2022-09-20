/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 11:13:06
 * @LastEditTime: 2022-09-20 11:18:13
 */
/* _____________ Your Code Here _____________ */

// type TupleToUnion<T extends unknown[]> = T[number]

// 实现2

type TupleToUnion<T extends unknown[]> = T extends [infer F, ...infer Rest] ? F | TupleToUnion<Rest> : never;

// js实现 ❗️

// 实现步骤 ⬇️
// 实现方式1：
// 实现方式2：递归，infer，合并为联合


// 知识点 📣
// 1. 遍历元祖 in T[number]， T[number]是固定用法