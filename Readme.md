
Chosen GraphQL Apollo server library that acts as an ideal wrapper for the Restful apis and has built in caching, sockets and polling techniques that can be leveraged to overcome the intermittent reliability issues with the Restful api endpoints (as per the specs seems to be a major concern).

Though I think that these techniques could also be used solely on the front end with some existing libraries but perhaps could involve writing more code to achieve the level of maturity that Apollo provides (probably needs some further investigation on this).

## Assumptions
* Both Fimworld and Cinemaworld have got the same movie data but for prices, hence using just one of them for now to show list of movies.
* Price seems to be in dollar value not in basic unit of cents.
* Assumed that the api errors are intermittent and there is no set pattern on how often the api can give 50x type responses.

## Proposed solution via leveraging Apollo caching strategies
* Though not fully implemented due to time constraints but this is a base start. Haven't explored much in detail but needs further look into more caching techniques using Apollo on client and server side.
* The caching strategy can also combine with out of box subscription features in Apollo/GraphQL using websockets for more seamless and error free (or no down time) user experience. For now using lazy query techniques on client that calls the query again when error is returned.

The project is divided into two folders, `client` and `server`. Both are written in Typescript.
Both utilize the following commands to set up the modules and run including tests:

* `npm install`
* `npm start`
* `npm test`

Have placed `TODO` at certain parts to improve or refactor for better design.
