# Notes app with angular 1.5, typescript and webpack

### Install global dependencies
```
npm i webpack -g
npm i typescript -g
npm i typings -g
```
then run
```
npm i && typings i
```
Start project in dev mode
```
npm run dev
```
Optional: Check for linting errors
```
npm run lint
```


## TODOs

### Server implementation
+ Node, Express server with routes:
    * user authentication (tokens)
    * post/patch note
    * get note(id)/notes
+ Set up mongo, mongooose to store user profiles (img, username, password, email)
+ Socket.io broadcast to note group on update
+ Tests - routes, authentication and db persistance

### Frontend 
+ Login - create UserAuth service and connect to backend route - store token
+ Angular storage - save user session token in cookies to skip login page - authenticate NotesService calls with session token 
+ Hook up services/NotesService.ts to backend - functions should return Promise/Observable
+ Socket.io and toast for realtime notifications on note update
+ Tests - authservice, notesService, socket.io
