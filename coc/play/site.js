'use strict';
const COPY = {
  nl: {
    name:'Cassatie of Cel',subtitle:'Dé Belgische rechtsquiz',skip:'Naar de inhoud',hook:'Ken jij het Belgische recht?',
    intro:'Pleiten voor de rechtbank of zonder klok studeren. Meer dan 1.000 vragen, telkens met uitleg en een link naar de juridische bron.',try:'Probeer 8 gratis vragen',watch:'Bekijk het spel',assurance:'Geen abonnement. Geen reclame. Het volledige spel werkt offline.',
    sourceTitle:'Niet alleen het juiste antwoord',sourceBody:'Lees waarom het klopt en raadpleeg de juridische bron. Met extra vragen over het nieuwe Strafwetboek, strafvordering en sociaal strafrecht.',
    playTitle:'Eén fout. De cel.',playBody:'Klim door de Belgische rechtbanken, kies gunsten en zet je hulplijnen slim in. Of kies de oefenrang en leer zonder klok.',studyTitle:'Ook zonder een run te spelen',studyBody:'Zoek vragen, oefen per rechtsgebied, bewaar bladwijzers en herhaal wat je nog niet beheerst. In het Nederlands, Frans, Duits of Engels.',
    before:'Eerst proberen',sampleTitle:'Acht vragen. Jij pleit.',sampleBody:'Een korte, vereenvoudigde browserproef met echte vragen uit het spel. Kies een antwoord, lees de uitleg en bekijk de bron. Eén fout stuurt je naar de cel — opnieuw proberen mag altijd.',sampleCount:'8 geselecteerde vragen, niet de volledige vragenbank',sampleFree:'Gratis, zonder account of installatie',samplePrivacy:'Geen overdracht van scores of voortgang naar de app',start:'Begin de proefronde',sampleLimit:'De volledige app voegt de complete vragenbank, spelrangen, gunsten, hulplijnen en studiemodus toe.',
    actual:'Het echte spel',videoTitle:'Zo speelt het.',videoFallback:'Je browser ondersteunt deze video niet.',videoLabel:'Gameplayvideo van Cassatie of Cel',full:'Het volledige spel',getTitle:'Neem de rechtbank mee.',iosBody:'Eenmalige aankoop, zonder abonnement. Bekijk de actuele prijs in de App Store.',iosButton:'Bekijk in de App Store',androidTitle:'Test mee op Google Play',androidBody:'De Android-versie zit nog in de gesloten testfase. Meld je aan via het testerformulier; daar vind je de voorwaarden en installatie-instructies.',androidButton:'Word Android-tester',privacyNote:'Deze pagina voegt geen analytics of advertentietrackers toe.',privacy:'Privacy en contact',independent:'Een onafhankelijk spel van Verdict Studios. Niet verbonden aan of uitgegeven door een overheid of universiteit.',image:'Een advocaat achter de gouden tralies van een cel',features:'Wat zit er in het spel?',language:'Nederlands'
  },
  fr: {
    name:'Cassation ou Cachot',subtitle:'Le quiz du droit belge',skip:'Aller au contenu',hook:'Connaissez-vous le droit belge ?',
    intro:'Plaidez devant les tribunaux ou révisez sans chronomètre. Plus de 1 000 questions, chacune avec une explication et un lien vers sa source juridique.',try:'Essayez 8 questions gratuites',watch:'Voir le jeu',assurance:'Sans abonnement. Sans publicité. Le jeu complet fonctionne hors ligne.',
    sourceTitle:'Plus qu’une bonne réponse',sourceBody:'Comprenez pourquoi la réponse est correcte et consultez sa source juridique. Avec des questions supplémentaires sur le nouveau Code pénal, la procédure pénale et le droit pénal social.',
    playTitle:'Une erreur. Le cachot.',playBody:'Gravissez les juridictions belges, choisissez vos faveurs et utilisez vos aides à bon escient. Ou apprenez sans chronomètre avec le rang d’entraînement.',studyTitle:'Révisez aussi à votre rythme',studyBody:'Recherchez des questions, révisez par matière, ajoutez des favoris et reprenez ce qui vous échappe encore. En néerlandais, français, allemand ou anglais.',
    before:'Essayez d’abord',sampleTitle:'Huit questions. À vous de plaider.',sampleBody:'Un aperçu court et simplifié dans le navigateur, avec de vraies questions du jeu. Choisissez une réponse, lisez l’explication et consultez la source. Une erreur vous mène au cachot — vous pouvez toujours recommencer.',sampleCount:'8 questions sélectionnées, pas la banque complète',sampleFree:'Gratuit, sans compte ni installation',samplePrivacy:'Les scores et la progression ne sont pas transférés à l’app',start:'Commencer l’essai',sampleLimit:'L’app complète ajoute toute la banque de questions, les rangs, les faveurs, les aides et le mode étude.',
    actual:'Le vrai jeu',videoTitle:'Voyez comment jouer.',videoFallback:'Votre navigateur ne prend pas en charge cette vidéo.',videoLabel:'Vidéo du jeu Cassation ou Cachot',full:'Le jeu complet',getTitle:'Emportez le tribunal.',iosBody:'Un achat unique, sans abonnement. Consultez le prix actuel sur l’App Store.',iosButton:'Voir sur l’App Store',androidTitle:'Testez sur Google Play',androidBody:'La version Android est encore en test fermé. Inscrivez-vous via le formulaire de test ; vous y trouverez les conditions et les instructions d’installation.',androidButton:'Devenir testeur Android',privacyNote:'Cette page n’ajoute aucun outil d’analyse ni traceur publicitaire.',privacy:'Confidentialité et contact',independent:'Un jeu indépendant de Verdict Studios. Sans affiliation à une autorité publique ou à une université.',image:'Un avocat derrière les barreaux dorés d’une cellule',features:'Que contient le jeu ?',language:'Français'
  },
  de: {
    name:'Kassation oder Knast',subtitle:'Das Quiz zum belgischen Recht',skip:'Zum Inhalt',hook:'Wie gut kennen Sie belgisches Recht?',
    intro:'Plädieren Sie vor Gericht oder lernen Sie ohne Zeitdruck. Mehr als 1.000 Fragen, jeweils mit Erklärung und einem Link zur Rechtsquelle.',try:'8 Fragen kostenlos ausprobieren',watch:'Spiel ansehen',assurance:'Kein Abo. Keine Werbung. Das vollständige Spiel funktioniert offline.',
    sourceTitle:'Mehr als die richtige Antwort',sourceBody:'Lesen Sie die Begründung und prüfen Sie die Rechtsquelle. Mit zusätzlichen Fragen zum neuen Strafgesetzbuch, zum Strafprozessrecht und zum Sozialstrafrecht.',
    playTitle:'Ein Fehler. Die Zelle.',playBody:'Steigen Sie durch die belgischen Gerichte auf, wählen Sie Vorteile und setzen Sie Hilfen geschickt ein. Oder lernen Sie im Übungsrang ohne Zeitdruck.',studyTitle:'Lernen geht auch ohne Spielrunde',studyBody:'Suchen Sie Fragen, üben Sie nach Rechtsgebiet, setzen Sie Lesezeichen und wiederholen Sie offene Lerninhalte. Auf Niederländisch, Französisch, Deutsch oder Englisch.',
    before:'Erst ausprobieren',sampleTitle:'Acht Fragen. Ihr Plädoyer.',sampleBody:'Eine kurze, vereinfachte Browserprobe mit echten Fragen aus dem Spiel. Wählen Sie eine Antwort, lesen Sie die Erklärung und prüfen Sie die Quelle. Ein Fehler führt in die Zelle — ein neuer Versuch ist jederzeit möglich.',sampleCount:'8 ausgewählte Fragen, nicht die vollständige Fragensammlung',sampleFree:'Kostenlos, ohne Konto oder Installation',samplePrivacy:'Punkte und Fortschritt werden nicht in die App übertragen',start:'Proberunde starten',sampleLimit:'Die vollständige App ergänzt alle Fragen, Spielränge, Vorteile, Hilfen und den Lernmodus.',
    actual:'Das echte Spiel',videoTitle:'So wird gespielt.',videoFallback:'Ihr Browser unterstützt dieses Video nicht.',videoLabel:'Spielvideo von Kassation oder Knast',full:'Das vollständige Spiel',getTitle:'Das Gericht für unterwegs.',iosBody:'Einmaliger Kauf, kein Abo. Den aktuellen Preis finden Sie im App Store.',iosButton:'Im App Store ansehen',androidTitle:'Bei Google Play mittesten',androidBody:'Die Android-Version befindet sich noch im geschlossenen Test. Im Testformular finden Sie die Bedingungen und die Installationsanleitung.',androidButton:'Android-Tester werden',privacyNote:'Diese Seite fügt keine Analysewerkzeuge oder Werbetracker hinzu.',privacy:'Datenschutz und Kontakt',independent:'Ein unabhängiges Spiel von Verdict Studios. Keine Verbindung zu einer Behörde oder Universität.',image:'Ein Anwalt hinter den goldenen Stäben einer Gefängniszelle',features:'Was bietet das Spiel?',language:'Deutsch'
  },
  en: {
    name:'Cassation or Cell',subtitle:'The Belgian Legal Quiz',skip:'Skip to content',hook:'How well do you know Belgian law?',
    intro:'Plead before the courts or study without a clock. More than 1,000 questions, each with an explanation and a link to its legal source.',try:'Try 8 free questions',watch:'Watch the game',assurance:'No subscription. No ads. The full game works offline.',
    sourceTitle:'More than the right answer',sourceBody:'Read why the answer holds and check the legal source. With additional questions on the new Penal Code, criminal procedure and social criminal law.',
    playTitle:'One mistake. The cell.',playBody:'Climb through the Belgian courts, choose your favours and use your lifelines wisely. Or learn without a clock in the practice rank.',studyTitle:'Study without playing a run',studyBody:'Search questions, practise by field, bookmark important points and revisit what you haven’t mastered. In Dutch, French, German or English.',
    before:'Try before you buy',sampleTitle:'Eight questions. Your case.',sampleBody:'A short, simplified browser sample using real questions from the game. Choose an answer, read the explanation and check the source. One mistake sends you to the cell — you can always try again.',sampleCount:'8 selected questions, not the complete question bank',sampleFree:'Free, without an account or installation',samplePrivacy:'Scores and progress do not transfer to the app',start:'Start the sample round',sampleLimit:'The full app adds the complete question bank, ranks, favours, lifelines and study mode.',
    actual:'The real game',videoTitle:'See how it plays.',videoFallback:'Your browser does not support this video.',videoLabel:'Gameplay video of Cassation or Cell',full:'The full game',getTitle:'Take the courtroom with you.',iosBody:'One purchase, no subscription. See the current price on the App Store.',iosButton:'View on the App Store',androidTitle:'Test on Google Play',androidBody:'The Android version is still in closed testing. Sign up through the tester form for the conditions and installation instructions.',androidButton:'Become an Android tester',privacyNote:'This page adds no analytics or advertising trackers.',privacy:'Privacy and contact',independent:'An independent game by Verdict Studios. Not affiliated with a government or university.',image:'A lawyer behind the golden bars of a prison cell',features:'What is in the game?',language:'English'
  }
};
const requested = new URLSearchParams(location.search).get('lang');
const browserLanguage = String(navigator.language || 'nl').slice(0,2).toLowerCase();
const lang = Object.hasOwn(COPY, requested) ? requested : Object.hasOwn(COPY, browserLanguage) ? browserLanguage : 'nl';
const copy = COPY[lang];
document.documentElement.lang = lang;
document.title = `${copy.name} — ${copy.subtitle}`;
document.querySelector('meta[name="description"]').setAttribute('content',copy.intro);
for (const element of document.querySelectorAll('[data-copy]')) {
  const value = copy[element.dataset.copy];
  if (typeof value === 'string') element.textContent = value;
}
for (const link of document.querySelectorAll('[data-lang]')) {
  if (link.dataset.lang === lang) link.setAttribute('aria-current','page');
}
for (const id of ['hero-demo','sample-demo']) document.getElementById(id).href = `demo/?lang=${lang}`;
document.getElementById('hero-image').alt = copy.image;
document.getElementById('features').setAttribute('aria-label',copy.features);
const video = document.getElementById('gameplay');
video.poster = `video/poster-${lang}.jpg`;
video.setAttribute('aria-label',copy.videoLabel);
document.getElementById('video-source').src = `video/promo-${lang}.mp4`;
const track = document.getElementById('video-track');
track.src = `video/promo-${lang}.vtt`;
track.srclang = lang;
track.label = copy.language;
// Resolve the language before enabling GIF-like playback, so no default-language
// clip starts downloading first. Native controls keep the loop easy to pause.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
video.muted = true;
video.defaultMuted = true;
video.loop = true;
video.autoplay = !reducedMotion.matches;
video.load();
if (video.autoplay) {
  // Power/data-saving modes may still block autoplay; leave manual controls usable.
  void video.play().catch(() => {});
}
reducedMotion.addEventListener('change', event => {
  if (event.matches) {
    video.autoplay = false;
    video.pause();
  }
  // Do not resume automatically after the visitor has paused the video.
});
