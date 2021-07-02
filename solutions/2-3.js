function strangeMath(n, k)
{
  let array = [];
  for (let i = 0; i <= n; i++) {
      array[i] = i;
  }
  return array.sort().indexOf(k);
}