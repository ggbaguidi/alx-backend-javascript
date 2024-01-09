export default function hasValuesFromArray(set, array) {
  let correct = true;
  array.map((value) => {
    const valuea = value;
    if (!set.has(valuea)) {
      correct = false;
    }
    return true;
  });
  return correct;
}
