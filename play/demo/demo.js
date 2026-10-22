/* Standalone preview: no app code, accounts, telemetry or persistent game state. */
(() => {
  'use strict';
  const DATA = window.COC_DEMO_DATA;
  const UI = {
    nl: {language:'Taal',skip:'Ga naar de preview',label:'Gratis preview · 8 vragen',title:'Cassatie of Cel?',lede:'Acht zaken. Eén foute keuze en je belandt in de cel. Durf jij te pleiten?',start:'Speel de preview',pills:['8 echte vragen','Uitleg & wetsbronnen','Geen account'],note:'Dit is een beperkte kennismaking, geen volledige spelrun. Het volledige spel heeft meer dan 1.000 vragen, hulpmiddelen, vaardigheden, moeilijkheidsgraden en een studiemodus.',stepTitles:['Lees de zaak','Kies je antwoord','Ontdek de rechtsbron'],stepTexts:['De tegenpartij is overtuigd. Terecht?','Eén fout beëindigt deze preview-run.','Lees de uitleg, bekijk de bron en probeer opnieuw.'],question:'Zaak',of:'van',choose:'Wat pleit je?',hint:'Een tip van de griffier',right:'Goed gepleit.',wrong:'Naar de cel.',correct:'Juiste antwoord',picked:'Jouw antwoord',explain:'De juridische uitleg',next:'Volgende zaak',finish:'Bekijk je resultaat',retry:'Opnieuw proberen',restart:'Preview opnieuw starten',back:'Ontdek het volledige spel',source:'Lees artikel',official:'Officiële tekst (Justel)',sourceNote:'De bron opent in een nieuw tabblad.',privacy:'Geen account, tracking of opgeslagen voortgang. Deze preview verstuurt geen antwoorden.',won:'Vrijgesproken. Goed gepleit!',wonText:'Je hebt alle acht zaken van deze preview gewonnen. Klaar voor meer dan deze korte kennismaking?',full:'In het volledige spel bouw je een run met hulpmiddelen en vaardigheden, kies je een moeilijkheidsgraad en oefen je in de studiemodus.',score:'8 van 8 juist',failNote:'Je run stopt hier. Lees waarom het andere antwoord klopt en probeer het opnieuw.',fields:{procedure:'Procesrecht',consumer:'Consumentenrecht',evidence:'Bewijsrecht',liability:'Aansprakelijkheidsrecht',property:'Goederenrecht',employment:'Sociaal recht',company:'Vennootschapsrecht',constitution:'Grondwettelijk recht'}},
    fr: {language:'Langue',skip:'Aller à la démo',label:'Démo gratuite · 8 questions',title:'Cassatie of Cel ?',lede:'Huit affaires. Une mauvaise réponse et c’est la cellule. Prêt à plaider ?',start:'Jouer à la démo',pills:['8 vraies questions','Explications et sources','Sans compte'],note:'Ceci est un aperçu limité, pas une partie complète. Le jeu complet propose plus de 1 000 questions, des aides, des compétences, plusieurs difficultés et un mode étude.',stepTitles:['Lisez l’affaire','Choisissez votre réponse','Consultez la source'],stepTexts:['La partie adverse est sûre d’elle. À raison ?','Une erreur met fin à cette partie de démonstration.','Lisez l’explication, consultez la source et réessayez.'],question:'Affaire',of:'sur',choose:'Que plaidez-vous ?',hint:'Un indice du greffier',right:'Bien plaidé.',wrong:'En cellule.',correct:'Bonne réponse',picked:'Votre réponse',explain:'L’explication juridique',next:'Affaire suivante',finish:'Voir votre résultat',retry:'Réessayer',restart:'Recommencer la démo',back:'Découvrir le jeu complet',source:'Lire l’article',official:'Texte officiel (Justel)',sourceNote:'La source s’ouvre dans un nouvel onglet.',privacy:'Sans compte, suivi ni progression enregistrée. Cette démo ne transmet aucune réponse.',won:'Acquitté. Bien plaidé !',wonText:'Vous avez remporté les huit affaires de cette démo. Prêt à aller au-delà de ce bref aperçu ?',full:'Dans le jeu complet, construisez votre partie avec des aides et des compétences, choisissez une difficulté et entraînez-vous en mode étude.',score:'8 bonnes réponses sur 8',failNote:'Votre partie s’arrête ici. Découvrez pourquoi l’autre réponse est correcte, puis réessayez.',fields:{procedure:'Procédure judiciaire',consumer:'Droit de la consommation',evidence:'Droit de la preuve',liability:'Responsabilité civile',property:'Droit des biens',employment:'Droit social',company:'Droit des sociétés',constitution:'Droit constitutionnel'}},
    de: {language:'Sprache',skip:'Zur Vorschau',label:'Kostenlose Vorschau · 8 Fragen',title:'Cassatie of Cel?',lede:'Acht Fälle. Eine falsche Antwort und du landest in der Zelle. Bereit für dein Plädoyer?',start:'Vorschau spielen',pills:['8 echte Fragen','Erklärungen & Rechtsquellen','Ohne Konto'],note:'Dies ist eine begrenzte Vorschau, kein vollständiger Spieldurchlauf. Das vollständige Spiel bietet über 1.000 Fragen, Hilfsmittel, Fähigkeiten, Schwierigkeitsgrade und einen Lernmodus.',stepTitles:['Lies den Fall','Wähle deine Antwort','Prüfe die Rechtsquelle'],stepTexts:['Die Gegenseite ist überzeugt. Zu Recht?','Ein Fehler beendet diesen Vorschau-Durchlauf.','Lies die Erklärung, prüfe die Quelle und versuche es erneut.'],question:'Fall',of:'von',choose:'Was trägst du vor?',hint:'Ein Tipp des Gerichtsschreibers',right:'Gut plädiert.',wrong:'Ab in die Zelle.',correct:'Richtige Antwort',picked:'Deine Antwort',explain:'Die rechtliche Erklärung',next:'Nächster Fall',finish:'Ergebnis ansehen',retry:'Erneut versuchen',restart:'Vorschau neu starten',back:'Das vollständige Spiel entdecken',source:'Artikel lesen',official:'Amtlicher Text (Justel, Französisch)',sourceNote:'Die Rechtsquellen öffnen in einem neuen Tab; Gesetzestexte sind auf Französisch verfügbar.',privacy:'Ohne Konto, Tracking oder gespeicherten Fortschritt. Diese Vorschau übermittelt keine Antworten.',won:'Freigesprochen. Gut plädiert!',wonText:'Du hast alle acht Fälle dieser Vorschau gewonnen. Bereit für mehr als diesen kurzen Einblick?',full:'Im vollständigen Spiel gestaltest du einen Durchlauf mit Hilfsmitteln und Fähigkeiten, wählst eine Schwierigkeit und übst im Lernmodus.',score:'8 von 8 richtig',failNote:'Dein Durchlauf endet hier. Lies, warum die andere Antwort richtig ist, und versuche es erneut.',fields:{procedure:'Prozessrecht',consumer:'Verbraucherrecht',evidence:'Beweisrecht',liability:'Haftungsrecht',property:'Sachenrecht',employment:'Sozialrecht',company:'Gesellschaftsrecht',constitution:'Verfassungsrecht'}},
    en: {language:'Language',skip:'Skip to preview',label:'Free preview · 8 questions',title:'Cassatie of Cel?',lede:'Eight cases. One wrong answer and it’s the cell. Ready to plead your case?',start:'Play the preview',pills:['8 real questions','Explanations & legal sources','No account'],note:'This is a limited taste, not a full game run. The full game has over 1,000 questions, lifelines, abilities, difficulty levels and a study mode.',stepTitles:['Read the case','Choose your answer','Explore the legal source'],stepTexts:['Opposing counsel is confident. Rightly so?','One mistake ends this preview run.','Read the explanation, check the source and try again.'],question:'Case',of:'of',choose:'What do you plead?',hint:'A tip from the clerk',right:'Well pleaded.',wrong:'Off to the cell.',correct:'Correct answer',picked:'Your answer',explain:'The legal explanation',next:'Next case',finish:'See your result',retry:'Try again',restart:'Restart preview',back:'Discover the full game',source:'Read article',official:'Official text (Justel, French)',sourceNote:'Sources open in a new tab; legislation is available in French.',privacy:'No account, tracking or saved progress. This preview does not send your answers anywhere.',won:'Acquitted. Well pleaded!',wonText:'You won all eight cases in this preview. Ready to go beyond this short introduction?',full:'In the full game, build a run with lifelines and abilities, choose a difficulty and practise in study mode.',score:'8 of 8 correct',failNote:'Your run ends here. Find out why the other answer is correct, then try again.',fields:{procedure:'Judicial procedure',consumer:'Consumer law',evidence:'Evidence',liability:'Civil liability',property:'Property law',employment:'Social law',company:'Company law',constitution:'Constitutional law'}},
  };
  UI.nl.fields.criminal='Nieuw strafrecht';
  UI.fr.fields.criminal='Nouveau droit pénal';
  UI.de.fields.criminal='Neues Strafrecht';
  UI.en.fields.criminal='New criminal law';
  const BRANDS={nl:['Cassatie','of','Cel'],fr:['Cassation','ou','Cachot'],de:['Kassation','oder','Knast'],en:['Cassation','or','Cell']};
  for(const language of Object.keys(UI)) UI[language].title=BRANDS[language].join(' ')+(language==='fr'?' ?':'?');
  const main = document.querySelector('main');
  const selector = document.querySelector('#language');
  const param = new URLSearchParams(location.search).get('lang');
  let lang = Object.hasOwn(UI, param) ? param : (Object.hasOwn(UI, document.documentElement.lang) ? document.documentElement.lang : 'nl');
  let state = {screen:'intro', index:0, order:[], picked:null};
  const text = key => UI[lang][key];
  function element(tag, className, content) {
    const result = document.createElement(tag);
    if (className) result.className = className;
    if (content != null) result.textContent = content;
    return result;
  }
  function button(label, className, action) {
    const result = element('button', className, label);
    result.type = 'button'; result.addEventListener('click', action); return result;
  }
  function landingLink() { const link = element('a', 'primary', text('back')); link.href = `../?lang=${lang}`; return link; }
  function shuffledOptions() {
    const order = [0,1,2,3];
    for (let i=order.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [order[i],order[j]]=[order[j],order[i]]; }
    return order;
  }
  function start() { state={screen:'case',index:0,order:shuffledOptions(),picked:null}; render(true); }
  function next() {
    if (state.picked !== DATA.questions[state.index].correct) return;
    if (state.index === DATA.questions.length-1) state.screen='complete';
    else {state.index++;state.order=shuffledOptions();state.picked=null;}
    render(true);
  }
  function sourceLink(href, label) {
    const link=element('a','',label); const url=new URL(href);
    if (url.protocol !== 'https:') throw new Error('Invalid legal source');
    link.href=url.href; link.target='_blank'; link.rel='noopener noreferrer'; return link;
  }
  function sources(question) {
    const {numac,anchor,article}=question.source;
    const brands={nl:['wetwijzer.be',1],fr:['lisloi.be',2],de:['gesetzguide.be',2],en:['lexlibera.be',2]};
    const [domain,languageId]=brands[lang]; const nl=lang==='nl';
    const links=element('div','sources');
    links.append(sourceLink(`https://${domain}/laws/${encodeURIComponent(numac)}?language_id=${languageId}#${encodeURIComponent(anchor)}`,`${text('source')} ${article} · ${domain}`));
    // Same numac-only lookup and real Art.<number> anchor as the full game's justelUrl.
    // This is the official CGI resolver, not a constructed ELI promulgation date.
    links.append(sourceLink(`https://www.ejustice.just.fgov.be/cgi_loi/change_lg_2.pl?language=${nl?'nl':'fr'}&nm=${encodeURIComponent(numac)}&la=${nl?'N':'F'}#Art.${encodeURIComponent(article)}`,text('official')));
    return links;
  }
  function renderIntro() {
    const hero=element('section','hero');
    hero.append(element('p','eyebrow',text('label')),element('h1','',text('title')),element('p','lede',text('lede')));
    const pills=element('div','pill-row'); for(const pill of text('pills')) pills.append(element('span','pill',pill));
    hero.append(pills,button(text('start'),'primary',start),element('p','intro-note',text('note')));
    const steps=element('div','steps');
    text('stepTitles').forEach((title,index)=>{const step=element('div','step');step.append(element('div','step-number',String(index+1).padStart(2,'0')),element('strong','',title),element('p','',text('stepTexts')[index]));steps.append(step);});
    hero.append(steps);main.append(hero);
  }
  function renderCase() {
    const question=DATA.questions[state.index]; const answered=state.picked!==null; const correct=state.picked===question.correct;
    const header=element('div','case-header');header.append(element('span','',text('label')),element('span','',`${text('question')} ${state.index+1} ${text('of')} ${DATA.questions.length}`));
    const progress=element('div','progress');progress.setAttribute('aria-hidden','true');
    DATA.questions.forEach((_,index)=>progress.append(element('span',index<state.index?'done':index===state.index?'current':'')));
    main.append(header,progress);
    const card=element('section','case-card'); card.setAttribute('aria-labelledby','question');
    card.append(element('p','eyebrow',text('fields')[question.field]));
    const heading=element('h1','question',question.question[lang]);heading.id='question';heading.tabIndex=-1;card.append(heading);
    const answers=element('div','answers'); answers.setAttribute('role','group');answers.setAttribute('aria-label',text('choose'));
    for(const [position,original] of state.order.entries()) {
      const answer=button('',`answer${answered&&original===question.correct?' correct':''}${answered&&original===state.picked&&!correct?' wrong':''}`,()=>{if(state.picked!==null)return;state.picked=original;render(true);});
      answer.disabled=answered;
      const letter=element('span','answer-letter',String.fromCharCode(65+position));letter.setAttribute('aria-hidden','true');
      const content=element('span','',question.answers[original][lang]);
      if(answered&&(original===question.correct||original===state.picked)) content.append(element('span','answer-label',original===question.correct?text('correct'):text('picked')));
      answer.append(letter,content);answers.append(answer);
    }
    card.append(answers);
    const hint=element('details','hint');hint.append(element('summary','',text('hint')),element('p','',question.hint[lang]));card.append(hint);main.append(card);
    if(answered) {
      const feedback=element('section',`feedback${correct?'':' failure'}`);feedback.setAttribute('aria-labelledby','result-title');
      const resultTitle=element('h2','',correct?text('right'):text('wrong'));resultTitle.id='result-title';resultTitle.tabIndex=-1;
      feedback.append(resultTitle);
      if(!correct) feedback.append(element('p','',text('failNote')));
      feedback.append(element('h3','',text('explain')),element('p','',question.explanation[lang]),sources(question),element('p','source-note',text('sourceNote')));
      const actions=element('div','actions');
      actions.append(correct?button(text(state.index===DATA.questions.length-1?'finish':'next'),'primary',next):button(text('retry'),'primary',start));
      if(!correct) {const link=landingLink();link.className='secondary';actions.append(link);}
      feedback.append(actions);main.append(feedback);
    }
    const bottom=element('div','case-bottom');bottom.append(button(text('restart'),'',()=>{state={screen:'intro',index:0,order:[],picked:null};render(true);}));main.append(bottom);
  }
  function renderComplete() {
    const section=element('section','summary');
    section.append(element('p','eyebrow',text('label')),element('h1','',text('won')),element('p','score','8 / 8'),element('p','',text('wonText')),element('p','',text('full')));
    section.querySelector('.score').setAttribute('aria-label',text('score'));
    const actions=element('div','actions');actions.append(landingLink(),button(text('retry'),'secondary',start));section.append(actions);main.append(section);
  }
  function render(focus=false) {
    document.documentElement.lang=lang; selector.value=lang;
    const brand=BRANDS[lang],name=brand.join(' '),wordmark=document.querySelector('.wordmark');
    wordmark.replaceChildren(document.createTextNode(`${brand[0]} `),element('span','',brand[1]),document.createTextNode(` ${brand[2]}`));
    wordmark.setAttribute('aria-label',name);wordmark.href=`../?lang=${lang}`;
    document.title=`${name} — ${text('label')}`;
    document.querySelector('meta[name="description"]').content=`${name}: ${text('label')}. ${text('note')}`;
    document.querySelector('label[for="language"]').textContent=text('language'); document.querySelector('.skip-link').textContent=text('skip');
    document.querySelector('#privacy').textContent=text('privacy'); const footer=document.querySelector('#footer-link');footer.textContent=text('back');footer.href=`../?lang=${lang}`;
    main.replaceChildren();
    if(state.screen==='intro')renderIntro();else if(state.screen==='complete')renderComplete();else renderCase();
    if(focus) {const target=main.querySelector('#result-title')||main.querySelector('h1')||main;target.tabIndex=-1;target.focus({preventScroll:true});}
    if(focus) (main.querySelector('#result-title')||main).scrollIntoView({block:'start',behavior:'instant'});
  }
  selector.addEventListener('change',()=>{if(Object.hasOwn(UI,selector.value)){lang=selector.value;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);render();}});
  if(!DATA||DATA.questions.length!==8) {main.append(element('p','failed-load','Preview unavailable. Please reload or return to Cassatie of Cel.'));return;}
  render();
})();
