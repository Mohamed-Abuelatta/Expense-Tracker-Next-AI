1- create new next project 
    1- `npx create-next-app@latest .`
    2- `npm run dev`
3- build and upload github stuff
4- setup neon DB => .env => `DATABASE_URL`
5- setup prisma
    1- `npm i -d prisma`
    2- `npx prisma init`
    3- set prisma schema "tables and records"
    4- to let prisma feel new changes => `npx prisma generate`
    5- to let DB neon feel new changes => `npx prisma migrate dev`

