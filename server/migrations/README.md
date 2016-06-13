Database Migrations
===================

Each filename needs to be a 14 digit date, followed by optional dash separated words. The file extension should be
.js and contain a CommonJS exported object with an `up` and `down` method. Quickest way to create your new file is
to use

```
touch "server/migrations/$(date +%Y%m%d%H%M%S).js"
```

### Running the Migrations


To run the migrations, make sure you have the project dependencies installed. Then run

```
npm run migrations
```