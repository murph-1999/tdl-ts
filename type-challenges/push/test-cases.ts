/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-15 15:53:05
 * @LastEditTime: 2022-09-15 16:02:08
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
