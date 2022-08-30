/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-26 17:45:12
 * @LastEditTime: 2022-08-30 12:25:39
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const
// 字面量类型
const str = '13'
type s = typeof str
type r = typeof tuple
//  tuple[0] = 'jjfj'

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,

]
// @ts-expect-errors
type error = TupleToObject<[[1, 2], {}]>