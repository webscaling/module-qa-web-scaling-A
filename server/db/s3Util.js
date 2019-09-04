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


<div class="a-search a-span12">
  <i class="a-icon a-icon-search"></i>
  <input type="search" maxlength="150"
    autocomplete="off"
    placeholder="Have a question? Search for answers"
    name="askQuestionText"
    class="a-input-text a-span12"></input>
</div>;