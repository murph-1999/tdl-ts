/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-26 17:45:05
 * @LastEditTime: 2022-09-15 13:52:29
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// 遍历数组
// T[number]

// js实现 ❗️
/* function TupleToObject(arr) {
  let obj = {}
  arr.forEach(v => {
    obj[v] = v
  });
  return obj
} */

// 实现步骤 ⬇️
// 1. 遍历元祖 in T[number]， T[number]是固定用法
// 2. 赋值

// 知识点 📣
// 1. tuple元祖是什么----A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// 2. as const 是一种断言，允许TypeScript采用最具体的表达式类型，并创建一个完全只读的对象
// 3. typeof使用
// 4. extends 类型约束