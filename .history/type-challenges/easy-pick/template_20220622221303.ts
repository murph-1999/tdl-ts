/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-06-22 22:07:52
 * @LastEditTime: 2022-06-22 22:12:28
 */
type MyPick<T, K> = any

function myPick(todo:Object,keys){
const obj={}
keys.forEach(key => {
  if(key in todo){
    obj[key]=todo[key]

  }
});
return obj
}