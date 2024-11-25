let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = false;
let runnersAge = 18;

 if(runnersAge > 18 && earlyRegistered){
  console.log(raceNumber + ' will race at 9:30 am.');
 }
 else if (runnersAge > 18 && earlyRegistered === false) {
  console.log(raceNumber + ' will race at 11:am.');
 }
 else if (runnersAge < 18) {
  console.log(raceNumber + ' will race at 12:30.');
 }
 else{
  console.log(raceNumber + ' will see the registration desk.')
 }