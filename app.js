var animation = angular.module('AnimationApp', ['ngAnimate']);

animation.controller('AnimationController', function($scope, $timeout, $compile) {

	$scope.animations = [{
		name: 'Fade',
		type: 'Enter/Leave',
		animations: [{
			name: 'fade',
			open: 'false'
		},{
			name: 'fade-right',
			open: 'false'
		},{
			name: 'fade-left',
			open: 'false'
		},{
			name: 'fade-up',
			open: 'false'
		},{
			name: 'fade-down',
			open: 'false'
		},{
			name: 'scale-fade-up',
			open: 'false'
		},{
			name: 'scale-fade-down',
			open: 'false'
		}]
	},{
		name: 'Bounce',
		type: 'Enter/Leave',
		animations: [{
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
	},{
		name: 'Rotate',
		type: 'Enter/Leave',
		animations: [{
			name: 'rotate',
			open: 'false'
		},{
			name: 'rotate-down-left',
			open: 'false'
		},{
			name: 'rotate-down-right',
			open: 'false'
		},{
			name: 'rotate-up-left',
			open: 'false'
		},{
			name: 'rotate-up-right',
			open: 'false'
		}]
	}];

	$scope.modalOpen = false;
	$scope.animateIntro = false;
	$scope.animateIntroComplete = false;
	$scope.animateTitleComplete = false;

	$scope.unsetModals = function() {
		angular.forEach($scope.animations, function(animations) {
			angular.forEach(animations.animations, function (animation) {
				animation.open = false;
				$scope[animation.name] = false;
			});

		});

		$scope.modalOpen = false;
	};

	$scope.$watch('animations', function(newValue) {
		angular.forEach($scope.animations, function(animations) {
			angular.forEach(animations.animations, function (animation, index) {
				if (animation.open == true) {
					$scope[animation.name] = true;
					$scope.modalOpen = true;
				}
			});
		});
	}, true);


	$scope.isActive = function(value) {
		return $scope[value];
	};

	$scope.unsetModals();

	$timeout(function() {
		$scope.animateIntro = true;
	});

	$timeout(function() {
		$scope.animateIntroComplete = true;
	}, 1700);

	$timeout(function() {
		$scope.animateTitleComplete = true;
	}, 2700);

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