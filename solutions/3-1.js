function list(names){
  const len = names.length;
  if(len == 0) return '';
  let a = names.slice(0, len - 1).map(p => p.name).join(", ");
  let b = (len > 1 ? ' & ' : '');
  let c = names[len - 1].name;
  return a + b + c;
}