/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-01 19:40:43
 * @LastEditTime: 2022-09-01 19:41:12
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]