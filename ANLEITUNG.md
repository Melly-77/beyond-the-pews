# Beyond the Pews — Neue Website (ohne Admin/CMS)

## Was ist neu

- **Bordeaux-Stil** — Header, Hero-Bereich und Footer sind jetzt im dunklen Bordeaux/Deep-Wine-Ton gehalten, näher am ursprünglichen Look. Falls du noch Details siehst, die anders sein sollen, schick mir gern ein Bild der alten Seite — dann justiere ich gezielt nach.
- **Englische Version** — komplett im `en/`-Ordner. Oben rechts in der Navigation kannst du jederzeit zwischen DE/EN wechseln. Gäste-, Shop- und Episoden-**Daten** sind geteilt (du pflegst sie nur einmal in `guests-data.js`, `shop-data.js`, `episodes-data.js`), nur die Seiten-Texte drumherum sind übersetzt.
- **Bibel-Funktion repariert** — der Fehler lag an der Bibel-API: sie liefert die Verse unter einem anderen Datenfeld als angenommen. Jetzt sollten alle Kapitel in beiden Sprachen zuverlässig laden.
- **Podcast** (`podcast.html`) — alle Episoden, mit Pillar-Filter (Identität/Berufung/Exzellenz). Daten in `episodes-data.js`.
- **Community** (`community.html`) — Eintragungsformular für die wöchentliche Mail, läuft automatisch über **Netlify Forms**.
- **Gäste** (`guests.html`) — Karten mit Buch, Kontakt, Website, Instagram. Daten in `guests-data.js`.
- **Shop** (`shop.html`) — Bibeln & christliche Produkte, mit Kategorie-Filtern. Daten in `shop-data.js`. Kein Zahlungssystem eingebaut — jeder Artikel kann optional zu einem externen Link führen.

## So lädst du es hoch (Mac + Netlify, wie gewohnt)

1. Entpacke den ZIP-Ordner auf deinem Mac.
2. Gehe zu [app.netlify.com](https://app.netlify.com) → dein Beyond the Pews Projekt → **Deploys**.
3. Zieh den **ganzen entpackten Ordner** in das Upload-Feld (klappt meist einfacher als einzelne Dateien).
4. "Publish directory" leer lassen.
5. Fertig — Netlify deployed automatisch.

## So bearbeitest du Inhalte (mit VS Code, nicht TextEdit!)

- **Gäste:** `guests-data.js`
- **Shop-Produkte:** `shop-data.js`
- **Podcast-Episoden:** `episodes-data.js`
- Alle drei gelten für **beide Sprachversionen gleichzeitig** — einmal pflegen reicht.
- Nach dem Ändern: Datei speichern → gesamten Ordner erneut auf Netlify hochladen.

## Wo die Community-Mails landen

Netlify → **Forms** im Dashboard. Benachrichtigungs-Mail einrichten: Site settings → Forms → Form notifications.

## Was absichtlich noch fehlt

- Echtes Bezahlsystem im Shop
- Die alte Decap-CMS-Admin-Oberfläche (bewusst nicht übernommen)
- Feinschliff am Bordeaux-Stil, falls du mir noch ein Referenzbild der alten Seite schickst

