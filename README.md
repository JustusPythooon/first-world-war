# 1914 – Europas letzter Sommer

Interaktives Lern-Escape-Game für Geschichte, 9. Klasse, Realschule Bayern.

## Funktionen
- 25 nacheinander freischaltbare Akten
- Antwortmöglichkeiten werden bei jeder Frage zufällig neu angeordnet
- 65 Quizfragen, davon 25 Zusatzfragen zum Augusterlebnis und zur Quellenkritik
- Lernkapitel und Zeitstrahl
- Managementsimulation „Oberkommando 1914“
- Simulation wird erst nach allen 25 Akten freigeschaltet
- Fortschritt wird im Browser mit `localStorage` gespeichert
- vollständig statisch, daher direkt für GitHub Pages geeignet

## Lokal starten
`index.html` im Browser öffnen. Für zuverlässiges Testen kann in Visual Studio Code die Erweiterung **Live Server** verwendet werden.

## GitHub Pages
1. Neues öffentliches GitHub-Repository anlegen.
2. Den **Inhalt dieses Ordners** hochladen, nicht den übergeordneten Ordner.
3. Repository öffnen: **Settings → Pages**.
4. Unter **Build and deployment** `Deploy from a branch` wählen.
5. Branch `main`, Ordner `/ (root)` auswählen und speichern.
6. Nach dem Deployment erscheint die Pages-Adresse im Bereich **Settings → Pages**.

Alternativ ist eine GitHub-Actions-Datei unter `.github/workflows/pages.yml` enthalten.

## Projektstruktur
- `index.html`: Startseite, Lernen, Quiz und Escape-Game
- `simulation.html`: freischaltbare Managementsimulation
- `game.js`: Hauptlogik
- `simulation.js`: Simulationslogik
- `data/escape-cases.js`: alle 25 Akten
- `extra_questions.js`: 25 zusätzliche Fragen
- `assets/`: Bilddateien
- `docs/`: Projekt- und Upload-Hinweise

## Bildhinweis
Visuals in diesem Projekt wurden mit Microsoft Copilot generiert.
