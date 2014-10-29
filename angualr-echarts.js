/**
 * Created by Administrator on 2014/10/28.
 */
angular.module('ngEcharts', [])
    .factory('$echartsConfig', [function () {
        return {}
    }])
    //.factory('$echartsInstance', [function () {
    //    var instance = {};
    //    instance.getById = function (id) {
    //        return instance[id];
    //    };
    //    return instance;
    //}])
    .directive('echarts', ['$echartsConfig', function ($echartsConfig) {
        return {
            link: function (scope, element, attrs) {
                if (!scope.$echartsInstance)scope.$echartsInstance = {};
                scope.$watch(attrs.echarts, function () {
                    var option = angular.extend($echartsConfig, scope.$eval(attrs.echarts));
                    if (option.id) {
                        scope.$echartsInstance[option.id] = echarts.init(element[0]);
                        scope.$echartsInstance[option.id].setOption(option);
                    } else {
                        scope.$echartsInstance = echarts.init(element[0]);
                        scope.$echartsInstance.setOption(option);
                    }
                })
            }
        };
    }]);