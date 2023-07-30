const questions = [
    {
        'que': "Who is the GOATED Sorcerer of all times?",
        'a' : "Gojo",
        'b' : "Sukuna",
        'c' : "Megumi",
        'correct': 'a'
    },
    {
        'que': "Which of the following does not have cursed Energy?",
        'a' : "Megumi",
        'b' : "Toji",
        'c' : "Gojo",
        'correct': 'b'
    },
    {
        'que': "Which of the following is the signature move of Satoru?",
        'a' : "Ten Shadows technique",
        'b' : "Malevolent Shrine",
        'c' : "Hollow Purple",
        'correct': 'c'
    }
]
let index= 0;
let total = questions.length;
let right = 0, wrong = 0; 
const QueBox = document.getElementById("Quebox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    reset();
    if (index == total){
        return endQuiz();
    }
    const data= questions[index]
    // console.log(data)
    QueBox.innerText = ` ${index+1}) ${data.que} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;   
}

const submitQuiz = () => {
    const data = questions[index];
    const ans= getAnswer()
    if (ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                 answer= input.value;

            }
        }
    )
    return answer;
}


const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h2> Thank you </h2>
    <h2> ${right} / ${total} are correct. </h2>
    `
}

// Initial Call
loadQuestion();