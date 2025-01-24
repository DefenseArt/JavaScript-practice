//반복문
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//배열 반복문
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//for...of 배열에 관한 반복문문
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}

//for...in 객체를 위한 반복문
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy)); //[[키, 값]] 형태의 배열로 변환
console.log(Object.keys(doggy)); //[키, 키, 키] 형태의 배열로 변환
console.log(Object.values(doggy)); //[값, 값, 값] 형태의 배열로 변환

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}


//break/continue
for (let i = 0; i < 10; i++) {
    if (i === 2) continue;
    console.log(i);
    if (i === 5) break;
}

//연습
function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

//연습
function biggerThanThree(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3)
            array.push(numbers2[i]);
    }
    return array;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2));