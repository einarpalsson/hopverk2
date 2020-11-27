# Hópverkefni 2

Hópverkefni þetta, útfært af Birgittu, Dagbjörtu, Einari og Gunnari er myndbandavefsíða sem ber nafnið Fræðslumyndbandaleigan. Hönnun vefsíðunnar er eftir [Ólaf Sverri Kjartansson](https://github.com/osk).

## Keyrsla verkefnis

- `npm run dev`: keyrir verkefnið og opnar síðuna í nýjum glugga í vafra.
- `npm run lint`: keyrir kóða verkefnis í gegnum stylelint sem eru staðlar fyrir uppsetningu CSS og SCSS kóða.
- [Hér](https://notendur.hi.is/epp5/vefforritun/hopverk2/index.html) er síðan uppsett á heimasvæði nemenda í verkefninu.

## Lýsing verkefnis

Á heimasíðu má finna 3 myndbandaflokka sem hægt er að velja myndban úr og ef smellt er á tiltekið myndband birtist síða með því myndbandi ásamt tengdum myndböndum, skv. reikniriti Ólafs Sverris. 

### Uppsetning

Verkefnið er unnið í HTML, CSS og Javascript þar sem CSS hlutinn er útfærður með SCSS og Javascript hlutinn útfærður með Babel og Rollup tólunum.

Í verkefnamöppu eru 16 mismunandi skrár, ásamt 7 möppum en við leyfum okkur að horfa framhjá 2 þeirra. `/styles` mappan inniheldur 7 SCSS skrár sem eru grundvallaratriði CSS kóða verkefnisins. `/dist` mappan inniheldur `bundle.js` sem inniheldur alla Javascript virkni vefsíðunnar samanþjappaða í eina skrá og útfært fyrir flesta vafra. Skrár fyrir Javascript virkni vefsíðunnar má finna í möppunni `/src`. Möppurnar þar inni eru eftirfarandi í stafrófsröð: 

  - `/lib/loadVideos.js` - Sækir myndbönd í `videos.json` og setur upp á vef.
  - `/lib/time.js` - Útfærir lengd myndbandana og dagstningarform útfrá upplýsingum í `videos.json`.
  - `/lib/videoControls.js` - Útfærir alla takkavirkni fyrir myndbönd á vefsíðu.
  - `/lib/videosGet.js` - Sækir rétta myndbandið útfrá því hvaða myndband er valið af notanda og setur upp á myndbandavefsíðu.
  - `/index.js` - Keyrir alla virkni sem þarf eftir því sem við á.

>Þessi skjöl eru keyrð í gegnum Babel tólið og útfrá því er `/dist` mappan búin til sem inniheldur `bundle.js`. 

Annað sem má sjá í verkefnamöppu er `/img` sem inniheldur takka, `/videos` sem inniheldur þau myndbönd og myndir sem sjá má á vefsíðu, `index.html` og `video.html` sem er HTML kóði verkefnis ásamt öðrum skrám sem koma lítið við sögu á vefsíðunni en meira til sögu við vinnslu verkefnis.


## Hópmeðlimir
### Einar Páll
  - Netfang: epp5@hi.is 
  - Github: `Einarpalsson`
### Dagbjört Þ.
  - Netfang: dth29@hi.is
  - Github: `Dagbjort`
### Gunnar ingi
  - Netfang: gig41@hi.is
  - Github: `Gunnar-Ingi`
### Birgitta Ýr
  - Netfang: bye1@hi.is
  - Github: `Birgittaye` 
## Að lokum
Njótið!
