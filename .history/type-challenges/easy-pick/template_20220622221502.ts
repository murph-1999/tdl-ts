/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:07:52
 * @LastEditTime: 2022-06-22 22:15:02
 */

// |是联合类型，遍历它使用in
type MyPick<T, K> = {


  [P in K]:T[P]
}

// function myPick(todo,keys){
// const obj={}
// keys.forEach(key => {
//   if(key in todo){
//     obj[key]=todo[key]

//   }
// });
// return obj
// }