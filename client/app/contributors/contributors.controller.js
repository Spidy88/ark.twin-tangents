export default class ContributorsController {
    constructor() {
        'ngInject';

        this.contributors = [
            {
                id: 76561198042328698,
                ark_player_name: 'Kagonos',
                tribe_name: 'The Pathfinders',
                monthly_donation_amount: 10,
                total_donation_amount: 30
            },
            {
                id: 2,
                ark_player_name: 'Unknown (Erick)',
                tribe_name: 'Unknown',
                monthly_donation_amount: 10,
                total_donation_amount: 30
            },
            {
                id: 3,
                ark_player_name: 'Unknown (Andy M.)',
                tribe_name: 'Unknown',
                monthly_donation_amount: 7,
                total_donation_amount: 21
            },
            {
                id: 76561198115654626,
                ark_player_name: 'Max',
                tribe_name: 'Kingsman',
                monthly_donation_amount: 5,
                total_donation_amount: 15
            },
            {
                id: 76561198069270192,
                ark_player_name: 'Nighto',
                tribe_name: 'ARK Rescue & Support',
                monthly_donation_amount: 10,
                total_donation_amount: 30
            },
            {
                id: 6,
                ark_player_name: 'Unknown (Jung P.)',
                tribe_name: 'Unkown',
                monthly_donation_amount: 5,
                total_donation_amount: 10
            },
            {
                id: 76561198102082050,
                ark_player_name: 'Smeagol',
                tribe_name: 'DarkBoon Lords',
                monthly_donation_amount: 0,
                total_donation_amount: 20
            },
            {
                id: 8,
                ark_player_name: 'Unknown (Vanessa H.)',
                tribe_name: 'Unknown',
                monthly_donation_amount: 5,
                total_donation_amount: 10
            }
        ];

        var totals = {
            id: 0,
            ark_player_name: 'Total',
            tribe_name: '',
            monthly_donation_amount: 0,
            total_donation_amount: 0
        };

        var i;
        for( i = 0; i < this.contributors.length; i++ ) {
            totals.monthly_donation_amount += this.contributors[i].monthly_donation_amount;
            totals.total_donation_amount += this.contributors[i].total_donation_amount;
        }
        
        this.totals = totals;
    }
}