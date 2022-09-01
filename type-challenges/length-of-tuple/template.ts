/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-31 17:33:31
 * @LastEditTime: 2022-09-01 19:26:29
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