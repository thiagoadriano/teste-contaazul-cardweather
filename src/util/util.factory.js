(function() {
    'use strict';

    angular
        .module('weathernow')
        .factory('Util', Util);

    /* @ngInject */
    function Util(TIME_REFRESH) {

        return {
            captalize: captalize,
            mapMetrics: mapMetrics,
            nextUpdate: nextUpdate,
            timeNow: timeNow
        };

        function _ajustNumbersTime(time) {
            var hoursIndicate = time.slice(-3),
                timeGroup = time.replace(/[^0-9:]/g, '').split(':');
            for (var i = 0, total = timeGroup.length; i < total; i++) {
                var item = Number(timeGroup[i]);
                if (item < 10) {
                    timeGroup[i] = '0' + item.toString();
                }
            }
            return timeGroup.join(':') + hoursIndicate;
        }

        function _cap(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }

        function captalize(string) {
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
        }

        function mapMetrics(data) {
            return {
                humidity: Math.floor(data.main.humidity),
                pressure: Math.floor(data.main.pressure),
                temperature: Math.floor(data.main.temp)
            };
        }

        function nextUpdate(date) {
            var minutes = (TIME_REFRESH / 1000) / 60,
                _date = date || new Date();
            _date.setMinutes(date.getMinutes() + minutes);
            return _date.getTime();
        }

        function timeNow(date) {
            var time = date || new Date(),
                timeFormated = time.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
            return _ajustNumbersTime(timeFormated);
        }
    }
})();
