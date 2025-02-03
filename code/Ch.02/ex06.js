//기본값 설정
const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// 2

//비구조화 할당시 이름 바꿈
const animal = {
    name: '멍멍이',
    type: '개'
  };
  
  const { name: nickname } = animal 
  console.log(nickname);

//배열 비구조화 할당
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
 
//깊은 값 비구조화 할당
const deepObject = {
    state: {
      information: {
        name: 'velopert',  
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
  const {
    state: {
      information: { name, languages }
    },
    value
  } = deepObject;
  
  const extracted = {
    name,
    languages,
    value
  };

console.log(extracted);
