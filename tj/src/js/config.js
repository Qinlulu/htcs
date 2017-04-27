angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        //设置默认路由
        $urlRouterProvider.otherwise('/public');

        //配置路由
        $stateProvider
            .state({
                name:'simplePlatform',
                url:'/simple',
                params:{
                    id:123,
                    test:'abc'
                },
                templateUrl:function ($stateParams) {
                    console.log($stateParams);
                    return 'pages/simpleSidebar.html?abc='+$stateParams.id
                },
                controller:function ($scope,$rootScope) {

                }
            })
            .state({
                name:'gridPlatform',
                url:'/grid',
                templateUrl:'pages/gridSidebar.html'
            })
            .state({
                name:'publicPlatform',
                url:'/public',
                templateUrl:'pages/publicSidebar.html'
            })
            .state({
                name:'publicPlatform.communityBirthdayParty',
                url:'/birthdayparty',
                templateUrl:'pages/birthdayparty.html',
                controller: ['$scope','$rootScope',function (scope,root) {

                }]
            })
            .state({
                name:'publicPlatform.communityBirthdayParty.infoManage',
                url:'/infomanage',
                templateUrl:'pages/infoManage.html',
                controller: ['$scope',function (scope) {

                }]
            })
            .state({
                name:'publicPlatform.communityBirthdayParty.activityManage',
                url:'/activitymanage',
                templateUrl:'pages/activityManage.html',
                controller: ['$scope','$rootScope',function (scope,root) {

                }]
            })
            .state({
                name:'publicPlatform.communityBirthdayParty.activityPage',
                url:'/activitypage?id',
                templateUrl:'pages/activityTemplate.html',
                controller: ['$scope','$rootScope',function (scope,root) {

                }]
            })
            .state({
                name:'publicPlatform.communityOtherParty',
                url:'/otherparty',
                templateUrl:'pages/otherparty.html'
            })
            .state({
                name:'publicPlatform.communityMembersParty',
                url:'/membersparty',
                templateUrl:'pages/membersparty.html'
            })
    });