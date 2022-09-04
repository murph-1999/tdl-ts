/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-04 22:56:42
 * @LastEditTime: 2022-09-04 23:12:36
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : never

// infer 只能在条件类型中使用
// 设置未知数