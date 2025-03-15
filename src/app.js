import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const pronoun = ['their', 'this', 'that', 'antonino'];
  const adj = ['lazy', 'strong', 'lazaro', 'adorable'];
  const noun = ['wizard', 'ninja', 'esuncrack', 'pirate'];

  const generateDomain = (pronoun, adj, noun) => {
    const arrayOfDomains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          arrayOfDomains.push(pronoun[i] + adj[j] + noun[k]);
        }
      }
    }
    return arrayOfDomains;
  };

  // Transforma el string insertando un punto antes de los dos últimos caracteres.
  const transformarString = str => str.slice(0, -2) + '.' + str.slice(-2);

  // Encadenamos los métodos para transformar, ordenar por dominio (lo que va después del punto)
  // y finalmente envolver en una etiqueta <li> para asignar al HTML.
  const domainsOrdered = generateDomain(pronoun, adj, noun)
    .map(transformarString)
    .sort((a, b) => a.split('.').pop().localeCompare(b.split('.').pop()))
    .map(value => `<li class="list-group-item bg-light">${value}</li>`);

  document.getElementById("domaintext").innerHTML = domainsOrdered.join("");
};
