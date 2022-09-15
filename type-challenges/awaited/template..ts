/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-04 22:56:42
 * @LastEditTime: 2022-09-15 15:58:03
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : never


// js实现 ❗️

// 实现步骤 ⬇️

// 知识点 📣
// 1. infer 只能在条件类型为true中使用
// 2. unknown与any的区别。
// 你可以把任何值赋给 any 类型的变量，并对该变量执行任何操作；
// 你可以把任何值赋给 unknown 类型的变量，但你必须进行类型检查或类型断言才能对变量进行操作。
// 推荐阅读
// https://juejin.cn/post/7108496183298883597
// 3. 使用递归