let x = [];
let mem = process.memoryUsage();

//let i = 0
/*for(let i = 0; i < 200000000; i++){
  mem = process.memoryUsage()
  console.log(mem)
  x.push(i)
}*/

let z = {key: 'some string'};

while ((mem.heapUsed + mem.external) / mem.heapTotal < 0.95) {
  x.push({...z});
  mem = process.memoryUsage();
}

console.log(mem);

setTimeout(() => {
  console.log('done');
  return;
}, 30000);
