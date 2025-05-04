# Kačiukų svetainę

## Aprašymas

III Namų darbas

- Duomenų bazės sukūrimas (MongoDB)
  - ✅Sukurkite MongoDB duomenų bazę -> Pati susikuria jeigu nėra pagal sukurtą kolekciją
  - [Sukurkite kolekcijas](https://github.com/mokinys98/CatWebsite/blob/nd3/src/models/Form.js#L9)  
  - [Patikrinkite duomenų bazės ryšį](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#L40-L47) 
- Prijungimas prie tinklapio (Backend - Node.js su Express)
  - [Sukurkite backend serverį](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#L1-L6) 
  - [Užtikrinkite sėkmingą prisijungimą prie MongoDB bei CRUD operacijų veikimą](https://github.com/mokinys98/CatWebsite/blob/nd3/src/server.js#L61-L93) 
  - [Naudokite Mongoose, duomenų valdymui ir schemų kūrimui](https://github.com/mokinys98/CatWebsite/blob/nd3/src/models/Form.js) 
  - [Sukurkite API maršrutus](https://github.com/mokinys98/CatWebsite/blob/nd3/src/routes/form.js) 
- CRUD operacijų realizavimas
  - [Create](https://github.com/mokinys98/CatWebsite/blob/nd3/src/routes/form.js#L5-L17)
  - [Update](https://github.com/mokinys98/CatWebsite/blob/nd3/src/routes/form.js#L43-L58)
  - [Read](https://github.com/mokinys98/CatWebsite/blob/nd3/src/routes/form.js#L20-L40)
  - [Delete](https://github.com/mokinys98/CatWebsite/blob/nd3/src/routes/form.js#L60-L70)
- MERN modelio įgyvendinimas (Frontend - React)(AdminCenter realizavimui)
  - [Sukurkite React aplikaciją](https://github.com/mokinys98/CatWebsite/blob/nd3/client/)
  - ✅Aplikacija turi turėti šiuos komponentus:
    - [Formą naujam įrašui sukurti.](https://github.com/mokinys98/CatWebsite/blob/nd3/client/src/components/CreateForm.js)
    - [Sąrašą visiems įrašams (pvz., vartotojams) peržiūrėti.](https://github.com/mokinys98/CatWebsite/blob/nd3/client/src/components/EditForm.js)
    - [Redagavimo formą atnaujinti įrašams.](https://github.com/mokinys98/CatWebsite/blob/nd3/client/src/components/ListItems.js#L10-17)
    - [Galimybę ištrinti įrašus.](https://github.com/mokinys98/CatWebsite/blob/nd3/client/src/components/ListItems.js#L19-24)
  - [Naudokite Axios arba Fetch metodą duomenų užklausoms atlikti](https://github.com/mokinys98/CatWebsite/blob/nd3/client/src/components/CreateForm.js#L14)
  - ✅Sukurkite paprastą naudotojo sąsają su pagrindinėmis CRUD operacijomis.
- Pateikimas ir testavimas
  - ✅Užtikrinkite, kad jūsų aplikacija veiktų be klaidų, o CRUD operacijos būtų tinkamai atliktos.
  - ✅Atlikite aplikacijos testavimą: išbandykite visas CRUD operacijas (kurti, skaityti, atnaujinti, ištrinti).
  - ✅Pateikite savo projektą GitHub ar kitame versijų kontrolės įrankyje ir pateikite nuorodą arba darbą įkelkite į Moodle.



## Reikalavimai

- MongoDB Community Server @ https://www.mongodb.com/try/download/community
- mongoose
- Node.js
- npm
- Bootstrap
- React
- React-dom
- React-router-dom
- Cors
- Axios
- Dotenv
- Web vitals

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
   npm run dev
   ````

6. Atidarykite naršyklę ir eikite į adresą `http://localhost:3000` norėdami pasiekti Node.js Express aplikaciją.
7. React AdminCenter atsidaryti eikite į adresą `http://localhost:3001` norėdami pasiekti aplikaciją.
