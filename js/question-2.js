const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=06afb03635514b43ab0653af92e562b2";

const resultsContainer = document.querySelector(".results");

async function getInfo(key) {
   try {
    const response = await fetch(url);

    const data = await response.json();

    const facts = data.results;

    console.log(facts);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {

       if (i === 8) {
           break;
       }

       resultsContainer.innerHTML += `<div class="result">
                                       ${facts[i].name}
                                       ${facts[i].rating}
                                       </div>`;
   }
   
   } catch (error){
       console.log(error);
       resultsContainer.innerHTML = "An error occurred when calling the API";
   }
};

getInfo();