let max = Math.max(1, 5, 10, -2);

console.log("max : " + max);

let min = Math.min(1, 5, 10, -2);
console.log("min : " + min);

console.log("random : " + Math.random());

console.log("sqrt : " + Math.sqrt(16));

let greenArr = ["교대", "방배", "수서"];
let yelloArr = ["미금", "정자", "수서"];

["교대", "방배", "서초", "역삼"];
greenArr.splice(2, 1, "서초", "역삼"); //인덱스 2부터 1개를 제거하고 서초, 역삼을 추가
console.log(greenArr);

let data1 = yelloArr.pop(); //배열의 마지막 요소를 제거하고 반환
console.log(data1); //수서
console.log(yelloArr); //[미금,정자]

let data2 = yelloArr.shift(); //배열의 첫 번쨰 요소를 제거하고 반환
console.log(data2); //미금
console.log(yelloArr); //정자

yelloArr.push(data2); //배열의 마지막 요소 추가
console.log(yelloArr); //[정자,미금]

yelloArr.unshift(data1);//배열의 처음에 요소 추가
console.log(yelloArr); // [수서, 정자, 미금]


let str = "hello javascript";

let str2 = str.substring(3,7);
console.log(str2)

let str3 = str.substring(3,-1);
console.log(str3)