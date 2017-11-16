angular
  .module('outApp')
  .controller('homeController', homeController);

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

homeController.$inject = [];

function homeController(){
  const vm = this;


}
