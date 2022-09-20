/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-06 20:20:33
 * @LastEditTime: 2022-09-15 15:48:28
 */
type If<C extends boolean, T, F> = C extends true ? T : F



// js实现 ❗️
// 三元运算

// 实现步骤 ⬇️
// 1. 直接使用三元运算

// 知识点 📣
// 1. 三元运算符
// 2. 注意在非严格模式下 null extends true 是true
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
