function findSquares(number) {
  for(let n = 0; n < 1000000; n++) {
    let min = n;
    let max = n + 1;
    if (max**2 - min**2 === number) {
      return max**2 + "-" + min**2
    }
  } 
}