/**
 * Created by Administrator on 2014/10/28.
 */
angular.module('angualr.echarts', [])
    .factory('$echartsProvider', [function () {
        return {}
    }])
    .directive('echarts', ['$echartsProvider', function ($echartsProvider) {
        return {
            link: function (scope, element, attrs) {
                scope.$watch(attrs.echarts, function () {
                    var option = angular.extend($echartsProvider, scope.$eval(attrs.echarts));
                    scope.echarts = echarts.init(element[0]);
                    scope.echarts.setOption(option);
                })
            }
        };
    }]);