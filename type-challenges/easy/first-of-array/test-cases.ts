/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:08:17
 * @LastEditTime: 2022-09-15 14:11:06
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]
// undefined
type t1 = First<[]>

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


const x = [1, 2, 3] as const
let len = x["length"]
