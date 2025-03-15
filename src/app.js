import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ['their', 'this', 'that','antonino'];
  const adj = ['lazy', 'strong', 'lazaro','adorable'];
  const noun = ['wizard', 'ninja','esuncrack', 'pirate'];
  const extensions = ['.com','.edu', '.gov', '.info', '.biz', '.us'];

  const generateDomain=(pronoun,adj,noun)=>{
    const arrayOfDomains = [];
    let line;
     for (let i = 0;i<pronoun.length;i++){
       for (let j = 0;j<adj.length;j++){
         for (let k = 0;k<noun.length;k++){
           line = pronoun[i]+adj[j]+noun[k];
           if (arrayOfDomains.includes(line)){
           }else arrayOfDomains.push(line);
         }
       }
     }
    return arrayOfDomains;
  }
  const appendDotCom = (value) => {
    return `<li class="list-group-item bg-light">${value}${extensions[Math.floor(Math.random() * extensions.length)]}</li>`;
  };
  const completedArrayOfDomains = generateDomain(pronoun,adj,noun).map(appendDotCom);
  console.log(completedArrayOfDomains);
  document.getElementById("domaintext").innerHTML = completedArrayOfDomains.join("");
};
