/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-26 17:45:12
 * @LastEditTime: 2022-09-15 14:00:34
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const
// 字面量类型
const str = '13'
let str1 = 122
//对比这两个typeof
type s = typeof str
type n = typeof str1

type r = TupleToObject<typeof tuple>


type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,

]
// @ts-expect-errors
type error = TupleToObject<[[1, 2], {}]>