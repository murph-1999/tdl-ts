/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-31 17:33:31
 * @LastEditTime: 2022-09-15 14:20:10
 */
type Length<T extends readonly any[]> = T["length"]

// 注意数组和tuple的区别
type x = [string, number]
const str: x = ['ss', 1]
type x1 = x['length']

type test = string[]
type y1 = test['length']

const galaxy = ['wuxing', 'pengpeng', 'sichao', 'xuyang', 'jiayuan'] as const
type music = typeof galaxy



// js实现 ❗️
// 在js中就是求数组的长度

// 实现步骤 ⬇️
// 1. T["length"]直接获取长度

// 知识点 📣
// 1. 回顾一下tuple和数组的区别，一句话总结