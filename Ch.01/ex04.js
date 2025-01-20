const a = 1;
if(a + 1 === 2) {
    console.log('a + 1 이 2 입니다.');
}

//if문
const b = 1;
if (true) {
    const b = 2;
    console.log('if문 안의 값은 ' + b);
}
console.log('if문 밖의 값은 ' + b);

//if - else
const c = 10;
if (c > 15) {
  console.log('c 가 15 큽니다.');
} else {
  console.log('c 가 15보다 크지 않습니다.');
}

//if - else if 
const d = 10;
if (d === 5) {
  console.log('5입니다!');
} else if (d === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}

//switch / case
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}