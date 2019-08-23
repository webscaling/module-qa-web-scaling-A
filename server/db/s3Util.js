//NOTE: Change 'lamps' to your category
const categoryFolder = 'lotr';
const printArr = (folder, num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    let pushString = `https://shazamazon.s3.us-east-2.amazonaws.com/${categoryFolder}/${folder}/view${i}.jpg`;
    result.push(pushString);
  }
  return result;
};

console.log(printArr('sword', 1));
 