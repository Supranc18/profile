// ********array of quotes*********

let science =["Everything is theoretically impossible, until it is done.","The important thing is not to stop questioning.","The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.","In science, there are no shortcuts to truth.","Science is not only a disciple of reason but also one of romance and passion.","The more I learn, the more I realize how much I don't know.","The best way to predict the future is to create it."]

let motivation =["We cannot solve problems with the kind of thinking we employed when we came up with them.","Learn as if you will live forever, live like you will die tomorrow.","When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.","When you change your thoughts, remember to also change your world.","It is better to fail in originality than to succeed in imitation.","The road to success and the road to failure are almost exactly the same."]


// ******Function to creat random quote*******
function random(randomQuote) {
    return randomQuote[Math.floor(Math.random()*randomQuote.length)]  
}
// console.log (random(motivation))

// ********code to select catogory and then generate random quotes********
document.getElementById('random').addEventListener("click", quotefunction);


function quotefunction() {
    const catogoriesSelect=document.getElementById('categories')
const selectcategory = catogoriesSelect.value;

if(selectcategory==="science"){
 document.getElementById("quote").innerHTML=random(science)
}
else if(selectcategory==="motivation"){
    document.getElementById("quote").innerHTML=random(motivation)
}
else{
    document.getElementById("quote").innerHTML=("Select a Category")
}
}

// *******Increasing and decreasing quotes size *************
document.getElementById('increase').addEventListener("click",increase);
function increase() {
    let size =document.getElementById('quote');
    let currentSize = parseFloat(window.getComputedStyle(size).fontSize);
    size.style.fontSize = (currentSize + 10) + 'px';       
}
document.getElementById('decrease').addEventListener("click",decrease);
function decrease() {
    let size =document.getElementById('quote');
    let currentSize = parseFloat(window.getComputedStyle(size).fontSize);
    size.style.fontSize = (currentSize - 10) + 'px';       
}



// **************getting next and previous quotes***********

let currentQuoteIndex = {
    science: 0,
    motivation: 0
  };
  
  // Function to get the next quote
  function next() {
    const selectCategory = document.getElementById('categories').value;
    const quotes = selectCategory === 'science' ? science : motivation;
    currentQuoteIndex[selectCategory] = (currentQuoteIndex[selectCategory] + 1) % quotes.length;
    document.getElementById('quote').innerHTML = quotes[currentQuoteIndex[selectCategory]];
  }
  
  // Function to get the previous quote
  function previous() {
    const selectCategory = document.getElementById('categories').value;
    const quotes = selectCategory === 'science' ? science : motivation;
    currentQuoteIndex[selectCategory] = (currentQuoteIndex[selectCategory] - 1 + quotes.length) % quotes.length;
    document.getElementById('quote').innerHTML = quotes[currentQuoteIndex[selectCategory]];
  }
  
  
  document.getElementById('next').addEventListener("click", next);
  document.getElementById('previous').addEventListener("click", previous);