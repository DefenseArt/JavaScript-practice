//원의 넓이 구하는 함수
function calculaterCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculaterCircleArea(4);
console.log(area); //50.26548245743669

//r 값을 넣어주지 않으면 ?
const Nor = calculaterCircleArea();
console.log(Nor); //NaN = Not Number 

//함수에서 만약 r 값이 주어지지 않으면 기본 값 1을 사용하도록 설정
function CircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}
const cArea = CircleArea();
console.log(cArea); //3.141592653589793

//화살표 함수 적용
const ccArea = (r = 1) => Math.PI * r * r;
const pArea = ccArea();
console.log(pArea); //3.141592653589793
