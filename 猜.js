const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const restartBtn = document.querySelector(".restartBtn");
restartBtn.addEventListener("click", initGame);
let countNum =0;
function checkGuess() {
    const guesses = document.querySelector(".guesses");
    countNum++;
    count.textContent = "猜測次數："+countNum;
    // guessField.focus();       //游標焦點預設在輸入欄位裡
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
    if  (  userGuess === randomNumber ) {
        result.textContent = "猜測結果：Congratulations!" ;
    }
    else if (userGuess  < randomNumber ) {
        result.textContent = "猜測結果：數字太小!" ;
    }
    else if (userGuess  >  randomNumber) {
        result.textContent = "猜測結果：數字太大!";
    }
    if (countNum == 10){
    result.textContent += "遊戲結束";
    result.style.backgroundColor="red";
    alert("遊戲結束");
    setGameOver();
    }
    guesses.textContent += userGuess + " ";
}
guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式
let randomNumber = Math.floor(Math.random()*100);
console.log("觀察隨機的數字：", randomNumber);


function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
}
function initGame() {
    countNum = 0;
    randomNumber = Math.floor(Math.random()*100);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    result.computedStyleMap.backgroundColor="";
    result.textContent= "0";
    guesses.textContent = "已猜過的數字"
    count.textContent = "猜測次數:"+countNum;
}