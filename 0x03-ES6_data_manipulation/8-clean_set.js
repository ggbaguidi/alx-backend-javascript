export default function cleanSet(set, startString) {
  const returnString = [];
  set.forEach((value) => {
    const first = [...value];
    const second = [...startString];
    let val = true;
    const d = 0;
    for (let i = 0; i < 3; i += 1) {
      if (first[d] !== second[i]) {
        val = false;
        break;
      }
      first.shift();
    }
    if (val) {
      returnString.push(first.join(''));
    }
  });
  return returnString.join('-');
}
