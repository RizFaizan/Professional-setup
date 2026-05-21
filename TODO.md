# TODO - Project fixes

- [ ] Fix module system mismatch (ESM vs CJS) across server.js and src/db/db.js (+ constants.js).
- [ ] Create/implement src/app.js (Express app + basic middleware) and mount placeholder route.
- [ ] Update server.js to import the app and actually call app.listen.
- [ ] Ensure DB connection is executed once and server start waits for DB connection.
- [ ] Run `npm run dev` and `node server.js` to confirm startup.
