angular
.module('MusicUI')
.directive('ngLongPress', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $elm, $attrs) {
            $elm.bind('touchstart', function (evt) {
                $scope.longPress = true;
                $timeout(function () {
                    if ($scope.longPress) {
                        $scope.$apply(function () {
                            $scope.$eval($attrs.ngLongPress)
                        });
                    }
                }, 600);
            });
            $elm.bind('touchend', function (evt) {
                $scope.longPress = false;
            });
        }
    }
}]);