const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];const CH=[["1", "Imperialismus", "Europäische Großmächte strebten nach Kolonien, Rohstoffen, Absatzmärkten, Prestige und strategischem Einfluss. Rassistische Weltbilder dienten zur Rechtfertigung von Herrschaft und Gewalt.", "Motive: Wirtschaft, Macht, Prestige, Strategie|Folgen: Ausbeutung, Gewalt, Grenzziehungen|Deutsche Kolonialpolitik und historische Verantwortung"], ["2", "Pulverfass Europa", "Nationalismus, Militarismus, Wettrüsten, Konflikte um Kolonien und Krisen auf dem Balkan verschärften die Lage. Europa war nicht zwangsläufig auf Krieg festgelegt, aber Krisen wurden gefährlicher.", "Flottenwettrüsten Deutschland–Großbritannien|Deutsch-französischer Gegensatz|Balkankrisen und Großmachtinteressen"], ["3", "Bündnissystem", "Dreibund und Triple Entente sollten Sicherheit schaffen, teilten Europa aber in Machtblöcke. Mobilmachungspläne und Beistandserwartungen erhöhten in einer Krise den Zeitdruck.", "Dreibund: Deutsches Reich, Österreich-Ungarn, Italien|Triple Entente: Frankreich, Russland, Großbritannien|Italien blieb 1914 zunächst neutral"], ["4", "Sarajevo und Julikrise", "Am 28. Juni 1914 wurden Franz Ferdinand und Sophie in Sarajevo ermordet. In der Julikrise trafen Regierungen Entscheidungen, die den lokalen Konflikt zum europäischen Krieg ausweiteten.", "Blankoscheck|Ultimatum an Serbien|Mobilmachungen und Kriegserklärungen"], ["5", "Vom Bewegungs- zum Stellungskrieg", "Der Schlieffenplan sah einen schnellen Angriff gegen Frankreich über Belgien vor. Nach der Marneschlacht erstarrte die Westfront. Schützengräben, Maschinengewehre und Artillerie begünstigten die Verteidigung.", "Marneschlacht 1914|Verdun und Somme 1916|Materialschlacht"], ["6", "Moderner Krieg und Heimatfront", "Der industrialisierte Krieg setzte Artillerie, Maschinengewehre, Giftgas, U-Boote, Flugzeuge und Panzer ein. An der Heimatfront prägten Kriegswirtschaft, Propaganda, Hunger und Verlust den Alltag.", "Totalisierung des Kriegs|Britische Seeblockade|Frauen in neuen Arbeitsbereichen"], ["7", "Kriegswende 1917/18", "1917 traten die USA in den Krieg ein. Russland schied nach Revolution und Frieden von Brest-Litowsk aus. 1918 scheiterten deutsche Offensiven; die Mittelmächte waren erschöpft.", "Uneingeschränkter U-Boot-Krieg|US-Truppen und Ressourcen|Novemberrevolution und Waffenstillstand"], ["8", "Folgen und Versailles", "Der Krieg kostete Millionen Menschen das Leben, stürzte Monarchien und veränderte Grenzen. Der Versailler Vertrag belastete Deutschland mit Gebietsverlusten, Abrüstung, Reparationen und Artikel 231.", "11. November 1918: Waffenstillstand|28. Juni 1919: Versailler Vertrag|Urkatastrophe des 20. Jahrhunderts"]],TL=[["28.06.1914", "Attentat von Sarajevo", "Ermordung des österreichisch-ungarischen Thronfolgers Franz Ferdinand und seiner Frau Sophie."], ["05.–06.07.1914", "Blankoscheck", "Die deutsche Führung sagt Österreich-Ungarn weitreichende Unterstützung zu."], ["23.07.1914", "Ultimatum an Serbien", "Österreich-Ungarn stellt sehr weitgehende Forderungen."], ["28.07.1914", "Kriegserklärung", "Österreich-Ungarn erklärt Serbien den Krieg."], ["03.–04.08.1914", "Krieg im Westen", "Deutschland erklärt Frankreich den Krieg, marschiert in Belgien ein; Großbritannien tritt ein."], ["Sept. 1914", "Marneschlacht", "Der deutsche Vormarsch wird gestoppt. Der Stellungskrieg entwickelt sich."], ["1916", "Verdun und Somme", "Materialschlachten mit sehr hohen Verlusten."], ["1917", "Kriegswende", "USA treten ein; Revolutionen erschüttern Russland."], ["03.03.1918", "Brest-Litowsk", "Russland scheidet aus dem Krieg aus."], ["09.–11.11.1918", "Revolution und Waffenstillstand", "Ende der Monarchie im Deutschen Reich und Ende der Kämpfe."], ["28.06.1919", "Versailler Vertrag", "Friedensvertrag mit weitreichenden Folgen für Deutschland und Europa."]],ESC=[["AKTE 01 · SPANNUNGEN", "Das Pulverfass", "Ordne die vier langfristigen Spannungsfaktoren zu. Welcher Begriff gehört NICHT dazu?", ["Nationalismus", "Imperialismus", "Wettrüsten", "Allgemeine Abrüstung"], 3, "assets/europa1914.png"], ["AKTE 02 · BÜNDNISSE", "Europa in Blöcken", "Welche Staatengruppe bildete die Triple Entente?", ["Deutschland, Österreich-Ungarn, Italien", "Frankreich, Russland, Großbritannien", "Serbien, USA, Osmanisches Reich"], 1, "assets/europa1914.png"], ["AKTE 03 · AUSLÖSER", "Sarajevo", "Welches Ereignis löste die Julikrise unmittelbar aus?", ["Attentat auf Franz Ferdinand", "Versailler Vertrag", "Russische Revolution"], 0, "assets/mobilmachung.png"], ["AKTE 04 · ESKALATION", "Die Julikrise", "Welche Kette ist chronologisch richtig?", ["Ultimatum → Blankoscheck → Attentat", "Attentat → Blankoscheck → Ultimatum → Kriegserklärung", "Kriegserklärung → Attentat → Mobilmachung"], 1, "assets/mobilmachung.png"], ["AKTE 05 · FRONT", "Der moderne Krieg", "Warum entwickelte sich der Stellungskrieg?", ["Verteidigungswaffen und Schützengräben stoppten schnelle Angriffe", "Alle Armeen hatten keine Munition", "Es wurde nur auf See gekämpft"], 0, "assets/schuetzengraben.png"], ["AKTE 06 · URTEIL", "Historische Verantwortung", "Welche Aussage ist fachlich am besten?", ["Nur das Attentat verursachte den Krieg", "Langfristige Ursachen, der Anlass und eskalierende Entscheidungen mehrerer Regierungen müssen unterschieden werden", "Der Krieg war ohne Entscheidungen unvermeidbar"], 1, "assets/schuetzengraben.png"]];let completed=+(localStorage.histXP||0),pool=[],pos=0,points=0,locked=false,escPos=0;function xp(){$('#xp').textContent=Math.min(100,completed)+'%'}function show(id){$$('.page').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');scrollTo(0,0);if(id==='learn')renderLearn();if(id==='timeline')renderTL();xp()}function renderLearn(){$('#chapters').innerHTML=CH.map(c=>`<article class="chapter"><label>KAPITEL ${c[0]}</label><h3>${c[1]}</h3><p>${c[2]}</p><details><summary>PRÜFUNGSWISSEN ÖFFNEN</summary><ul>${c[3].split('|').map(x=>`<li>${x}</li>`).join('')}</ul></details></article>`).join('')}function renderTL(){$('#tl').innerHTML=TL.map(e=>`<article class="event"><b>${e[0]}</b><div><h3>${e[1]}</h3><p>${e[2]}</p></div></article>`).join('')}function shuffle(a){return [...a].sort(()=>Math.random()-.5)}function startQuiz(m){pool=m==='exam'?shuffle(QUESTIONS).slice(0,20):shuffle(QUESTIONS);pos=0;points=0;$('#mode').textContent=m==='exam'?'ABSCHLUSSPRÜFUNG':'FRAGENTRAINING';show('quiz');renderQ()}function renderQ(){locked=false;let q=pool[pos];$('#counter').textContent=`${pos+1} / ${pool.length}`;$('#category').textContent=q.cat.toUpperCase();$('#score').textContent=`${points} PUNKTE`;$('#qbar').style.width=`${pos/pool.length*100}%`;$('#question').textContent=q.q;$('#answers').innerHTML=q.o.map((x,i)=>`<button class="answer" onclick="answer(${i})">${String.fromCharCode(65+i)} · ${x}</button>`).join('');$('#explain').textContent='';$('#next').style.display='none'}function answer(i){if(locked)return;locked=true;let q=pool[pos];$$('.answer').forEach((b,n)=>{if(n===q.a)b.classList.add('correct');if(n===i&&i!==q.a)b.classList.add('wrong');b.disabled=true});if(i===q.a)points++;$('#explain').innerHTML=`<b>${i===q.a?'RICHTIG':'NOCH NICHT RICHTIG'}</b><br>${q.e}`;$('#next').style.display='block'}function nextQ(){pos++;if(pos>=pool.length){completed=Math.max(completed,Math.round(points/pool.length*100));localStorage.histXP=completed;$('#resultTitle').textContent=points/pool.length>=.8?'SEHR STARK.':'WEITER LERNEN.';$('#resultText').textContent=`Du hast ${points} von ${pool.length} Fragen richtig beantwortet.`;$('#resultScore').className='resultScore';$('#resultScore').textContent=Math.round(points/pool.length*100)+' %';show('result')}else renderQ()}function startEscape(){escPos=0;show('escape');renderCase()}function renderCase(){if(escPos>=ESC.length){completed=Math.max(completed,75);localStorage.histXP=completed;$('#resultTitle').textContent='AKTEN GESICHERT.';$('#resultText').textContent='Du hast die Vorgeschichte, Eskalation und Kriegsführung korrekt rekonstruiert.';$('#resultScore').textContent='6 / 6 AKTEN';show('result');return}let e=ESC[escPos];$('#caseNo').textContent=`${escPos+1}/${ESC.length}`;$('#caseTag').textContent=e[0];$('#caseTitle').textContent=e[1];$('#caseText').textContent=e[2];$('#caseImg').src=e[5];$('#caseFeedback').textContent='';$('#caseTask').innerHTML=e[3].map((x,i)=>`<button class="caseOpt" onclick="caseAnswer(${i})">${x}</button>`).join('')}function caseAnswer(i){let e=ESC[escPos];if(i!==e[4]){$('#caseFeedback').textContent='Diese Spur passt nicht. Prüfe die Zusammenhänge erneut.';return}$('#caseFeedback').textContent='AKTE GESICHERT · NÄCHSTE AKTE WIRD GELADEN';escPos++;setTimeout(renderCase,700)}xp();
// Version 3: 25 Akten und Freischaltung der Simulation
function startEscape(){escPos=+(localStorage.historyEscapeCase||0);if(escPos>=window.ESCAPE_CASES.length)escPos=0;show('escape');renderCase()}
function renderCase(){const list=window.ESCAPE_CASES;if(escPos>=list.length){localStorage.historyEscapeUnlocked='true';localStorage.removeItem('historyEscapeCase');completed=Math.max(completed,100);localStorage.histXP=completed;document.querySelector('#resultTitle').textContent='25 AKTEN GESICHERT.';document.querySelector('#resultText').textContent='Du hast das gesamte historische Archiv rekonstruiert. Oberkommando 1914 ist jetzt freigeschaltet.';document.querySelector('#resultScore').innerHTML='25 / 25 AKTEN<br><button class="primary" onclick="location.href=\'simulation.html\'">SIMULATION STARTEN →</button>';updateSimulationLock();show('result');return}const e=list[escPos];document.querySelector('#caseNo').textContent=`${escPos+1}/${list.length}`;document.querySelector('#caseTag').textContent=e[0];document.querySelector('#caseTitle').textContent=e[1];document.querySelector('#caseText').textContent=e[2];document.querySelector('#caseImg').src=e[5];document.querySelector('#caseFeedback').textContent='';document.querySelector('#caseTask').innerHTML=e[3].map((x,i)=>`<button class="caseOpt" onclick="caseAnswer(${i})">${x}</button>`).join('')}
function caseAnswer(i){const e=window.ESCAPE_CASES[escPos];if(i!==e[4]){document.querySelector('#caseFeedback').textContent='Diese Spur passt nicht. Prüfe Quelle und Zusammenhang erneut.';return}document.querySelector('#caseFeedback').innerHTML=`AKTE GESICHERT · ${e[6]}`;document.querySelectorAll('.caseOpt').forEach(b=>b.disabled=true);escPos++;localStorage.historyEscapeCase=escPos;setTimeout(renderCase,1250)}
function openSimulation(){if(localStorage.historyEscapeUnlocked==='true')location.href='simulation.html';else{alert('Die Simulation ist noch gesperrt. Löse zuerst alle 25 Akten im Escape-Game. Dein Fortschritt wird automatisch gespeichert.');startEscape()}}
function updateSimulationLock(){const unlocked=localStorage.historyEscapeUnlocked==='true',s=document.querySelector('#simulationStatus'),c=document.querySelector('#simulationCard');if(s)s.textContent=unlocked?'🔓 Simulation freigeschaltet':`🔒 ${+(localStorage.historyEscapeCase||0)}/25 Akten gelöst`;if(c)c.classList.toggle('unlocked',unlocked)}
updateSimulationLock();


// Version 3.1: Antwortpositionen bei jedem Aufruf zufaellig mischen
let currentQuizAnswer = -1;
let currentCaseAnswer = -1;
function shuffledAnswers(options, correctIndex) {
  const mixed = options.map((text, originalIndex) => ({ text, correct: originalIndex === correctIndex }));
  for (let i = mixed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  return mixed;
}
function renderQ(){
  locked=false;
  const q=pool[pos];
  const mixed=shuffledAnswers(q.o,q.a);
  currentQuizAnswer=mixed.findIndex(item=>item.correct);
  $('#counter').textContent=`${pos+1} / ${pool.length}`;
  $('#category').textContent=q.cat.toUpperCase();
  $('#score').textContent=`${points} PUNKTE`;
  $('#qbar').style.width=`${pos/pool.length*100}%`;
  $('#question').textContent=q.q;
  $('#answers').innerHTML=mixed.map((item,i)=>`<button class="answer" onclick="answer(${i})">${String.fromCharCode(65+i)} · ${item.text}</button>`).join('');
  $('#explain').textContent='';
  $('#next').style.display='none';
}
function answer(i){
  if(locked)return;
  locked=true;
  const q=pool[pos];
  $$('.answer').forEach((button,index)=>{
    if(index===currentQuizAnswer)button.classList.add('correct');
    if(index===i&&i!==currentQuizAnswer)button.classList.add('wrong');
    button.disabled=true;
  });
  if(i===currentQuizAnswer)points++;
  $('#explain').innerHTML=`<b>${i===currentQuizAnswer?'RICHTIG':'NOCH NICHT RICHTIG'}</b><br>${q.e}`;
  $('#next').style.display='block';
}
function renderCase(){
  const list=window.ESCAPE_CASES;
  if(escPos>=list.length){
    localStorage.historyEscapeUnlocked='true';
    localStorage.removeItem('historyEscapeCase');
    completed=Math.max(completed,100);
    localStorage.histXP=completed;
    $('#resultTitle').textContent='25 AKTEN GESICHERT.';
    $('#resultText').textContent='Du hast das gesamte historische Archiv rekonstruiert. Oberkommando 1914 ist jetzt freigeschaltet.';
    $('#resultScore').innerHTML='25 / 25 AKTEN<br><button class="primary" onclick="location.href=\'simulation.html\'">SIMULATION STARTEN →</button>';
    updateSimulationLock();
    show('result');
    return;
  }
  const e=list[escPos];
  const mixed=shuffledAnswers(e[3],e[4]);
  currentCaseAnswer=mixed.findIndex(item=>item.correct);
  $('#caseNo').textContent=`${escPos+1}/${list.length}`;
  $('#caseTag').textContent=e[0];
  $('#caseTitle').textContent=e[1];
  $('#caseText').textContent=e[2];
  $('#caseImg').src=e[5];
  $('#caseFeedback').textContent='';
  $('#caseTask').innerHTML=mixed.map((item,i)=>`<button class="caseOpt" onclick="caseAnswer(${i})">${item.text}</button>`).join('');
}
function caseAnswer(i){
  const e=window.ESCAPE_CASES[escPos];
  if(i!==currentCaseAnswer){
    $('#caseFeedback').textContent='Diese Spur passt nicht. Prüfe Quelle und Zusammenhang erneut.';
    return;
  }
  $('#caseFeedback').innerHTML=`AKTE GESICHERT · ${e[6]}`;
  $$('.caseOpt').forEach(button=>button.disabled=true);
  escPos++;
  localStorage.historyEscapeCase=escPos;
  setTimeout(renderCase,1250);
}
