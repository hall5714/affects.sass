var animation = angular.module('AnimationApp', ['ngAnimate']);

animation.controller('AnimationController', function($scope, $timeout, $compile) {

	$scope.animationsFade = [{
		name: 'fade',
		open: 'false'
	},{
		name: 'scale-up-fade',
		open: 'false'
	},{
		name: 'scale-down-fade',
		open: 'false'
	},{
		name: 'slide-right-fade',
		open: 'false'
	},{
		name: 'slide-left-fade',
		open: 'false'
	},{
		name: 'slide-up-fade',
		open: 'false'
	},{
		name: 'slide-down-fade',
		open: 'false'
	}];

	$scope.animationsBounce = [{
		name: 'bounce-down',
		open: 'false'
	},{
		name: 'bounce-up',
		open: 'false'
	},{
		name: 'bounce-right',
		open: 'false'
	},{
		name: 'bounce-left',
		open: 'false'
	}]

	$scope.modalOpen = false;
	$scope.animateTitle = false;

	$scope.unsetModals = function() {
		angular.forEach($scope.animationsFade, function(anim) {
			anim.open = false;
			$scope[anim.name] = false;
		});

		angular.forEach($scope.animationsBounce, function(anim) {
			anim.open = false;
			$scope[anim.name] = false;
		});

		$scope.modalOpen = false;
	};

	$scope.$watch('animationsFade', function(newValue) {
		angular.forEach($scope.animationsFade, function(anim) {
			if (anim.open == true) {
				$scope[anim.name] = true;
				$scope.modalOpen = true;
			}
		});
	}, true);

	$scope.$watch('animationsBounce', function(newValue) {
		angular.forEach($scope.animationsBounce, function(anim) {
			if (anim.open == true) {
				$scope[anim.name] = true;
				$scope.modalOpen = true;
			}
		});
	}, true);

	$scope.isActive = function(value) {
		return $scope[value];
	};

	$scope.unsetModals();

	$timeout(function() {
		$scope.animateTitle = true;
	});

});

animation.directive('interModal', function(){
	return {
		restrict: 'EA',
		// This HTML will replace the zippy directive.
		replace: true,
		template: '<span><h2>modal</h2><p class="lead">A nifty modal body.</p><button class="button small" ng-click="unsetModals()">Close</button><a class="close-reveal-modal" ng-click="unsetModals()">&#215;</a></span>',
		link: function(scope, element, attrs) {
			scope.unsetModals = function() {
				scope.$parent.unsetModals();
			};
		}
	}
 });