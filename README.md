# Binar Academy Bootcamp - FSW - Chapter 8 - Challenge
## Prasyarat
Sebelum memulai menyentuh repository, pastikan komputer teman-teman memenuhi prasyarat berikut:
- sudah install Node.js & NPM
- sudah install PostgreSQL
- sudah install git

## Project setup
1. Clone repository 

```
$ git clone https://github.com/cumapemula/binar-challenge-chapter-8.git
```

2. Pindah ke folder repository yang udah di clone dgn perintah 
`cd binar-challenge-chapter-8`
3. Install dependencies dgn command `npm install` atau `yarn add`.
4. Pastikan sudah membuat database sesuai konfigurasi di `/config/config.js` jika belum jalankan saja `npx sequelize db:create` dan juga pastikan kita harus berada pada directory `server` kalau belum `cd server`
5. Lanjutkan dengan menjalankan migrasi, sebelumnya kita harus masuk pada directory `server` dulu ya, `npx sequelize db:migrate`
6. Kamu juga bisa jalankan file seed yang sudah dibuat dengan cara `npx sequelize db:seed:all`
### Run
Untuk menjalankan aplikasi RESTful API, cukup jalankan perintah berikut
```
$ npm run start
```
atau

```
$ yarn start
```
Endpoint documentation API berada di path `/docs`

Untuk menjalankan aplikasi client, masuk ke directory client `cd client` lalu jalankan perintah berikut
```
$ npm run dev
```
atau
```
$ yarn dev
```