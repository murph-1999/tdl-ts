type MyPick<T, K> = any

function myPick(todo,keys){
const obj={}
keys.forEach(key => {
  if(key in todo){
    obj[key]=todo[key]

  }
});
return obj
}