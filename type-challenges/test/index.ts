/*
 * @Description:测试类型
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-15 10:38:25
 * @LastEditTime: 2022-09-15 15:37:13
 */
// 当a、b为不同类型的时候，返回不同类型的联合类型
type Obj<T> = T extends { a: infer VType, b: infer VType } ? VType : number;

let obj1: Obj<string>; // => number
let obj2: Obj<true>; // => number
let obj3: Obj<{ a: string, b: string }>; // => string
let obj4: Obj<{ a: number, b: () => void }>; // => number | () => void


interface ISheep {
  name: string;
  eat: (food: string) => void;
  miemie: () => void;
}
function eatAndMiemie<T extends ISheep>(sheep: T): void {
  sheep.eat("青草蛋糕");
  sheep.miemie();
}
eatAndMiemie(
  {
    name: "懒羊羊",
    eat(food: string) {
      console.log(`${this.name}正在吃${food}`);
    },
    miemie() {
      console.log("别看我只是一只羊，羊儿的聪明难以想象～");
    },
    // run() {console.log(`${this.name}正在奔跑`)}
  }
)
// 懒羊羊正在吃青草蛋糕
//别看我只是一只羊，羊儿的聪明难以想象～

type Diff<T, U> = T extends U ? never : T
type Inter<T, U> = T extends U ? T : never
// 求差集
let d1: Diff<'a' | 'b' | 'c', 'a'>
// 求交集
let inter: Inter<'a' | 'b' | 'c', 'a'>


type Type1 = {
  name: string;
  age: number;
  gender: string;
}
type Type2 = {
  name: string;
  age: number;
}

let s: Type1 = {
  name: '123',
  age: 123,
  gender: '122',
}

let t: Type2 = {
  name: '123',
  age: 123,
}
// Type2 兼容 Type1
t = s
// t 不能赋值给我 s
// s = t