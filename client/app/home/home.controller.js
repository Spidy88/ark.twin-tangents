class HomeController {
    constructor(moment) {
        'ngInject';

        this.updates = [
            {
                id: 2,
                title: 'Dune Buggy Races (Delayed 1 hour)',
                body: 'To kick off this new map, we\'ll have Dune Buggy races this Saturday, May 28th at 12pm PST. We\'ll have a couple practice rounds followed by waves of 5 racers. First place wins a Box of Chocolates. Second place wins a Helmet Skin of their choice. Third place wins a potion of their choice.',
                createdAt: 1464332400
            },
            {
                id: 1,
                title: 'New Map: The Center',
                body: 'The community has spoken, and it was almost a unanimous yes for a server wipe and map change. Same rules, same settings, just a new map. You get to keep your levels (no cap) and anyone who has or does contribute to the server can get a one-time, free, saddled Ptera (lvl 75) or Argent (lvl 15) as a thank you for keeping the server going. Ping Spidy to claim yours!',
                createdAt: 1464159600
            }
        ];

        let now = moment();
        for( let i = 0; i < this.updates.length; i++ ) {
            let when = moment.unix(this.updates[i].createdAt);

            this.updates[i].old = Math.abs(now.diff(when, 'days')) > 7;
        }
    }
}

export default HomeController;