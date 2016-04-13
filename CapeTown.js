exports.capeTownTaxis = function(){
  var capeTownTaxis = [
    {
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Bellville",
      "Fare": 13,
      "Trips": 9
    },
    {
      "RegistrationNumber": "CA 234 567",
      "Route": "Cape Town - Gugulethu",
      "Fare": 12,
      "Trips": 11
    },
    {
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Gugulethu",
      "Fare": 12,
      "Trips": 11
    },
    {
      "RegistrationNumber": "CA 345 678",
      "Route": "Cape Town - Langa",
      "Fare": 8,
      "Trips": 13
    },
    {
      "RegistrationNumber": "CA 345 678",
      "Route": "Cape Town - Cape Town",
      "Fare": 13,
      "Trips": 10
    }
  ];
  return capeTownTaxis;
};
exports.totalTrips = function(capeTownTaxis){
var trips = [];
var total = 0;
for( var trip in capeTownTaxis){
  var amountTrip = capeTownTaxis[trip].Trips;
  trips.push(amountTrip);
}
for(var x in trips){
  total += trips[x];
}
return total;
};
exports.lowestTrips = function(capeTownTaxis){
var trips = [];
  for(var trip in capeTownTaxis){
    var amountTrip = capeTownTaxis[trip].Trips;
    trips.push(amountTrip);
  }
  var lowestTrips = trips[0];
  console.log(lowestTrips);
  return lowestTrips;
};
