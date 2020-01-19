const swap = (arr, index) => {
  const prevIndex = index - 1;
  const postIndex = index + 1;
  if (index < 1 || index > arr.length - 2){
    console.log('error');
    return arr;
  }
  const temp = arr[prevIndex];
  arr[prevIndex] = arr[postIndex];
  arr[postIndex] = temp;
  return arr;
};
// export default swap;

const cities = ['moscow', 'london', 'berlin', 0];
console.log(swap(cities, 2));