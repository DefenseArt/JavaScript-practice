//spread
const slime = {
    name: '슬라임'
  };
  
  const cuteSlime = {
    ...slime,
    attribute: 'cute'
  };
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
  };
  
  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);

//rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...rest } = purpleCuteSlime;
  console.log(color);
  console.log(rest);

//퀴즈
function max(...rest) {
    return Math.max(...rest);
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);