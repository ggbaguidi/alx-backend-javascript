export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new DataView(buffer, 0, length);
  try {
    int8.setInt8(position, value);
    return int8;
  } catch (e) {
    const newError = new Error('Position outside range');
    return newError;
  }
}
