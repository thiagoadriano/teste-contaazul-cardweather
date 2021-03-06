(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('cardWeather', CardWeather());

    function CardWeather() {
        return {
            bindings: {
                city: '@',
                country: '@',
                visibleMetrics: '<'
            },
            controller: _controller,
            templateUrl: 'components/card-weather/card-weather.component.html'
        };
    }

    /* @ngInject */
    function _controller(WeatherService, Util, StorageService, moment) {
        var vm = this,
            cityQuery = null,
            timer = null;

        vm.showError = false;
        vm.showLoad = false;
        vm.metrics = {
            humidity: 0,
            pressure: 0,
            temperature: 0,
            lastUpdate: '00:00:00 AM'
        };

        vm.$onInit = onInit;
        vm.reload = reload;

        function _checkMetricsInit() {
            var metrics = StorageService.get(vm.city + '_' + vm.country),
                update = null,
                now = null;

            if (!metrics) {
                _getData();
                return;
            }
            
            update = moment(metrics.nextUpdate);
            now = moment();

            if (update.isSameOrAfter(now)) {
                var timerNext = Util.getNextRefresh(update, now);
                vm.metrics = metrics;
                Util.timerRefresh(timer, _getData, timerNext);

            } else {
                _getData();
            }
        }

        function _errorGetData(error) {
            if (error) {
                console.error(error);
            }
            vm.showLoad = false;
            vm.showError = true;
        }

        function _getData() {
            vm.showLoad = true;
            WeatherService.getMetrics(cityQuery)
                .then(_successGetData)
                .catch(_errorGetData);
        }

        function _successGetData(data) {
            if (!data.list.length) {
                return _error();
            }

            var date = moment();
            vm.metrics = Util.mapMetrics(data.list[0]);
            vm.metrics.lastUpdate = Util.timeNow(date);
            vm.metrics.nextUpdate = Util.nextUpdate(date);
            StorageService.set(vm.city + '_' + vm.country, vm.metrics);
            vm.showLoad = false;
            Util.timerRefresh(timer, _getData);
        }

        function onInit() {
            vm.city = Util.Converter.textCaptalize(vm.city);
            vm.country = vm.country.toUpperCase();
            cityQuery = vm.city + ',' + vm.country;
            _checkMetricsInit();
        }

        function reload() {
            vm.showError = false;
            _getData();
        }
    }

})();
