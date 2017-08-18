/* Provide some Test.
 * Created By ChrisWen
 */

//Promise
//prototype => then/catch
//静态方法 => all/resolve/reject/race

let p = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'HelloWorld')
})
console.log(p);


//then 接受2个参数 (handleResolve,handleReject)
//1. 将回调函数 存入 handleQueue
//2. 如果 promise 已经是 fulfilled 或者 rejected 状态，autoRun
//数据结构的角度来讲 => 链表. p->another(指针)
let another = p.then(val => {
    //logical 处理resolve的结果
    console.log(`The value is ${val}`);
}, val => {
    //处理 reject 结果
    console.log(`The reject val is ${val}`);
})
console.log(`Type of another：`, another instanceof Promise);

//再次调用,catch只处理reject
//then 则必须指定2个参数
p.catch(val => console.log(`catch val is ${val}`));

//静态方法的返回值都是 Promise
let t = Promise.resolve(1);
console.log(t);
let anoTher = Promise.resolve({
    then: function(resolve, reject) {
        resolve(2)
    }
})
anoTher.then(val => console.log(val));
console.log(anoTher);