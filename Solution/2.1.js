function highAndLow(numbers){
    let arr_str = numbers.split(' ');
    let arr_int = arr_str.map(Number)
    max = arr_int[0]
    min = arr_int[0]
    for (let i = 0; i < arr_int.length; i++) {
      if (arr_int[i] > max ) {
        max = arr_int[i]
      }
      if (arr_int[i] < min ) {
        min = arr_int[i]
      }
      }
  max_str = max.toString();
  min_str = min.toString();
  return max_str + " " + min_str  
  }
