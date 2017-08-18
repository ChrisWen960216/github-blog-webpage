/* Provide some Test.
 * Created By ChrisWen
 */

//Promise
//prototype => then/catch
//静态方法 => all/resolve/reject/race

let p = new Promise((resolve, reject) => {
    reject(1);
})
console.log(p);

//then 接受2个参数 (handleResolve,handleReject)
p.then(val => {
    //logical 处理resolve的结果
    console.log(`The value is ${val}`);
}, val => {
    console.log(`The reject val is ${val}`)
})

//再次调用,catch处理reject
//then 则必须指定2个参数
p.catch(val => console.log(`catch val is ${val}`));