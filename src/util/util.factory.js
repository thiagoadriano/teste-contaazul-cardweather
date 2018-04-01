(function() {
    'use strict';

    angular
        .module('weathernow')
        .factory('Util', Util);

    /* @ngInject */
    function Util(MINUTES_TIME_REFRESH, moment, $timeout) {
        var Converter = {};

        function _cap(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }

        Converter.minutesToMilliseconds = function(minutes) {
            if (!minutes || !angular.isNumber(minutes)) {
                return null;
            }
            return (minutes * 60) * 1000;
        };

        Converter.millisecondToMinutes = function(milliseconds) {
            if (!milliseconds || !angular.isNumber(milliseconds)) {
                return null;
            }
            return (milliseconds / 1000) / 60;
        };

        Converter.secondsToMillisecond = function(seconds) {
            if (!seconds || !angular.isNumber(seconds)) {
                return null;
            }
            return seconds * 1000;
        };
        
        Converter.textCaptalize = function(string) {
            if(/\s/g.test(string)) {
                var _strArr = string.split(' ');
                for(var i = 0, t = _strArr.length; i < t; i++) {
                    if(_strArr[i].length > 2) {
                        _strArr[i] = _cap(_strArr[i]);
                    }else {
                        _strArr[i] = _strArr[i].toLowerCase();
                    }
                }
                return _strArr.join(' ');

            } else {
                return _cap(string);
            }
        };

        function getNextRefresh(timerMetric, now) {
            var diff = timerMetric.minutes() - now.minutes(),
                timeConverter = Converter.minutesToMilliseconds(diff);

            if (!diff) {
                diff = timerMetric.seconds() - now.seconds();
                timeConverter = Converter.secondsToMillisecond(diff);
            }
            
            return timeConverter;
        }

        function mapMetrics(data) {
            if (!data || !data.main || (data.main && angular.isUndefined(data.main.temp))) {
                return {
                    humidity: 0,
                    pressure: 0,
                    temperature: 0
                };
            }

            return {
                humidity: data.main.humidity ? Math.floor(data.main.humidity) : 0,
                pressure: data.main.pressure ? Math.floor(data.main.pressure) : 0,
                temperature: Math.floor(data.main.temp)
            };
        }

        function nextUpdate(date) {
            var _date = date || moment();
            _date.add(MINUTES_TIME_REFRESH, 'm');
            return _date.valueOf();
        }

        function timeNow(date) {
            var time = date || moment();
            return time.format('hh:mm:ss A');
        }

        function timerRefresh(timer, callback, timeReload) {
            if (timer) {
                $timeout.cancel(timer);
            }
            var Minutes_Miliseconds = Converter.minutesToMilliseconds(MINUTES_TIME_REFRESH),
                _time = timeReload || Minutes_Miliseconds;
            timer = $timeout(callback, _time);
        }

        return {
            Converter: Converter,
            getNextRefresh: getNextRefresh,
            mapMetrics: mapMetrics,
            nextUpdate: nextUpdate,
            timeNow: timeNow,
            timerRefresh: timerRefresh
        };
    }
})();
