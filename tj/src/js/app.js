//创建程序
(function () {
    angular.module('app',['ui.router'])
        .run(['$rootScope',function (root) {
            root.isActive = false
        }]);
    //angular.bootstrap(document,['app']);



})();