'use strict';

/**
 * @ngdoc overview
 * @name expenseApp
 * @description
 * # expenseApp
 *
 * Main module of the application.
 */
 var app = angular.module('expenseApp', ['ngRoute', 'perfect_scrollbar']);
 
  app.config(function($routeProvider){
    $routeProvider
      .when("/",
        {
          templateUrl: "views/main.html",
          controller: "MainCtrl",
          controllerAs: "expenseApp"
        }
      )
      .when("/budget",
        {
          templateUrl: "views/budget.html",
          controller: "BudgetCtrl",
          controllerAs: "expenseApp"
        }
      )
      .when("/budgetForm",
        {
          templateUrl: "views/budget.html",
          controller: "BudgetCtrl",
          controllerAs: "expenseApp"
        }
      )
      .when("/reminder",
        {
          templateUrl: "reminder.html",
          controller: "AppCtrl",
          controllerAs: "app"
        }
      ) 
      .when("/expense_new/:itemId",
        {
          templateUrl: "views/expense_new.html",
          controller: "ExpenseItemCtrl",
          controllerAs: "expenseApp"
        }
      )   
      .when("/:itemId/expenseForm",
        {
          templateUrl: "views/expense_new.html",
          controller: "ExpenseItemCtrl",
          controllerAs: "expenseApp"
        }
      )   
  });

  
