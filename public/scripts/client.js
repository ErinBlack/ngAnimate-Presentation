console.log('js');


var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('NpAnimate', function(){
  console.log('NpAnimate Entered');
  var vm = this;

  vm.items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
  ];
  vm.itemsShown = [ ];

  vm.itemCount = 0;

  vm.hideShow = true;

  vm.hideShowToggle = function(){
    console.log('entered hide show', vm.hideShow);
    vm.hideShow = !vm.hideShow;
  };


  vm.addItems = function(){
    if (vm.itemCount > vm.items.length-1) {
      alert('Out of items to Display');
    }
    vm.itemsShown.push(vm.items[vm.itemCount]);
    vm.itemCount ++;
  };

  vm.removeItems = function(){
    if (vm.itemCount < 1) {
      alert('Out of items to Remove');
    }
    vm.itemsShown.pop(vm.items[vm.itemCount]);
    vm.itemCount --;
  };

}); //end controller
