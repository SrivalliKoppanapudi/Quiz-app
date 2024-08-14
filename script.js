const quizEasy = {
  JavaScript: [
    {
      q: "Which type of JavaScript language is",
      opt: {
        a: "Object Oriented",
        b: "Object Based",
        c: "Assembly language",
        d: "High level",
      },
      ans: "Object Based",
    },
    {
      q: " Which one of the following also known as Conditional Expression",
      opt: {
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
      },
      ans: "immediate if",
    },
    {
      q: "Which of the following variables takes precedence over the others if the names are the same?",
      opt: {
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
      },
      ans: "The local element",
    },
    {
      q: " Which one of the following is the correct way for calling the JavaScript code?",
      opt: {
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
      },
      ans: "Function/Method",
    },
    {
      q: "Which of the following type of a variable is volatile?",
      opt: {
        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "Immutable variable",
      },
      ans: "Mutable variable",
    },
  ],
};
const quizMedium = {
  JavaScript: [
    {
      q: "Which of the following option is used as hexadecimal literal beginning?",
      opt: {
        a: "00",
        b: "0x",
        c: "0X",
        d: "Both 0x and 0X",
      },
      ans: "Both 0x and 0X",
    },
    {
      q: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints",
      opt: {
        a: "Prints an exception error",
        b: "Prints an overflow error",
        c: "Displays Infinity",
        d: "Prints the value as such",
      },
      ans: "Displays Infinity",
    },
    {
      q: " Which one of the following also known as Conditional Expression",
      opt: {
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
      },
      ans: "immediate if",
    },
    {
      q: "In the JavaScript, which one of the following is not considered as an error:",
      opt: {
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
      },
      ans: "Division by zero",
    },
    {
      q: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
      opt: {
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()",
      },
      ans: "toFixed()",
    },
  ],
};
const quizHard = {
  JavaScript: [
    {
      q: "To convert string to number, which function do we use ?",
      opt: {
        a: "ParseNumber",
        b: "ParseString",
        c: "ParseInt",
        d: "ParseDouble",
      },
      ans: "ParseInt",
    },
    {
      q:"Given the following, what is the value of x? var x = typeof('abc')",
      opt: {
        a: "abc",
        b: "string",
        c: "undefined",
        d: "error",
      },
      ans: "string",
    },
    {
      q: " How do you check if a variable is an array in JavaScript?",
      opt: {
        a: " isArray(x) ",
        b: "x.isArray() ",
        c: "x instanceof Array ",
        d: "typeof Array ",
      },
      ans: "isArray(x) ",
    },
    {
      q: "How do you create an empty array in JavaScript?",
      opt: {
        a: "let arr = new Array(); ",
        b: "let arr = []; ",
        c: "let arr = {};",
        d: "let arr = null;"
      },
      ans: "let arr = []; ",
    },
    {
      q: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
      opt: {
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()"
      },
      ans: "toFixed()",
    },
  ],
};
const preloader = document.querySelector("#preloader");
const btns = document.querySelectorAll(".cat");
const category = document.querySelector(".category");
let level = document.querySelector("select");
let quiz = document.querySelector(".quiz");
let back = document.querySelector(".back");
let ques = document.querySelector(".ques");
let ansList = document.querySelector(".ans-list");
let nextBtn = document.getElementById("next-btn");
let timer = document.getElementById("timer");
let sec
let time
//const parent=document.querySelector(".parent")
let ans = [];
var val = "";
var indexE = 1,
  indexH = 1,
  indexM = 1;
window.addEventListener("load", function () {
  this.setTimeout(function () {
    preloader.style.display = "none";
  }, 500);
});
var t = "";
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //toggling display
    console.log(btn.innerText);
    t = btn.innerText;
    
    //check level and display data
    //check data exists or not ...if not display error page
    //when we click by default easy section loads
    if (Object.keys(quizEasy).includes(t)) {
        category.classList.add("d-none");
    quiz.classList.remove("d-none");
    quiz.innerHTML = `<div class="quiz-head">
                <button class="back">Back</button>
            <form>
                <select name="level" id="level" title="diff">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>  
            </form>
            </div>
            <h3 class="ques"></h3>
            <h2>Timer: <span id=timer></span></h2>
            <ul class="ans-list"></ul>
            <button id="next-btn">Next</button>`;

    level = document.querySelector("select");
    quiz = document.querySelector(".quiz");
    back = document.querySelector(".back");
    ques = document.querySelector(".ques");
    ansList = document.querySelector(".ans-list");
    nextBtn = document.getElementById("next-btn");
    timer = document.getElementById("timer");
    val=level.value
    //chnaged timers
    level.addEventListener("change", () => {
        sec=10
       clearInterval(time)
         time=setInterval(()=>{
            timer.innerText=sec;
            sec--;
            if(sec<0){
                clearInterval(time)
                nextBtn.click()
            }
        },1000); 
      (indexE = 1), (indexH = 1), (indexM = 1);
      score = 0;
      val = level.value;
      console.log(level.value);
      if (val === "easy") {
        while (ansList.firstChild) {
          ansList.firstChild.remove();
        }
        ques.innerText = quizEasy[t][0].q;
        Object.values(quizEasy[t][0].opt).forEach((v) => {
          var element = document.createElement("li");
          element.innerText = v;
          element.classList.add("ans");
          ansList.appendChild(element);
          element.addEventListener("click", () => {
            evaluate(element);
          });
        });
      } else if (val === "medium") {
        while (ansList.firstChild) {
          ansList.firstChild.remove();
        }
        ques.innerText = quizMedium[t][0].q;
        Object.values(quizMedium[t][0].opt).forEach((v) => {
          var element = document.createElement("li");
          element.innerText = v;
          element.classList.add("ans");
          ansList.appendChild(element);
          element.addEventListener("click", () => {
            evaluate(element);
          });
        });
      } else {
        while (ansList.firstChild) {
          ansList.firstChild.remove();
        }
        ques.innerText = quizHard[t][0].q;
        Object.values(quizHard[t][0].opt).forEach((v) => {
          var element = document.createElement("li");
          element.innerText = v;
          element.classList.add("ans");
          ansList.appendChild(element);
          element.addEventListener("click", () => {
            evaluate(element);
          });
        });
      }
    });
    back.addEventListener("click", () => {
        sec=10
       clearInterval(time)
         time=setInterval(()=>{
            timer.innerText=sec;
            sec--;
            if(sec<0){
                clearInterval(time)
                nextBtn.click()
            }
        },1000); 
      while (ansList.firstChild) {
        ansList.firstChild.remove();
      }
      category.classList.toggle("d-none");
      quiz.classList.toggle("d-none");
    });

    nextBtn.addEventListener("click", () => {
        sec=10
        clearInterval(time)
         time=setInterval(()=>{
            timer.innerText=sec;
            sec--;
            if(sec<0){
                clearInterval(time)
                nextBtn.click()
            }
        },1000); 
      val = level.value;
      console.log("clicked" + val);

      if (indexE < 5 && val === "easy") {
        while (ansList.firstChild) {
          ansList.firstChild.remove();
        }
        ques.innerText = quizEasy[t][indexE].q;
        Object.values(quizEasy[t][indexE].opt).forEach((v) => {
          var element = document.createElement("li");
          element.innerText = v;
          element.classList.add("ans");
          ansList.appendChild(element);
          element.addEventListener("click", () => {
            evaluate(element);
          });
        });
        indexE = indexE + 1;
      } else if (indexM < 5 && val === "medium") {
        while (ansList.firstChild) {
          ansList.firstChild.remove();
        }
        ques.innerText = quizMedium[t][indexM].q;
        Object.values(quizMedium[t][indexM].opt).forEach((v) => {
          var element = document.createElement("li");
          element.innerText = v;
          element.classList.add("ans");
          ansList.appendChild(element);
          element.addEventListener("click", () => {
            evaluate(element);
          });
        });
        indexM = indexM + 1;
      } else if (indexH < 5 && val === "hard") {
        while (ansList.firstChild) {
          ansList.firstChild.remove();
        }
        ques.innerText = quizHard[t][indexH].q;
        Object.values(quizHard[t][indexH].opt).forEach((v) => {
          var element = document.createElement("li");
          element.innerText = v;
          element.classList.add("ans");
          ansList.appendChild(element);
          element.addEventListener("click", () => {
            evaluate(element);
          });
        });
        indexH = indexH + 1;
      } else {
        (indexE = 1), (indexH = 1), (indexM = 1);
        console.log("cheen tapak dum dum");
        console.log(score);
        while (quiz.firstChild) {
          quiz.firstChild.remove();
        }
        quiz.style.display = "flex";
        quiz.style.flexDirection = "column";
        quiz.style.alignItems = "center";
        quiz.style.justifyContent = "center";
        quiz.style.gap = "0.8rem";
        var cong = document.createElement("h1");
        cong.innerText = `Congrats,your score is  ${score}/5`;
        score = 0;
        cong.classList.add("cong");
        quiz.appendChild(cong);
        var congGif = document.createElement("img");
        congGif.setAttribute("src", "./assets/download.gif");
        congGif.style.width = "12rem";
        congGif.style.height = "12rem";
        quiz.appendChild(congGif);
        var goHome = document.createElement("button");
        goHome.innerText = "Go Home";
        goHome.id = "goHome";
        goHome.style.textAlign = "center";
        goHome.addEventListener("click", () => {
          console.log("home");
          category.classList.remove("d-none");
          while (quiz.firstChild) {
            quiz.firstChild.remove();
          }
          quiz.style.removeProperty("display");
          quiz.style.removeProperty("flexDirection");
          quiz.style.removeProperty("alignItems");
          quiz.style.removeProperty("justifyContent");
          quiz.style.removeProperty("gap");
          quiz.classList.add("d-none");
        });
        quiz.appendChild(goHome);
      }
    });
      ques.innerText = quizEasy[t][0].q;
      Object.values(quizEasy[t][0].opt).forEach((v) => {
        var element = document.createElement("li");
        element.innerText = v;
        element.classList.add("ans");
        ansList.appendChild(element);
        element.addEventListener("click", () => {
          evaluate(element);
        });
      });
      sec=10
      clearInterval(time)
    time=setInterval(()=>{
        timer.innerText=sec;
        sec--;
        if(sec<0){
            clearInterval(time)
            nextBtn.click()
        }
    },1000);
    
    } else {
      let element = document.createElement("a");
      element.setAttribute("href", "./error.html");
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  });
});
var score = 0;
function evaluate(a) {
  console.log(a);
  console.log(ansList.children);
  let cq = ques.innerText.trim();
  let ca = "";
  console.log(cq)
  if (val === "easy") {
    quizEasy[t].forEach((c) => {
        console.log(c.q)
      if (c.q.trim() === cq) {
        ca = c.ans.trim();
      }
    });
  } 
  else if (val === "medium") {
    quizMedium[t].forEach((c) => {
        console.log(c.q)
      if (c.q.trim() === cq) {
        ca = c.ans.trim();
      }
    });
  } 
  else {
    quizHard[t].forEach((c) => {
      if (c.q.trim() === cq) {
        ca = c.ans.trim();
      }
    });
  }
  console.log("ca"+ca)
  console.log("a"+a)
  
  if (a.innerText.trim() !== ca.trim()) {
    a.style.borderColor = "red";
    a.style.background = "lightcoral";
    ansList.childNodes.forEach((cn) => {
      if (cn.nodeType === Node.ELEMENT_NODE) {
        // Only process element nodes
        console.log(cn); // Will log only element nodes, not #text nodes
        if (cn.innerText.trim() === ca) {
          cn.style.borderColor = "green";
          cn.style.background = "lightgreen";
        }
      }
    });
  } else {
    score = score + 1;
    a.style.borderColor = "green";
    a.style.background = "lightgreen";
  }
  console.log(score);
}
