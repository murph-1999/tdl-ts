/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-15 16:02:55
 * @LastEditTime: 2022-09-15 16:04:14
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]