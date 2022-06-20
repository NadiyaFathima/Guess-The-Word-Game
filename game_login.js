function AddUser(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("Player_1", player1_name);
    localStorage.setItem("Player_2", player2_name);

    window.location = "game_page.html";
}