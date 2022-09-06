/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-06 20:20:40
 * @LastEditTime: 2022-09-06 20:33:54
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>