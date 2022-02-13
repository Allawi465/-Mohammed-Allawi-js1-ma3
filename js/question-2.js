const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=06afb03635514b43ab0653af92e562b2";

const infoContainer = document.querySelector(".results");

async function getInfo() {

   try {

   const response = await fetch(url);

   const data = await response.json();

   const info = data.results;

   infoContainer.innerHTML = "";

   for (let i = 0; i < info.length; i++) {

      const name = info[i].name; 
      const rating = info[i].rating; 
      const tags = info[i].tags; 

      if (i === 8) {
         break;
      }

      infoContainer.innerHTML += `<div class="box">
                                     <h4>${name}</h4>
                                     <p>Rating: ${rating}</p>
                                     <p>Tags: ${tags.length}</p>
                                  </div>`;
   }

} catch (error){
       infoContainer.innerHTML = "An error occurred when calling the API";
   }
};

getInfo();