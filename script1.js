const quiz = [

    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System"
        ],
        answer: "Programming Language"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "float",
            "char"
        ],
        answer: "var"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "=="
        ],
        answer: "//"
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
        ],
        answer: "Netscape"
    },

    {
        question: "Which method displays output in the browser console?",
        options: [
            "console.log()",
            "document.write()",
            "alert()",
            "print()"
        ],
        answer: "console.log()"
    },

    {
        question: "Which operator is used for strict equality?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which loop is guaranteed to execute at least one time?",
        options: [
            "for",
            "while",
            "do...while",
            "foreach"
        ],
        answer: "do...while"
    },

    {
        question: "Which function converts a string into an integer?",
        options: [
            "parseInt()",
            "parseFloat()",
            "Number()",
            "toString()"
        ],
        answer: "parseInt()"
    },

    {
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
    },

    {
        question: "Which method removes the last element from an array?",
        options: [
            "pop()",
            "push()",
            "shift()",
            "slice()"
        ],
        answer: "pop()"
    }

];

let index = 0;


function getData(index) {
    document.querySelector(".questionlist").innerHTML = `
                    <article>
                <h2>${quiz[index].question}</h2>
            </article>
            <main>
                <aside>
                    <input type="radio" name="answer">
                    <label>${quiz[index].options[0]}</label>
                </aside>

                <aside>
                    <input type="radio" name="answer">
                    <label>${quiz[index].options[1]}</label>
                </aside>

                <aside>
                console.log
                    <input type="radio" name="answer">
                    <label>${quiz[index].options[2]}</label>
                </aside>

                <aside>
                    <input type="radio" name="answer">
                    <label>${quiz[index].options[3]}</label>
                </aside>
            </main> 
    `;
}
getData(index);

document.querySelector(".previous").style.display = "none";

document.querySelector(".next").onclick = function () {

    if (index == quiz.length - 1) {
        document.querySelector(".next").disabled = true;
        return;
    }

    index++;

    if (index == 1) {
        document.querySelector(".previous").style.display = "block";
    }

    document.querySelector(".previous").disabled = false;

    getData(index);
}

document.querySelector(".previous").onclick = function () {

    if (index == 0) {
        document.querySelector(".previous").disabled = true;
        return;
    }

    index--;

    document.querySelector(".next").disabled = false;

    if (index == 0) {
        document.querySelector(".previous").disabled = true;
    }
    else {
        document.querySelector(".previous").disabled = false;
    }

    getData(index);
}