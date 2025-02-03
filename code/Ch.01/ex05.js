//name 이라는 파라미터를 넣으면 콘솔에 'Hello name!'아르는 결과를 출력
function hello(name) {
    console.log('Hello ' + name + '!');
}

hello('Java');

//리터럴을 사용한 경우
function helloES6(name) {
    console.log(`Hello, ${name}!`); //''이 아닌 ``를 써야함
}

helloES6('Java');

//점수를 성적 등급으로 변환
function getGrade(score) {
    if(score === 100) {
        return 'A+';
    }
    else if(score >= 90) {
        return 'A';
    }
    else if(score >= 80) {
        return 'B+';
    }
    else if(score >= 70) {
        return 'B';
    }
    else if(score >= 60) {
        return 'C+';
    }
    else if(score >= 50) {
        return 'C';
    }
    else if(score >= 40) {
        return 'D';
    }
    else {
        return 'F';
    }
}

const grade = getGrade(90);
console.log(grade);

//화살표 함수를 사용할 경우 
const getGrade1 = score => {
    if(score === 100) {
        return 'A+';
    }
    else if(score >= 90) {
        return 'A';
    }
    else if(score === 89) {
        return 'B+';
    }
    else if(score >= 80) {
        return 'B';
    }
    else if(score === 79) {
        return 'C+';
    }
    else if(score >= 70) {
        return 'C';
    }
    else if(score === 69) {
        return 'D';
    }
    else {
        return 'F';
    }
}
const grade2 = getGrade1(70);
console.log(grade2);


