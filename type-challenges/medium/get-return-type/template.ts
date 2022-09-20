/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 09:36:38
 * @LastEditTime: 2022-09-20 09:41:51
 */
type MyReturnType<T> = T extends (...v: any) => infer U ? U : never
