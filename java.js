window.addEventListener("load", loadScreen);

let point = 0;
let lives = 3;

let gameIsPaused = false;
let gameHasEnded = false;

let durationOfGame = 45;

let backgroundMusic = document.querySelector("#background_music");
let snowStorm = document.querySelector("#snow_storm");
let footSteps = document.querySelector("#footsteps");
let reindeer = document.querySelector("#reindeer");
let reindeerFade = document.querySelector("#reindeer_fade");
let evilLaugh = document.querySelector("#evil_laugh");
let sElfSound = document.querySelector("#s_elf_sound");
let hoho = document.querySelector("#hoho");
let elfOhNo = document.querySelector("#elf_ohno");
let PumpkinOhNo = document.querySelector("#pumpkin_ohno");

let soundmuted = false;


function loadScreen() {
    console.log("loadScreen");




    //add hidden to other screens//

    document.querySelector("#load_screen").classList.remove("hidden");
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#game_elements").classList.add("hidden");

    document.querySelector("#game_ui").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");

    document.querySelector("#level_complete").classList.add("hidden");

    document.querySelector("#instructions").classList.add("hidden");

    //add animation to elf//
    document.querySelector("#load_elf").classList.add("sqaure");


    //add startgame button//
    //    document.querySelector("#load_button").classList.add("pulse");

    document.querySelector(" #load_button").addEventListener("mousedown", titleScreen);

    gameIsPaused = false;

}

function titleScreen() {
    console.log("titleScreen");

    gameHasEnded = true;

    //add sounds and music//

    snowStorm.play();
    backgroundMusic.pause();
    reindeerFade.pause();
    reindeer.pause();
    //    snowStorm.currentTime = 0;

    //remove evntlisteners//

    document.querySelector(" #load_button").removeEventListener("mousedown", titleScreen);


    //add hidden to other screens//


    document.querySelector("#title_screen").classList.remove("hidden");

    document.querySelector("#load_screen").classList.add("hidden");
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#game_elements").classList.add("hidden");

    document.querySelector("#game_ui").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");

    document.querySelector("#level_complete").classList.add("hidden");

    document.querySelector("#instructions").classList.add("hidden");


    //add startgame button//
    document.querySelector("#start_game_button").classList.add("pulse");

    document.querySelector(" #start_game_button").addEventListener("mousedown", startGame);
    
    //aniamtion//
    
    document.querySelector("#window").classList.add("shining");

    //add instructions button//

    document.querySelector(" #instructions_button").addEventListener("mousedown", instructions);

    gameIsPaused = false;

}

function startGame() {

    console.log("startGame");

    //add sounds and music//
    snowStorm.pause();
    reindeerFade.pause();
    reindeer.pause();
    backgroundMusic.play();
    backgroundMusic.currentTime = 0;


    //remove evntlisteners//

    document.querySelector(" #start_game_button").removeEventListener("mousedown", startGame);

    //Set timer//

    document.querySelector("#game_background").classList.add("moon");

    document.querySelector("#time_moon_1_sprite").classList.add("shining_moon_1");
    
    document.querySelector("#time_moon_1_sprite").addEventListener("animationend", gameOver);

    //set points//
    document.querySelector("#point").textContent = point;


    //positions given//

    document.querySelector("#santas_elf_container1").classList.add("position1");

    document.querySelector("#santas_elf_container2").classList.add("position2");


    document.querySelector("#jacks_elf_container1").classList.add("position3");

    document.querySelector("#jacks_elf_container2").classList.add("position4");



    //start all animations//

    document.querySelector("#santas_elf_container1").classList.add("moveLeft");


    document.querySelector("#santas_elf_container2").classList.add("moveRight2");


    document.querySelector("#jacks_elf_container1").classList.add("moveRight");


    document.querySelector("#jacks_elf_container2").classList.add("moveLeft2");

    // add hidden classes//
    document.querySelector("#game_over").classList.add("hidden");

    document.querySelector("#instructions").classList.add("hidden");

    document.querySelector("#smoke_effect_container").classList.add("hidden");

    document.querySelector("#title_screen").classList.add("hidden");

    document.querySelector("#level_complete").classList.add("hidden");


    document.querySelector("#mute_music_button_container").classList.add("hidden");

   




    //remove hidden classes to gameplay//
    document.querySelector("#game_background").classList.remove("hidden");
    document.querySelector("#game_elements").classList.remove("hidden");

    document.querySelector("#game_ui").classList.remove("hidden");

    //mute music button//
    document.querySelector("#music_button_container").addEventListener("mousedown", muteMusic);
    document.querySelector("#mute_music_button_container").addEventListener("mousedown", unmuteMusic);

    //add home button//

    document.querySelector("#home_button").addEventListener("mousedown", titleScreen);



    //clicks on santas elfs//

    document.querySelector("#santas_elf_container1").addEventListener("mousedown", clickSantasElf1);

    document.querySelector("#santas_elf_container2").addEventListener("mousedown", clickSantasElf2);

    document.querySelector("#jacks_elf_container1").addEventListener("mousedown", clickJacksElf1);

    document.querySelector("#jacks_elf_container2").addEventListener("mousedown", clickJacksElf2);

    // TODO: restart point- and health-bar//
    lives = 3;
    point = 0;

    document.querySelector("#lives").classList.add("hidden");



    //addidng win with 25 points//

    //adding animations to ui elements//

    document.querySelector("#life_face_1_container").classList.add("pulse");
    document.querySelector("#life_face_2_container").classList.add("grey");
    document.querySelector("#life_face_3_container").classList.add("grey");



}

function clickSantasElf1() {

    console.log("clickSantasElf1")

    //add sound and music//

    sElfSound.play();
    sElfSound.currentTime = 0;

    elfOhNo.play();
    elfOhNo.currentTime = 0;

    // Start dissapear animation//

    document.querySelector("#santas_elf_container1").classList.add("hidden");


    //TODO: Start smoke effect animation//
    document.querySelector("#santas_elf_container1").classList.add("smoke");



    //give point//

    point++;


    if (point == 25) {
        levelComplete();
    }


    //show total point//

    document.querySelector("#point").textContent = point;

    //restart elf//
    document.querySelector("#santas_elf_container1").addEventListener("mousedown", restartClickSantasElf1);

    restartClickSantasElf1();

}

function clickSantasElf2() {

    console.log("clickSantasElf2")

    //add sound and music//

    sElfSound.play();
    sElfSound.currentTime = 0;
    elfOhNo.play();
    elfOhNo.currentTime = 0;

    // Start dissapear animation//

    document.querySelector("#santas_elf_container2").classList.add("hidden");


    //give point//

    point++;

    //show total point//

    document.querySelector("#point").textContent = point;

    document.querySelector("#santas_elf_container2").addEventListener("mousedown", restartClickSantasElf2);

    restartClickSantasElf2();

    if (point == 25) {
        levelComplete();
    }


}

function clickJacksElf1() {

    console.log("clickJacksElf1")

    //add sound and music//

    sElfSound.play();
    sElfSound.currentTime = 0;

    PumpkinOhNo.play();
    PumpkinOhNo.currentTime = 0;


    // Start dissapear animation//

    document.querySelector("#jacks_elf_container1").classList.add("hidden");


    //TODO: Start smoke effect animation//
    //    document.querySelector("#smoke_effect_container").classList.remove("hidden");
    //    
    //    document.querySelector("#smoke_effect_container").classList.add("scale_smoke")

    //if (point === durationGame)

    //lose life//

    lives--;

    if (lives < 1) {
        gameOver();
    }

    if (lives < 3) {
        startChickenOMeter1();
    }

    if (lives < 2) {
        startChickenOMeter2();
    }


    //show total point//

    document.querySelector("#lives").textContent = lives;

    //     document.querySelector("#jacks_elf_container1").classList.add("scale_smoke");

    //    document.querySelector("#smoke_effect_container").classList.add("scale_smoke");

    document.querySelector("#jacks_elf_container1").addEventListener("mousedown", restartClickJackElf1);

    restartClickJackElf1();




}

function clickJacksElf2() {

    console.log("clickJacksElf2")

    //add sound and music//

    sElfSound.play();
    sElfSound.currentTime = 0;

    PumpkinOhNo.play();
    PumpkinOhNo.currentTime = 0;

    // Start dissapear animation//

    document.querySelector("#jacks_elf_container2").classList.add("hidden");


    //TODO: Start smoke effect animation//
    //    document.querySelector("#smoke_effect_container").classList.remove("hidden");
    //    
    //    document.querySelector("#smoke_effect_container").classList.add("scale_smoke")

    //if (point === durationGame)

    //lose life//

    lives--;

    if (lives < 1) {
        gameOver();
    }

    if (lives < 3) {
        startChickenOMeter1();
    }

    if (lives < 2) {
        startChickenOMeter2();
    }



    //show total point//

    document.querySelector("#lives").textContent = lives;

    //     document.querySelector("#jacks_elf_container1").classList.add("scale_smoke");

    //    document.querySelector("#smoke_effect_container").classList.add("scale_smoke");

    document.querySelector("#jacks_elf_container2").addEventListener("mousedown", restartClickJackElf2);

    restartClickJackElf2();



}

function restartClickSantasElf1() {

    console.log("restartClickSantasElf1")

    document.querySelector("#santas_elf_container1").removeEventListener("mousedown", restartClickSantasElf1);

    //remove eventListeners that called the function//
    document.querySelector("#santas_elf_container1").removeEventListener("hidden", restartClickSantasElf1);
    document.querySelector("#santas_elf_container1").removeEventListener("mousedown", clickSantasElf1);

    //Remove all classes//

    document.querySelector("#santas_elf_container1").classList.value = "";
    document.querySelector("#santas_elf_container1").classList.remove("hidden");
    document.querySelector("#santas_elf_container1").classList.remove("position1");
    document.querySelector("#santas_elf_container1").classList.remove("moveLeft");
    document.querySelector("#santas_elf_container1").offsetHeight;

    //restart animation////
    document.querySelector("#santas_elf_container1").classList.add("moveLeft")

    //add eventlisteners//
    document.querySelector("#santas_elf_container1").addEventListener("mousedown", clickSantasElf1);

    //TODO:reset random position//
    document.querySelector("#santas_elf_container1").classList.add("position1");


}

function restartClickSantasElf2() {

    console.log("restartClickSantasElf2")

    document.querySelector("#santas_elf_container2").removeEventListener("mousedown", restartClickSantasElf2);

    //remove eventListeners that called the function//
    document.querySelector("#santas_elf_container2").removeEventListener("hidden", restartClickSantasElf2);
    document.querySelector("#santas_elf_container2").removeEventListener("mousedown", clickSantasElf2);

    //Remove all classes//

    document.querySelector("#santas_elf_container2").classList.value = "";
    document.querySelector("#santas_elf_container2").classList.remove("hidden");
    document.querySelector("#santas_elf_container2").classList.remove("position2");
    document.querySelector("#santas_elf_container2").classList.remove("moveRight2");
    document.querySelector("#santas_elf_container2").offsetHeight;

    //restart animation////
    document.querySelector("#santas_elf_container2").classList.add("moveRight2")

    //add eventlisteners//
    document.querySelector("#santas_elf_container2").addEventListener("mousedown", clickSantasElf2);

    //TODO:reset random position//
    document.querySelector("#santas_elf_container2").classList.add("position2");


}

function restartClickJackElf1() {

    console.log("restartClickJackElf1")

    document.querySelector("#jacks_elf_container1").removeEventListener("mousedown", restartClickJackElf1);

    //remove eventListeners that called the function//
    document.querySelector("#jacks_elf_container1").removeEventListener("hidden", restartClickJackElf1);
    document.querySelector("#jacks_elf_container1").removeEventListener("mousedown", clickJacksElf1);

    //Remove all classes//

    document.querySelector("#jacks_elf_container1").classList.value = "";
    document.querySelector("#jacks_elf_container1").classList.remove("hidden");
    document.querySelector("#jacks_elf_container1").classList.remove("position3");
    document.querySelector("#jacks_elf_container1").classList.remove("moveRight");
    document.querySelector("#jacks_elf_container1").offsetHeight;

    //restart animation////
    document.querySelector("#jacks_elf_container1").classList.add("moveRight")

    //add eventlisteners//
    document.querySelector("#jacks_elf_container1").addEventListener("mousedown", clickJacksElf1);

    //TODO:reset random position//
    document.querySelector("#jacks_elf_container1").classList.add("position3");


}

function restartClickJackElf2() {

    console.log("restartClickJackElf2")

    document.querySelector("#jacks_elf_container2").removeEventListener("mousedown", restartClickJackElf2);

    //remove eventListeners that called the function//
    document.querySelector("#jacks_elf_container2").removeEventListener("hidden", restartClickJackElf2);
    document.querySelector("#jacks_elf_container2").removeEventListener("mousedown", clickJacksElf2);

    //Remove all classes//

    document.querySelector("#jacks_elf_container2").classList.value = "";
    document.querySelector("#jacks_elf_container2").classList.remove("hidden");
    document.querySelector("#jacks_elf_container2").classList.remove("position4");
    document.querySelector("#jacks_elf_container2").classList.remove("moveLeft2");
    document.querySelector("#jacks_elf_container2").offsetHeight;

    //restart animation////
    document.querySelector("#jacks_elf_container2").classList.add("moveLeft2")

    //add eventlisteners//
    document.querySelector("#jacks_elf_container2").addEventListener("mousedown", clickJacksElf2);

    //TODO:reset random position//
    document.querySelector("#jacks_elf_container2").classList.add("position4");





}

function reachSleigh() {

    console.log("reachSleigh")

    //TODO:stop animation//

    //    document.querySelector("#santas_elf_container1").addEventListener("animationend", restartNoClickSantasElf1);

    //    document.querySelector("#santas_elf_container2").addEventListener("animationend", restartNoClickSantasElf2);

    //TODO: Reset to new position//

    //TODO: Lose a health//

    //TODO: show points//

}

function levelComplete() {

    console.log("levelComplete")

    //add sounds and music//
    backgroundMusic.pause();

    snowStorm.play();
    snowStorm.currentTime = 0;

    evilLaugh.play();
    evilLaugh.currentTime = 0;

    reindeer.play();
    reindeer.currentTime = 0;

    document.querySelector("#level_complete").classList.remove("hidden");

    //TODO: //

    //remove all eventlisteners//
    document.querySelector("#santas_elf_container1").removeEventListener("mousedown", clickSantasElf1);
    document.querySelector("#santas_elf_container2").removeEventListener("mousedown", clickSantasElf2);

    document.querySelector("#jacks_elf_container1").removeEventListener("mousedown", clickJacksElf1);

    document.querySelector("#jacks_elf_container2").removeEventListener("mousedown", clickJacksElf2);



    //    document.querySelector("#santas_elf_container1").offsetHeight;



    //remove all hidden classes//
    document.querySelector("#game_over").classList.remove("hidden");


    document.querySelector("#title_game_over").classList.add("hidden");

    document.querySelector("#crying_pumpkin").classList.add("hidden");
    document.querySelector("#restart_button").classList.add("hidden");

    //add hidden classes//
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#game_elements").classList.add("hidden");

    document.querySelector("#game_ui").classList.add("hidden");

    document.querySelector("#instructions").classList.add("hidden");

    //add home button
    document.querySelector("#home_button_level_complete").addEventListener("mousedown", titleScreen);



    // Add animaition on button//
    document.querySelector("#play_again_button").classList.add("pulse");


    document.querySelector("#play_again_button").addEventListener("mousedown", restartGame);

    gameHasEnded = true;


}

function restartGame() {
    console.log("restartGame");

    //Add sounds and music//
    snowStorm.pause();

    reindeer.pause();

    hoho.pause();

    document.querySelector("#gameOver, #restart_button").removeEventListener("mousedown", restartGame);
    document.querySelector("#levelComplete, #play_again_button").removeEventListener("mousedown", restartGame);

    //hiding unused screens//    
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");

    document.querySelector("#level_complete").classList.add("hidden");

    //     document.querySelector("#instructions").classList.add("hidden");

    //reset time, point and live//
    lives = 4;
    point = 0;
    document.querySelector("#point").textContent = point;
    timeLeft = durationOfGame;

    document.querySelector("#life_face_1_container").classList.remove("grey");
    document.querySelector("#life_face_2_container").classList.remove("grey");
    document.querySelector("#life_face_3_container").classList.remove("grey");

    //remove aniend class//
    document.querySelector("#santas_elf_container1").classList.remove("hidden");

    document.querySelector("#santas_elf_container2").classList.remove("hidden");


    document.querySelector("#jacks_elf_container1").classList.remove("hidden");

    document.querySelector("#jacks_elf_container2").classList.remove("hidden");

    (startGame);



    //reset game run//
    gameHasEnded = true;

    // Calling the startGame function
    startGame();
}

function gameOver() {

    console.log("gameOver")

    gameHasEnded = true;

    //add sounds and music//
    backgroundMusic.pause();
    snowStorm.play();
    snowStorm.currentTime = 0;

    hoho.play();
    hoho.currentTime = 0;

    reindeerFade.play();
    reindeerFade.currentTime = 0;


    //remove all classes//
    document.querySelector("#santas_elf_container1").classList.value = "";
    document.querySelector("#santas_elf_container2").classList.value = "";
    document.querySelector("#jacks_elf_container1").classList.value = "";
    document.querySelector("#jacks_elf_container2").classList.value = "";
    document.querySelector("#santas_elf_sprite1").classList.value = "";
    document.querySelector("#santas_elf_sprite2").classList.value = "";
    document.querySelector("#jacks_elf_sprite1").classList.value = "";
    document.querySelector("#jacks_elf_sprite2").classList.value = "";

    document.querySelector("#jacks_elf_sprite2").classList.value = "";



    //remove all eventlisteners//
    document.querySelector("#santas_elf_container1").removeEventListener("mousedown", clickSantasElf1);
    document.querySelector("#santas_elf_container2").removeEventListener("mousedown", clickSantasElf2);

    document.querySelector("#jacks_elf_container1").removeEventListener("mousedown", clickJacksElf1);

    document.querySelector("#santas_elf_container1").offsetHeight;
    
    document.querySelector("#time_moon_1_sprite").removeEventListener("animationend", gameOver);



    //remove all hidden classes//
    document.querySelector("#game_over").classList.remove("hidden");


    document.querySelector("#title_game_over").classList.remove("hidden");

    document.querySelector("#crying_pumpkin").classList.remove("hidden");
    document.querySelector("#restart_button").classList.remove("hidden");

    //add hidden classes//
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#game_elements").classList.add("hidden");

    document.querySelector("#game_ui").classList.add("hidden");

    document.querySelector("#level_complete").classList.add("hidden");

    document.querySelector("#instructions").classList.add("hidden");


    //add home button


    document.querySelector("#home_button_game_over").addEventListener("mousedown", titleScreen);

    // Add animaition on button//
    document.querySelector("#restart_button").classList.add("pulse");


    document.querySelector("#gameOver, #restart_button").addEventListener("mousedown", restartGame);


}

function instructions() {
    console.log("instructions")

    document.querySelector("#instructions").classList.remove("hidden");

    //     document.querySelector("#title_screen").classList.add("hidden");


    document.querySelector(" #back_button").addEventListener("mousedown", titleScreen);



}

function startChickenOMeter1() {
    console.log("startChickenOMeter1")

    document.querySelector("#life_face_1_container").classList.remove("pulse");
    document.querySelector("#life_face_1_container").classList.add("grey");

    document.querySelector("#life_face_2_container").classList.add("pulse");
    document.querySelector("#life_face_2_container").classList.remove("grey");


}

function startChickenOMeter2() {
    console.log("startChickenOMeter2")

    document.querySelector("#life_face_2_container").classList.add("grey");
    document.querySelector("#life_face_2_container").classList.remove("pulse");


    document.querySelector("#life_face_3_container").classList.remove("grey");
    document.querySelector("#life_face_3_container").classList.add("pulse");



}

function muteMusic() {
    console.log("muteMusic")

    document.querySelector("#mute_music_button_container").classList.remove("hidden");
    document.querySelector("#music_button_container").classList.add("hidden");

    backgroundMusic.pause();
}

function unmuteMusic() {
    console.log("unmuteMusic")

    document.querySelector("#mute_music_button_container").classList.add("hidden");
    document.querySelector("#music_button_container").classList.remove("hidden");

    backgroundMusic.play();
}

function muteSound() {
    console.log("mutesound")

    document.querySelector("#mute_sound_button_container").classList.remove("hidden");
    document.querySelector("#sound_button_container").classList.add("hidden");

    sElfSound.pause();
    soundmuted = true;
}

function unmuteSound() {
    console.log("unmutesound")

    document.querySelector("#mute_sound_button_container").classList.add("hidden");
    document.querySelector("#sound_button_container").classList.remove("hidden");

    sElfSound.play();
    soundmuted = false;
}

window.addEventListener("load", loadScreen);
