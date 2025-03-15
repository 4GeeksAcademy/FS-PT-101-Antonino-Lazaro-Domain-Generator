import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ['the', 'our', 'my', 'your', 'her', 'his', 'its', 'their', 'this', 'that'];
  const adj = ['great', 'big', 'crazy', 'fast', 'tiny', 'shiny', 'bright', 'fancy', 'lazy', 'strong', 'adorable'];
  const noun = ['jogger', 'racoon', 'dog', 'cat', 'turtle', 'unicorn', 'dragon', 'rabbit', 'bear', 'wizard', 'ninja', 'pirate'];
  const extensions = ['.com', '.es', '.net', '.org', '.io', '.edu', '.gov', '.info', '.biz', '.us'];
  let completedArrayOfDomains = [];

  let generateDomain=(pronoun,adj,noun)=>{
    let arrayOfDomains = [];
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
  let appendDotCom = (value) => {
    return `${value}${extensions[Math.floor(Math.random() * extensions.length)]}`;
  };
  completedArrayOfDomains = generateDomain(pronoun,adj,noun).map(appendDotCom);
  console.log(completedArrayOfDomains);
};
