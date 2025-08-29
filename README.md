# People SPA (Angular 8)

Angular 8 Single Page Application consuming a Node + Mongo `/person` API.

## Endpoints expected
- GET    /person
- GET    /person/:id    (optional; app can fall back to GET /person and find locally)
- POST   /person        (optional create view included)
- PUT    /person/:id
- DELETE /person/:id

## Run
```bash
npm install
npm start
# open http://localhost:4200
```

## Configure API
Edit `src/environments/environment.ts` and set your backend root, default is `http://localhost:3000`.
