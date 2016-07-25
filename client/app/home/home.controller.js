class HomeController {
    constructor(moment) {
        'ngInject';

        let duneBuggyBody = `To kick off this new map, we'll have Dune Buggy races this Saturday, May 28th at 12pm PST. We'll have a couple practice rounds followed by waves of 5 racers.
        
 * First place wins a Box of Chocolates.
 * Second place wins a Helmet Skin of their choice.
 * Third place wins a potion of their choice.
        
**Update**

Turns out ARK Devs disabled Dune Buggies so we had Pig Races instead. Level 300 Phiomias max leveled in Speed. It was a blast! It also turns out Box of Chocolates can't be summoned either. Damn those ARK Devs!
        
Winners:

 * 1st. Cheeba (lvl 15 Quetz)
 * 2nd. dubvee (Top Hat)
 * 3rd. Spidy (no reward taken)
`;

        let newEventsBody = `New events have been planned. I will continue my work on the website for user accounts, notifications, and better event descriptions. For now, the below have been planned:

##### Gathering Boost (3x)
Just like it says, resource gathering will be boosted for 24 hours. 
The rate will be 3x the normal rate. 
I'd make it shorter but I want to make sure every timezone gets a chance to capitalize.

##### Mega Summon
There will be a few kinds of summoning events. 
The mega summon is an event in which I summon dinosaurs outside the games normal spawn levels. 
For example, summoning a level 200 Spino to be tamed or killed. The locations will be random. 
Only some of the locations will be broadcasted, meaning exploration is your best option. 
A list of summoned dinos will be provided so you at least know what you are looking for.

##### Galli Lava Race
Similar to the Pig Races, we'll be riding Gallimimus. 
I'll spawn in some level 300 Galli's and boost their speed.
It will be dangerous but oh so fun and the rewards are always worth it.
Rewards will be announced later as the event draws closer.

Got an event you'd like to see happen? Ping Spidy and he'll see about getting it on the calendar.`;

        let redditPostBody = `Our usual post to Reddit has been created.
Let's see if we can be the number one thread again!
If you are enjoying the server please do us a favor and upvote our post.
It pushes us to the top of the list so we get noticed more often.

####[Link to Post](https://www.reddit.com/r/ARK/comments/4jtq4d/ark_survival_evolved_unofficialprivate_server/d3oeszq)

**Update**

Make sure you press the upvote on the comment, not the upvote on the main thread.

![upvote](https://cloud.githubusercontent.com/assets/1076168/15639110/a17a1454-25dc-11e6-9978-ead8e13f8a79.png =100%x*)`;

        let serverDownBody = `Our host took the server down for "Emergency Data Migration". 
Apparently the hard drives were failing.

**The good news:**
 * The new server will be on better, faster, and more performant hardware
 
**The bad news:**
 * It is estimated to be down for 8 hours
 * The IP address will change
 * The port number will change
 
As soon as I have the new information, I will get it posted to this website.
We'll handle the backlash of lost items, dinos, and deaths as best we can once we see what state the server is in once its back up.
Thanks for your patience!`;

        this.updates = [
            {
                id: 5,
                title: 'Server Down Temporarily',
                body: serverDownBody,
                createdAt: 1469410280
            },
            {
                id: 4,
                title: 'Reddit Post is Up',
                body: redditPostBody,
                createdAt: 1464571142
            },
            {
                id: 3,
                title: 'New Events Planned',
                body: newEventsBody,
                createdAt: 1464489212
            },
            {
                id: 2,
                title: 'Dune Buggy Races (Delayed 1 hour)',
                body: duneBuggyBody,
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
