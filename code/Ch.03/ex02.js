//async
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초쉬고
    console.log('반갑습니다!');
  }
  
  process().then(() => {
    console.log('작업이 끝났어요!');
  });

// await
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초쉬고
    console.log('반갑습니다!');
  }
  
  process();


//비동기 함수
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
  }
  
  process();
