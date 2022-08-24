/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-24 14:50:38
 * @LastEditTime: 2022-08-24 14:55:46
 */
type MyReadonly<T> = { readonly [K in keyof T]: T[K] }