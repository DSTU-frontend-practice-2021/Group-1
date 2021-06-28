function strangeMath(n, k)
{
  let array = [];
  for (var i = 0; i <= n; i++) {
      array[i] = i;
  }
  return array.sort().indexOf(k);
}