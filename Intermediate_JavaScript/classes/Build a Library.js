class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut  = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(check) {
      this._isCheckedOut = check;
    }
  
    toggleCheckOutStatus() {
      if(this._isCheckedOut === true){
        this._isCheckedOut = false;
      }
      else{
        this._isCheckedOut = true;
      }
    }
  
    getAverageRating() {
      let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this._ratings.length;
      this._ratings.push(`And this is the Average Rating: ${Math.floor(ratingSum / lengthOfArray)}`);
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  
  // creating a new subclass (book)
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.getAverageRating();
  console.log(historyOfEverything.ratings);
  
  // creating a new subclass (movie)
  const speed = new Movie('Jan de bont', 'Speed', 166);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  speed.getAverageRating();
  console.log(speed.ratings);
  
  