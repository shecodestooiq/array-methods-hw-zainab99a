function processAges(ages) {
  //!your solution should be inside the function.
  let doubledAges=[];
  let adults=[];
  let ageStrings=[];
  
  //1-Use a for loop to iterate over the ages array and double each age. Store the doubled ages in a new array called doubledAges and Print the doubledAges array to the console.
  for (const age of ages) {
    doubledAges.push(age*2);
    console.log(doubledAges);
  }

  //2-Use the forEach method to loop through the ages array and print each age to the console.
ages.forEach(function(age){
console.log(age);
});

  //3-Use the filter method to create a new array called adults that contains only ages greater than or equal to 18.
  adults=ages.filter(function(age){
    return age>=18;
});
console.log(adults)

  //4-Use the map method to create a new array called ageStrings that contains string representations of each age in the ages array.
  ageStrings = ages.map(function(age){
    return age.toString();
});
console.log(ageStrings)

  //5-please make sure to name your arrays(variables) accordingly to the names in the return statement.

  return { doubledAges, adults, ageStrings };
}
const ages=[25, 18, 12, 16, 40];
module.exports = processAges(ages);
