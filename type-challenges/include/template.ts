/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-13 20:20:30
 * @LastEditTime: 2022-09-15 16:14:38
 */
import type { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false

// 思考以下为什么有问题
// 下面的思路就是判断 U 是否兼容 T， 理解兼容的意思：使用 T 类型声明的变量可以赋值给 U 类型声明的变量
// 但是这里实际上返回的都是false，因为extends不支持判定数组包含逻辑
// type Includes<T extends readonly any[], U> = T extends U ? true : false

// 这样写的意思是循环T，将 U 与循环出来的每一个进行对比
// 对于联合类型来说，extends 的意思是用前者的每一个类型去试每一个后者的类型，返回所有结果的联合类型，所以你这样返回的就是一堆 true + 一堆 false 的联合类型，也就是 boolean
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// js实现 ❗️
// 实现方式1：
// includes方法
// 实现方式2：解构 + 递归
/* function Includes(arr: [], target) {
  function _(arr, target) {
    if (arr.length === 0) return false
    const [first, ...rest] = arr
    if (first === target) {
      return true
    } else {
      return _(rest, target)
    }
  }
  _(arr, target)
} */

// 实现步骤 ⬇️
// 1. 先解构
// 2. 再递归

// 知识点 📣
// 1. 参考https://juejin.cn/post/7119670034330288136#heading-2
// 2. 这道题需要熟知extends的用法