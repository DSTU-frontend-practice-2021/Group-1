function highAndLow(numbers){
  var temp = numbers.split(' ');
  temp.sort(function(a,b){return a-b; });
  return  temp[temp.length-1] + ' ' + temp[0];
  
}
