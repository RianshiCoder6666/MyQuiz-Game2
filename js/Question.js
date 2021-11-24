class Question {

  constructor() {
    this.title = createElement('h1')

    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder", "Enter Correct Option No..");

    this.button = createButton('Submit');
    this.button2 = createButton('Reset');

    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display() {
    //title
    this.title.html("MyQuiz Game");
    this.title.position(500, 0);

    //question
    this.question.html("Question:- What people buy to eat, but actually don't eat it? " );
    this.question.position(300, 80);
    this.question.class("h1");

    //options
    this.option1.html("1: hotdog ");
    this.option1.position(350, 110);

    this.option2.html("2: plate");
    this.option2.position(350, 130);

    this.option3.html("3: bottle ");
    this.option3.position(350, 150);

    this.option4.html("4: ice cream");
    this.option4.position(350, 170);

    //inputs
    this.input1.position(350, 240);
    this.input1.class("Input");

    this.input2.position(550, 240);
    this.input2.class("Input");

    //buttons
    this.button.position(400, 300);
    this.button.class("Input");

    this.button2.position(500, 300);
    this.button2.class("Input");


    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
