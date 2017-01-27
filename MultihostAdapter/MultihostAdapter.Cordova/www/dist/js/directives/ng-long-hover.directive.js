angular
.module('MusicUI')
.directive('ngLongHover', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $elm, $attrs) {
            $elm.bind('mouseenter', function (evt) {
                $scope.longHover = true;
                $timeout(function () {
                    if ($scope.longHover) {
                        $scope.$apply(function () {
                            $scope.$eval($attrs.ngLongHover)
                        });
                    }
                }, 1500);
            });
            $elm.bind('mouseleave', function (evt) {
                $scope.longHover = false;
            });
        }
    }
}]);