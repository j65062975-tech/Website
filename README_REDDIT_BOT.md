# PowergenX Reddit Bot - Lokale Python Versie

Deze map bevat een lokale Python-versie van de Reddit bot die je op je eigen computer kunt draaien. De webversie is verwijderd omdat je de bot lokaal wilt draaien zonder browser.

## Bestanden

- `reddit_bot.py` - De hoofdapplicatie
- `requirements.txt` - Vereiste Python packages (alleen voor echte Reddit API versie)

## Gebruik

1. Zorg dat je Python 3.6+ geïnstalleerd hebt
2. Open een terminal in deze map
3. Run de bot met:
   ```
   python reddit_bot.py
   ```

## Commando's

Als de bot draait, kun je de volgende commando's gebruiken:

- `start` - Start de automatische posting
- `stop` - Stop de automatische posting
- `post` - Plaats handmatig een advertentie
- `status` - Bekijk de huidige status van de bot
- `quit` - Sluit de applicatie af

## Functionaliteit

De Python bot heeft dezelfde functionaliteit als de verwijderde webversie:

- Automatisch plaatsen van advertenties in willekeurige subreddits
- Handmatig plaatsen van advertenties
- Simulatie van Reddit posts (geen echte API-integratie in deze versie)
- Configurabele intervallen en producten

## Voor echte Reddit API-integratie

Voor een echte implementatie met de Reddit API, installeer dan de PRAW library:

```
pip install praw
```

En pas de `_simulate_post` methode aan om daadwerkelijke API calls te maken.