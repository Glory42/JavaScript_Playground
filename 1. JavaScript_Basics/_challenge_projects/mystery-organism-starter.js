// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  
  
  return {
    specimenNum : specimenNum,
    dna : dna,

    mutate: function(){
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];

      const possibleBases = ['A', 'T', 'C', 'G'].filter(base => base != currentBase);

      const newBase = possibleBases[Math.floor(Math.random() * possibleBases.length)];

      this.dna[randomIndex] = newBase;

      return dna;
    },

    compareDNA: function(otherPAequor){
      const currentDna = this.dna;
      const otherDna = otherPAequor.dna;
      let identicalCount = 0;

      for(let i = 0; i < currentDna.length; i++){
        if(currentDna[i] === otherDna[i]){
          identicalCount++;
        }
      }

      const percentage = Math.floor((identicalCount / currentDna.length) * 100);
    
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`);
    },

    willLikelySurvive: function(){
      const CGCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      const survivalChance = (CGCount / this.dna.length) * 100;
      
      return survivalChance >= 60;
    }
  };
};

const survivingPAequorArray = [];
let specimenCount = 1;

while(survivingPAequorArray.length < 30){
  const newStrand = mockUpStrand();
  const newPAequor = pAequorFactory(specimenCount, newStrand);

  if(newPAequor.willLikelySurvive()){
    survivingPAequorArray.push(newPAequor);
    specimenCount++;
  }
}

console.log(survivingPAequorArray);