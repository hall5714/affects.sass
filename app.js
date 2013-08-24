var animation = angular.module('AnimationApp', ['ngAnimate']);

animation.controller('AnimationController', function($scope, $timeout, $compile) {

	$scope.animationsFade = [{
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
	}];

	$scope.animationsRotate = [{
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
	}];	

	$scope.modalOpen = false;
	$scope.animateIntro = false;
	$scope.animateIntroComplete = false;
	$scope.animateTitleComplete = false;

	$scope.unsetModals = function() {
		angular.forEach($scope.animationsFade, function(anim) {
			anim.open = false;
			$scope[anim.name] = false;
		});

		angular.forEach($scope.animationsBounce, function(anim) {
			anim.open = false;
			$scope[anim.name] = false;
		});

		angular.forEach($scope.animationsRotate, function(anim) {
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

	$scope.$watch('animationsRotate', function(newValue) {
		angular.forEach($scope.animationsRotate, function(anim) {
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
		$scope.animateIntro = true;
	});

	$timeout(function() {
		$scope.animateIntroComplete = true;
	}, 1500);

	$timeout(function() {
		$scope.animateTitleComplete = true;
	}, 2500);

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