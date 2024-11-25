// Write your code here:
const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      get name(){
        return this._name;
      },
      set name(newName){
        this._name = newName;
      },
  
      _breed:  breed,
      get breed(){
        return this._breed;
      },
      set breed(newBreed){
        this._breed = newBreed;
      },
  
      _weight : weight ,
      get weight (){
        return this._weight ;
      },
      set weight (newweight){
        this._weight  = newweight;
      },
  
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
       this._weight++ 
      },
    }
  
    
  } 