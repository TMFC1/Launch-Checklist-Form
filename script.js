// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let button = document.querySelector("#formSubmit");
   button.onclick = function(event) {
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required!");
         event.preventDefault();
         return;
      }
      setLaunchStatus(pilotName, copilotName, fuelLevel, cargoMass)
   };
});
var setLaunchStatus = function(pilotName, copilotName, fuelLevel, cargoMass){
   var systemCheck = `
   <h2 id="launchStatus" style="color: ${fuelLevel < 10000 || cargoMass > 10000 ? 'red' : 'green'};">${fuelLevel < 10000 || cargoMass > 10000 ? 'Shuttle not ready for launch.' : 'Shuttle is ready for launch.'}</h2>
   <div  id="faultyItems">
   <ol>
      <li id="pilotStatus">Pilot ${pilotName} Ready</li>
      <li id="copilotStatus">Co-pilot ${copilotName} Ready</li>
      <li id="fuelStatus">${fuelLevel < 10000 ? 'Fuel level too low for launch.' : 'Fuel level high enough for launch'}</li>
      <li id="cargoMass">${cargoMass > 10000 ? 'There is too much mass for the shuttle to take off.' : 'Cargo mass low enough for launch'}</li>
   </ol>
   </div>
   `;
   document.querySelector("#launchStatusCheck").innerHTML=systemCheck
}