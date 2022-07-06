/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-21 22:48:46
 * @LastEditTime: 2022-06-21 22:56:03
 */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]