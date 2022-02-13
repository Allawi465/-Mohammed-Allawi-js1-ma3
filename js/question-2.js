const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=06afb03635514b43ab0653af92e562b2";

const infoContainer = document.querySelector(".results");

async function getInfo() {

   try {
    const response = await fetch(url);

    const data = await response.json();

    const facts = data.results;

    console.log(facts);

    infoContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {

       if (i === 8) {
           break;
       }

       infoContainer.innerHTML += `<div class="box">
                                        <h4>${facts[i].name}</h4>
                                        <p>Rating: ${facts[i].rating}</p>
                                        <p>Tags: ${facts.length}</p>
                                      </div>`;
   }

} catch (error){
       console.log(error);
       resultsContainer.innerHTML = "An error occurred when calling the API";
   }
};

getInfo();