angular.module('starter.services', [])

    .factory('$superCache', ['$cacheFactory', function($cacheFactory) {
        return $cacheFactory('super-cache');
        }])





;