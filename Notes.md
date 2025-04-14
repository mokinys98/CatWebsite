# Darbo planas

�iame faile apra�omas projekto etap? planas, kuriame nurodoma, kokie elementai bus kuriami, koki? papildom? fail? reik?s ir kaip bus strukt?rizuotas svetain?s k?rimo procesas.

## Projekto tikslas
Sukurti interaktyvi? interneto svetain? naudojant HTML, CSS, JavaScript bei Node.js, u�tikrinant auk�to lygio vartotojo patirt? ir tinkam? turinio strukt?r?.

## Kurimi elementai ir fail? strukt?ra
- **HTML �ablonai:**
  - `index.html` � pagrindinio puslapio strukt?ros nustatymas, kuriame pateikti visi semantiniai elementai.
  - Papildomi puslapiai (3 vnt.) su atskirais turinio konteineriais, kuriuose pateikiama informacija, nuotraukos, lentel?s, s?ra�ai ir formos.
  - Specialus 404 klaid? puslapis, nukreipiant neteisingas HTTPS nuorodas.

- **CSS failai:**
  - `/css/style.css` � pagrindini? stili? apra�ymas, taikant tinkam? strukt?rizavim? ir dizain?.
  - Papildomi stiliaus failai, skirti specialiems elementams (pvz., karuselei, formoms, navigacijai).

- **JavaScript failai:**
  - `/js/main.js` � bendra svetain?s interaktyvumo logika, ?skaitant karusel?s valdym?.
  - Serverio logikai ir papildom? funkcionalum? (pvz., 404 peradresavimas) ?gyvendinimui naudojami Node.js skriptai.

- **Vaizdai ir multimedijos:**
  - `/images/` � direktorija, kurioje saugomi svetain?je naudojami paveiksl?liai. Kai kurie nuotraukos elementai buvo sugeneruoti pasitelkiant OpenAI ?rank? DALLE.
  - Sukurtas logotipas, atspindintis svetain?s tapatyb? ir pritaikytas bendram dizainui.

- **Papildomi failai:**
  - `README.md` � projekto apra�ymas ir instrukcijos projekto paleidimui.
  - `.gitignore` � failas, nurodantis, kuriuos failus ar direktorijas ignoruoti naudojant Git.

## Darbo etapai
1. **HTML �ablono k?rimas:**
   - Pirmiausiai sukurta pagrindinio puslapio (index.html) strukt?ra su visais reikalingais semantiniais elementais.
   - ? dokumentacij? ?traukti ekranvaizd�iai, vaizduojantys pradinio kodo lang? ir HTML element? i�d?stym?.

2. **Navigacijos juostos integracija:**
   - ?terpta navigacijos juosta, sukonstruota naudojant `flex` konteinerius: 
     - Pirmasis konteineris � logotipui.
     - Likusieji du � puslapio nuorodoms.
   - Dokumentacijoje pateikti screenshot'ai, rodantys navigacijos strukt?r? tiek redaktoriaus, tiek nar�ykl?s lange.

3. **Papildom? puslapi? suk?rimas:**
   - Sukurti 3 puslapiai, kuriuose kiekvienam parengtas atskiras turinio konteineris.
   - ?traukti ekranvaizd�iai, iliustruojantys, kaip strukt?rizuotas tekstas, nuotraukos, lentel?s ir kiti b?tini HTML elementai.

4. **Turinio pripildymas:**
   - Puslapiai u�pildyti reikiama informacija, nuotraukomis bei kitais multimedijos elementais, atsi�velgiant ? pirmojo nam? darbo reikalavimus.
   - Kai kurios nuotraukos buvo sugeneruotos pasitelkiant OpenAI ?rank? DALLE.

5. **Logotipo k?rimas:**
   - Sukurtas unikalus logotipas, atitinkantis svetain?s tapatyb?, parenkant tinkam? spalv? palet? ir tipografij?.
   - Logotipas padeda u�tikrinti vizualinio dizaino vientisum?.

6. **Karusel?s funkcionalumo ?diegimas:**
   - ? svetain? ?diegta karusel?, leid�ianti interaktyviai per�i?r?ti daugyb? vaizd?.
   - Karusel?s ?gyvendinimas prisideda prie dinami�ko turinio pristatymo ir pagerina vartotojo patirt?.

7. **Form? ?gyvendinimas:**
   - Sukurta interaktyvi forma, atitinkanti UX principus: vartotojui pateikiamas ai�kus prane�imas, kad u�klausa bus i�si?sta.
   - �i forma pagerina sistemos komunikacij? ir i�laiko vartotojo pasitik?jim?.

8. **Node.js sprendimas ir klaid? 404 peradresavimas:**
   - Papildomas etapas, kuriame naudojant Node.js ?gyvendintas automatinis nukreipimas ? individual? 404 puslap?, kai vartotojas pasiekia neteising? HTTPS nuorod?.

## Si?lymai ir tolesni darbai
- Toliau tobulinti svetain?s SEO optimizacij? ir prieinamumo testavim?.
- Integruoti papildomus interaktyvius elementus, tokius kaip animacijos ir dinami�kai atnaujinamas turinys.
- Atlikti kodo refaktorizacij? ir dokumentacijos atnaujinim?, siekiant palengvinti projekto palaikym? ateityje.
- Galima ?diegti vartotoj? atsiliepim? sistem?, kad dar labiau pager?t? UX.

�is darbo planas padeda u�tikrinti, kad visi projekto elementai b?t? logi�kai ir nuosekliai sukurti, taip atitinkant auk�to lygio akademinius reikalavimus ir ilgam laikotarpiui
