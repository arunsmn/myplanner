  
  app.controller('MainCtrl', function() {
  
  });

  app.controller('BudgetCtrl', function($scope, Model, $routeParams, $location) { 
      var showData = JSON.parse(localStorage.getItem('data')); 
      if (showData == ''){
          $scope.flag = true; 
      } 
      else {
        $scope.flag = false;
      }
      console.log($scope.flag);
      var isData = localStorage.getItem('data');
      var id = $scope.itemId = $routeParams.itemId;
      $scope.items = (isData !== null) ? JSON.parse(isData) : localStorage.setItem('data', JSON.stringify(Model.notes()));
      $scope.addBudgetName = function() {
        var name = document.getElementById("name").value;
        var amount = document.getElementById("amount").value;
        $scope.budgetNamesText = ''; //clear the input after adding
        $scope.budgetAmountText = ''; //clear the input after adding
        Model.add({name:name, amount:amount});
        $scope.items = JSON.parse(localStorage.getItem('data')); 
        $scope.flag = false;
      };

      $scope.deleteBudgetName = function(id) {
         console.log("clicked"); 
         $scope.items = JSON.parse(localStorage.getItem('data')); 
         Model.delete(id);
         $scope.items = JSON.parse(localStorage.getItem('data')); 
         var showData = JSON.parse(localStorage.getItem('data')); 
          if (showData == ''){
              $scope.flag = true; 
          } 
          else {
            $scope.flag = false;
          }
      };
  });


  app.controller('ExpenseItemCtrl', function($scope, Model, $routeParams, $location) {

    var id = $scope.itemId = $routeParams.itemId;
    $scope.item = Model.get(id);

    var a = JSON.parse(localStorage.getItem('data'));
    var showData = a[id].expenseItem; 
    if (showData == ''){
      $scope.flag = true; 
    } 
    else {
      $scope.flag = false;
    }
    var isData = a[id].expenseItem;
    $scope.eitems = (isData !== null) ? isData : null;

    $scope.addExpenseName = function() {
      var expenseName = document.getElementById("expenseName").value;
      var expenseAmount = document.getElementById("expenseAmount").value;
      $scope.expenseNameText = ''; //clear the input after adding
      $scope.expenseAmountText = ''; //clear the input after adding
      $scope.expenseTotal = $scope.expenseTotal + a[id].expenseTotal + parseInt(expenseAmount); 
      Model.itemAdd(id, {expenseName:expenseName, expenseAmount:expenseAmount}, $scope.expenseTotal);
      var edata = JSON.parse(localStorage.getItem('data'));
      $scope.eitems = edata[id].expenseItem;
      $scope.expenseBalance = edata[id].amount - edata[id].expenseTotal;  
      // console.log($scope.expenseBalance);
       if ($scope.expenseBalance < 0){
          $('#balAmt').css({ background: "Red" }, "slow");
       }
       else {
          $('#balAmt').css({ background: "#2ecc71" }, "slow");
       }
      $scope.flag = false;
    }  
    
    if ($scope.expenseBalance < 0){
          $('#balAmt').css({ background: "Red" }, "slow");
       }
       else {
          $('#balAmt').css({ background: "#2ecc71" }, "slow");
       }

    $scope.deleteExpenseName = function(id,pid,eTotal) {
       $scope.eitems = JSON.parse(localStorage.getItem('data')); 
       var eAmt = $scope.eitems[pid].expenseItem[id].expenseAmount;       
       $scope.expenseTotal =  $scope.expenseTotal - parseInt(eAmt);
       Model.itemDelete(id,pid,$scope.expenseTotal);
       var edata = JSON.parse(localStorage.getItem('data'));
       $scope.eitems = edata[pid].expenseItem;
       $scope.expenseBalance = $scope.expenseBalance + parseInt(eAmt);  
       if ($scope.expenseBalance < 0){
          $('#balAmt').css({ background: "Red" }, "slow");
       }
       else {
          $('#balAmt').css({ background: "#2ecc71" }, "slow");
       }
       var showData = edata[pid].expenseItem; 
        if (showData == ''){
          $scope.flag = true; 
        } 
        else {
          $scope.flag = false;
        }
    };


    $scope.expenseTotal = a[id].expenseTotal;
    $scope.expenseBalance = a[id].amount - a[id].expenseTotal;

    

  });        

  

       
