/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 11:13:14
 * @LastEditTime: 2022-09-20 11:14:28
 */



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]