class Quiz {
  constructor(){}

  getState() {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide(); 

    background("Yellow");
    fill(0);
    textSize(30);
    fill("darkblue");
    text("Results of the Quiz", 340, 50);
    text("----------------------------", 320, 65);
  
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;

      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant(s) who answered correct are highlighted in green color!", 330, 230);

      textSize(25);
      fill(255, 18, 133);
      text("Thank you for playing our Quiz!", 500, 430)

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";

        if (correctAns === allContestants[plr].answer){
          fill("Green")
        }
        else{
          fill("red");
        }

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 350, display_Answers)
      }
    }
  }
}
