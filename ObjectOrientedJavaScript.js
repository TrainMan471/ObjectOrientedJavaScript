//Creating an object literal
//Write it like this:
 var contact = {};

 //Add properties to the object
 var contact = {
fullName: "Michael"

 };
//Added a fullName property with the value Michael.
//adding methods into an object.

var dice = {
roll: function() {
  var side = 6;
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  console.log(randomNumber);
  }
}
 //Adding this

 var dice = {
   oll: function() {
     var side = 6;
     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
     return randomNumber;
     }
   }
//

 }

//creating a calculator object
var calculator = {
sum: 0,
add: function(value) {

},
clear: function() {
  this.sum = 0;
},
equals: function() {
  return this.sum;
}


}


//Constructor Functions
//Describes how an object should be created
//2)It will create similar objects
//3 Each object created is known as an instance of that object type.
//example of a constructor function
function Contact(name, email) {
  //this = {};
this.name = name;
this.email = email;

}
var contact = new Contact("Michael","brownmichael486@gmail.com");
 //new keyword modifies the code.

 //Prototypes
 Dice.prototype.roll = function () {
   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   return randomNumber;
 }


 //Making a playlist, Object, Constructor and prototype practice in JavaScript.
 function Song(title, artist, duration) {
   this.title = "title";
   this.artist = "artist";
   this.duration = "duration";
   this.isPlaying = false;
 }

 Song.prototype.play = function() {
  this.isPlaying = true;

 Song.prototype.stop = function() {
   this.isPlaying = false;
 };

 Song.prototype.toHTML = function() {

 };
 //Creating the playlist
 function PlayList() {
   this.songs = [];
   this.nowPlayingIndex
 }

 PlayList.prototype.add = function(song) {
   this.songs.push(song);//This methof adds a new song to tjhe playlist
 };

 PlayList.prototype.play = function() {
   var currentSong = this.songs[this.nowPlayingIndex];
   currentSong.play();
 };

 PlayList.prototype.stop = function() {
   var currentSong = this.songs[this.nowPlayingIndex];
   currentSong.stop();
 };

 Playlist.prototype.next = function() {
   this.stop();
   this.nowPlayingIndex++;
   if(this.nowPlayingIndex === this.songs.length ) {
     this.nowPlayingIndex = 0;
   }
   this.play();
 };

 PlayList.prototype.renderIn = function() {
   var htmlString = '<li';
   htmlString += ' class="current"';
   htmlString += '>';
   htmlString += this.title;
   htmlString += OneHundredYears<span class="duration">4:03</span></li>
 };




//App.js file where we make our PlayList
var playlist = new PlayList();

var OneHundredYears = new Song("100 Years","Five for Fighting","4:03");
var theRiddle = new Song("The Riddle","Five for Fighting","5:00");

playlist.add(OneHundredYears);
playlist.add(theRiddle);



//Code Challenge Quiz prototype
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
};

//Quiz prototype
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
  if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
}

//app.js file where the questions array is created
var questions = [
  new Question("Who was President of the United States?"),
]
