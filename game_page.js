var player_1_score = 0;
var player_2_score = 0;



var player_1name = localStorage.getItem("player1");
var player_2name = localStorage.getItem("player2");

document.getElementById("player_question").innerHTML = player_1name;
document.getElementById("player_answer").innerHTML = player_2name;

document.getElementById("player_1name").innerHTML = player_1name;
document.getElementById("player_2name").innerHTML = player_2name;

document.getElementById("player_score1").innerHTML = player_1_score;
document.getElementById("player_score2").innerHTML = player_2_score;

function send(){
 word = document.getElementById("input").value;
 word = word.toLowerCase();

 console.log(word);
 var charAt1 = word.charAt(1);
 console.log(charAt1);


 var length = word.length;
 console.log(length);


 var charAt2 = word.charAt(Math.floor(length/2));
 console.log(charAt2);


 var charAt3 = word.charAt(length-1);
 console.log(charAt3);


 var removefirstletter = word.replace(charAt1,"_");
 console.log(removefirstletter);


 var removesecondletter = removefirstletter.replace(charAt2,"_");
 console.log(removesecondletter);
 

 var removethirdletter = removesecondletter.replace(charAt3,"_");
 console.log(removethirdletter);


 var question = "<h4> Q. " + removethirdletter + "</h4>";
 var input = "<br> <input type='text' id ='inputcheck'>" + "</input>";
 var button = "<br> <br> <button onclick='check()'>Check </button>";
 var all = question + input + button;

 document.getElementById("output").innerHTML = all;
 document.getElementById("input").value="";
}

var question_turn="player1";
var answer_turn ="player2";

function check(){
    var answer = document.getElementById("inputcheck").value;
    answer = answer.toLowerCase();
    console.log("Answer is = " + answer);
    if (answer == word){

        if(answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player_score1").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player_score2").innerHTML = player_2_score;
        }

    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = player_2name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = player_1name;
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = player_2name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = player_1name;
    }
document.getElementById("output").innerHTML = "";
}




