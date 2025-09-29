# Steps For Building the app

1. create new next project 
    1. `npx create-next-app@latest .`
    2. `npm run dev`
2. build and commet [github](https://github.com/Mohamed-Abuelatta/Expense-Tracker-Next-AI) stuff
3. setup [neon DB](https://neon.com/) => [.env](.env) => `DATABASE_URL`
4. setup prisma ORM
    1. `npm i -d prisma`
    2. `npx prisma init`
    3. set [prisma schema](prisma\schema.prisma) "tables and records"
    4. to let prisma feel the new changes => `npx prisma generate`
    5. to let DB neon feel the new changes => `npx prisma migrate dev`
    6. set [lib/db.ts](lib\db.ts) for global connection to the DB
5. setup clerk for authentication => just follow the instructions provided for it
6. 