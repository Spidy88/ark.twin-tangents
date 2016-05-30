class ContributorsController {
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
                id: 76561197974176876,
                ark_player_name: 'Basswalker',
                tribe_name: 'Sanctity',
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
            },
            {
                id: 76561198131133002,
                ark_player_name: 'Dubvee',
                tribe_name: 'DarkBoon Lords',
                monthly_donation_amount: 5,
                total_donation_amount: 5
            },
            {
                id: 76561198218626891,
                ark_player_name: 'Goliath',
                tribe_name: 'The Horde',
                monthly_donation_amount: 5,
                total_donation_amount: 5
            }
        ];

        var totals = {
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

export default ContributorsController;
