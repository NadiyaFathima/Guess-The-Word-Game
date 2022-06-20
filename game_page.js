player1_name = localStorage.getItem("Player_1");
player2_name = localStorage.getItem("Player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_player").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_player").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in Lower Case is " + word);

    char_1 = word.charAt(1);
    console.log(char_1);

    lengthDiv2 = Math.floor(word.length/2);
    char_2 = word.charAt(lengthDiv2);
    console.log(char_2);

    lengthMinus1 = word.length - 1;
    char_3 = word.charAt(lengthMinus1);
    console.log(char_3);

    replace_char1 = word.replace(char_1,"_");
    replace_char2 = replace_char1.replace(char_2,"_");
    replace_char3 = replace_char2.replace(char_3,"_");
    console.log(replace_char3);

    question = "<h4 id='question_word'>Q) " + replace_char3 + "</h4>";
    ibox = "<br>Answer : <input type='text' id='answer_word'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check Answer</button>";
    row = question + ibox + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("answer_word").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in lower case = " + answer);

    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_player").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("question_player").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("answer_player").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("answer_player").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
