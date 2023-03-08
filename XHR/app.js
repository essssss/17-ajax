const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
   const data = JSON.parse(this.responseText);
   for (let planet of data.results) {
      console.log(planet.name);
   }
});
firstReq.addEventListener('error', () => {
   console.log('ERROR');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('SENDING REQUEST..');
//This is bad. If we want to run another request wed have to actually NEST it inside the load event listener.
