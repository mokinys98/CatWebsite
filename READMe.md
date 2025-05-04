# Kačiukų svetainę

## Aprašymas

III Namų darbas

- Duomenų bazės sukūrimas (MongoDB)
  - Sukurkite MongoDB duomenų bazę -> Pati susikuria jeigu nėra pagal sukurtą kolekciją
  - [Sukurkite kolekcijas](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#L11-L20) 
  - [Patikrinkite duomenų bazės ryšį](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#L58-L63) 
- Prijungimas prie tinklapio (Backend - Node.js su Express)
  - [Sukurkite backend serverį](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#L2-L6) 
  - [Užtikrinkite sėkmingą prisijungimą prie MongoDB bei CRUD operacijų veikimą](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#77-L108) 
  - [Naudokite Mongoose, duomenų valdymui ir schemų kūrimui](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#1-L21) 
  - [Sukurkite API maršrutus](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#27-L41) 
  
## Reikalavimai

- MongoDB Community Server @ https://www.mongodb.com/try/download/community
- Node.js
- npm
- Bootstrap

## Diegimas

1. Klonuokite repozitoriją:
   
   ````bash
   git clone https://github.com/mokinys98/CatWebsite.git
   ````

2. Eikite į projekto katalogą:
   
   ````bash
   cd CatWebsite
   ````

3. Pasirinkite norimą tag'ą (namų darbą):
   
   ````bash
   git checkout <tag_pavadinimas>
   ````

4. Įdiekite priklausomybes:
   
   ````bash
   npm install
   ````

5. Paleiskite serverį:
   
   ````bash
   node .\src\server.js
   ````
