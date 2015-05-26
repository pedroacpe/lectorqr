angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('escanearCtrl', function($scope, $stateParams, $cordovaBarcodeScanner, $superCache, $state){

$scope.escanear = function (){

console.log('escaneando');

  $cordovaBarcodeScanner
    .scan()
    .then(function(barcodeData) {
        alert("Escaneado con éxito")
        alert(JSON.stringify(barcodeData)); 


        // it('should behave like a cache', inject(function($superCache) {
        //   $superCache.put('resumenqr', $scope.barcodeData);
  
        //   }));

        var datosQR = {};
        datosQR = barcodeData;
        console.log(datosQR);

        $superCache.put('resumenqrCache',datosQR);
        console.log($superCache.info());
        



        $state.go('app.resumenqr');
        // Success! Barcode data is here
    }, function(error) {
        // An error occurred
        alert("Hubo algún error")
    });
}

})

.controller('AboutCtrl', function($scope) {
  
})


.controller('resumenQRCtrl', function($scope, $superCache, $state) {
  
  console.log('resumenQRCtrl');

  $scope.resumenqrCache = $superCache.get('resumenqrCache');
  alert(JSON.stringify($scope.resumenqrCache));
  console.log($superCache.info());
  //console.log(resumenqrCache);

})



;
