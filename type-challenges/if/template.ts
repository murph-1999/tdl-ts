/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-06 20:20:33
 * @LastEditTime: 2022-09-06 20:37:38
 */
type If<C extends boolean, T, F> = C extends true ? T : F


// 严格模式与非严格模式下的区别
// type t = null extends true ? "true " : "false"