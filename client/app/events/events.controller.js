class EventsController {
    constructor($interval, $scope, moment) {
        'ngInject';

        this.events = [
            {
                id: 1,
                name: 'Pig Races',
                starts: 1464202800,
                ends: 1464469200
            },
            {
                id: 2,
                name: 'Gathering Boost (3x)',
                starts: 1464800400,
                ends: 1464886800
            },
            {
                id: 3,
                name: 'Mega Summon',
                starts: 1465012800,
                ends: 1465016400
            },
            {
                id: 5,
                name: 'Galli Lava Race',
                starts: 1465678800,
                ends: 1465682400
            }
        ];

        let timer = $interval(() => {}, 60000);
        $scope.$on('$destroy', () => $interval.cancel(timer));
    }

    isOver(event) {
        return moment().isAfter(moment.unix(event.ends));
    }

    isActive(event) {
        return moment().isBetween(moment.unix(event.starts), moment.unix(event.ends));
    }

    duration(event) {
        let duration = moment.duration(event.ends - event.starts, 's');
        let hours = duration.hours();
        let days = duration.days();

        return days ? `${days}d` : `${hours}h`;
    }
}

export default EventsController;