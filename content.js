console.log("Data Extraction Plugin");

// payload.carsList = $(".srp-list-container").text();
// console.log(payload);
// var cars = []
// $( ".srp-list-item" ).each(function() {
//   // console.log( id + ": " + $( this ).text() );
//   var payload = {};
//   payload.carsName = $(".listing-header", this).text();
//   payload.carsPrice = $(".srp-list-item-price", this).text();
//   cars.push(payload);
//
// });
//
// console.log(cars);

var payloadForCars = {};

payloadForCars.CarName = $(".vehicle-title").text();
payloadForCars.CarMilage = $(".vehicle-header .vehicle-title-mileage").first().text();
// payloadForCars.carPrice = $(".disclaimer-vehicle-price").text();
// payloadForCars.carInfo = $(".infoTable-table").text();
// payloadForCars.carLocation = $(".back-to-srp-location").text();
payloadForCars.SellerDescription = $(".sellerDescription-body").text();
payloadForCars.DealerName = $(".vdp-container .dealer-name").text();
payloadForCars.DealerPhone = $(".vdp-container .dealer-phone .test-auto-dealer-phone").first().text();
payloadForCars.DealerAddress = $(".vdp-container #_automation_test_dealerLocationAddress").text();


console.log(payloadForCars);

var info = []
$(".infoTable-table tr").each(function() {
    var payloadOfInfo = {}
    payloadOfInfo['key'] = $(this).find("th").text();
    payloadOfInfo['value'] = $(this).find("td").text();
    info.push(payloadOfInfo);

});
console.log(info);
