const findSquares = num => {
  let max = Math.ceil(num / 2);
  let min = num - max;
   return `${max*max}-${min*min}`;
};
