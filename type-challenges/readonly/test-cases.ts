/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-24 14:50:26
 * @LastEditTime: 2022-08-24 14:50:49
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}