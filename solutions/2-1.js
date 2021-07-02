function highAndLow(numbers){
  num = numbers.split(' ');
  let max = parseInt(num[0]);
  let min = parseInt(num[0]);
  for (let i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) > max){
      max = parseInt(num[i]);
    }
  }
  for (let i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) < min){
      min = parseInt(num[i]);
    } 
 }
 return (max + " " + min);
}