const button = document.getElementById("countButton");
button.addEventListener("click", function (){

let typedText = document.getElementById("textInput").value;
typedText = typedText.toLowerCase(); 
typedText = typedText.replace(/[^a-z'\s]+/g, "");  

const letterCountList = contarLetras(typedText);
botarResultado(letterCountList);

const wordCountList = contarPalavras(typedText);
botarResultadoPalavras(wordCountList);


}) 

function contarLetras (text) {
      const letterCounts = {};
            
      for (let i = 0; i < text.length; i++) {
         let currentLetter = text[i];   
        
         if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }
      }  
      return letterCounts;
    }
   
function botarResultado (contagem) {
      for (let letter in contagem) { 
         const span = document.createElement("span"); 
         const textContent = `"${letter}": ${contagem[letter]},`;
         span.innerText = textContent; 
         const letters = document.getElementById("lettersDiv");
         letters.appendChild(span); 
      }
   }   
 
function contarPalavras(palavra) {

   const wordCounts = {};
   let  wordsSplit = palavra.split(" ");
   

   for (let i = 0; i < wordsSplit.length; i++) {    
      let words = wordsSplit[i];
   if (wordCounts[words] === undefined) {
      wordCounts[words] = 1; 
   } else { 
      wordCounts[words]++; 
   }
  
}
return wordCounts;
}

function botarResultadoPalavras(todaspalavras){
   for (let word in todaspalavras) { 
      const span = document.createElement("span"); 
      const textContent = `"${word}": ${todaspalavras[word]},`;
      span.innerText = textContent; 
      const letters = document.getElementById("wordsDiv");
      letters.appendChild(span); 
   }
   
}
 

   
  


