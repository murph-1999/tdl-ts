/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-15 15:53:12
 * @LastEditTime: 2022-09-15 16:10:58
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any ? X : never
