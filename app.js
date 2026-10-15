/**
 * OmnivoMath™ — Platformă Interactivă de Meditații & Mentorat Matematică / IT
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Curricula Data for Each Student Profile
  // -------------------------------------------------------------
  const PROFILES = {
    anne: {
      name: "Anne Stenopol",
      curriculum: "Pregătire Gimnaziu (Clasa 4 ➔ 5)",
      pace: "60 - 90 min (Ritm răbdător, explicativ)",
      pricing: "Buget redus / Voluntariat comunitar",
      topicBadge: "METODA SEGMENTELOR / GRAFICĂ",
      problems: [
        {
          id: 1,
          title: "Problema #1 — Sumă și Raport",
          statement: "Suma a două numere este 48, iar unul dintre numere este de 3 ori mai mare decât celălalt. Află cele două numere folosind metoda grafică a segmentelor.",
          labels: ["Numărul mic (a):", "Numărul mare (b):"],
          correct: [12, 36],
          diagramHtml: `
            <div class="segment-row">
              <span>Numărul mic (1 seg):</span>
              <div class="segment-bar one">x</div>
            </div>
            <div class="segment-row">
              <span>Numărul mare (3 seg):</span>
              <div class="segment-bar three">
                <div class="sub-seg">x</div>
                <div class="sub-seg">x</div>
                <div class="sub-seg">x</div>
              </div>
            </div>
            <div class="diagram-sum">Total = 4 segmente egale = 48</div>
          `,
          explanation: [
            "Reprezentăm numărul mic printr-un segment [x].",
            "Numărul mare este de 3 ori mai mare, deci are 3 segmente egale [x][x][x].",
            "Total segmente egale: 1 + 3 = 4 segmente.",
            "Aflăm valoarea unui segment: 48 ÷ 4 = 12 (numărul mic).",
            "Aflăm numărul mare: 12 × 3 = 36.",
            "Verificare: 12 + 36 = 48. Răspuns corect: 12 și 36."
          ]
        },
        {
          id: 2,
          title: "Problema #2 — Diferență și Raport",
          statement: "Diferența a două numere este 35, iar împărțind numărul mare la cel mic obținem câtul 6 și restul 0. Află cele două numere.",
          labels: ["Numărul mic (a):", "Numărul mare (b):"],
          correct: [7, 42],
          diagramHtml: `
            <div class="segment-row">
              <span>Numărul mic (1 seg):</span>
              <div class="segment-bar one">x</div>
            </div>
            <div class="segment-row">
              <span>Numărul mare (6 seg):</span>
              <div class="segment-bar" style="width: 280px;">
                <div class="sub-seg">x</div><div class="sub-seg">x</div><div class="sub-seg">x</div>
                <div class="sub-seg">x</div><div class="sub-seg">x</div><div class="sub-seg">x</div>
              </div>
            </div>
            <div class="diagram-sum">Diferența = 5 segmente = 35</div>
          `,
          explanation: [
            "Câtul 6 înseamnă că numărul mare are 6 segmente, iar cel mic 1 segment.",
            "Diferența dintre ele este de 6 - 1 = 5 segmente egale.",
            "Cele 5 segmente valorează 35, deci 1 segment = 35 ÷ 5 = 7 (numărul mic).",
            "Numărul mare este 7 × 6 = 42.",
            "Verificare: 42 - 7 = 35. Corect!"
          ]
        }
      ]
    },

    alex_ceo: {
      name: "Alex CEO",
      curriculum: "Business Math, Marje & Calcul Mental Rapid",
      pace: "120 min (2 ore / ritm dinamic, decizional)",
      pricing: "Optimizare marjă & eficiență executivă",
      topicBadge: "MARJE COMERCIALE & CALCUL RAPID",
      problems: [
        {
          id: 1,
          title: "Scenariu Business #1 — Marjă Brută vs Adaos",
          statement: "Un produs este achiziționat cu 150 RON și este vândut cu un adaos comercial de 40%. Care este prețul final de vânzare și care este marja procentuală din încasare (Gross Margin %)?",
          labels: ["Preț vânzare (RON):", "Marjă din vânzare (% rotunjit):"],
          correct: [210, 29],
          diagramHtml: `
            <div class="segment-row">
              <span>Cost achiziție (COGS):</span>
              <div class="segment-bar" style="width: 140px; border-color: #64748b;">150 RON</div>
            </div>
            <div class="segment-row">
              <span>Adaos 40% (+60 RON):</span>
              <div class="segment-bar" style="width: 200px; border-color: var(--gold);">210 RON Total</div>
            </div>
            <div class="diagram-sum">Profit Brut = 60 RON | Marjă = 60 / 210 = 28.57% (29%)</div>
          `,
          explanation: [
            "Adaosul de 40% se aplică la cost: 150 × 0.40 = 60 RON profit brut.",
            "Prețul de vânzare: 150 + 60 = 210 RON.",
            "Marja brută din cifra de afaceri: Profit / Vânzare = 60 / 210 = 28.57% ~ 29%.",
            "Regulă CEO de aur: Nu confunda niciodată adaosul comercial (Markup) cu marja din vânzare (Margin)!"
          ]
        },
        {
          id: 2,
          title: "Scenariu Business #2 — Break-Even Point (Prag Rentabilitate)",
          statement: "Costurile fixe lunare ale agenției sunt 12.000 RON. Marja brută per proiect web vândut este 3.000 RON. Câte proiecte trebuie livrate lunar pentru a atinge pragul de rentabilitate (Break-Even) și ce profit aduc 7 proiecte?",
          labels: ["Proiecte la Break-Even:", "Profit la 7 proiecte (RON):"],
          correct: [4, 9000],
          diagramHtml: `
            <div class="segment-row">
              <span>Costuri fixe lunare:</span>
              <div class="segment-bar" style="width: 200px;">12.000 RON</div>
            </div>
            <div class="diagram-sum">Break-Even = 12.000 ÷ 3.000 = 4 proiecte</div>
          `,
          explanation: [
            "Pragul de rentabilitate = Costuri Fixe ÷ Marjă per Proiect = 12.000 ÷ 3.000 = 4 proiecte.",
            "La 7 proiecte: Cifra brută = 7 × 3.000 = 21.000 RON.",
            "Profit net: 21.000 - 12.000 = 9.000 RON."
          ]
        }
      ]
    },

    marius_dami: {
      name: "Marius & Dami",
      curriculum: "Fundamente IT, Matematică Binară & Job Prep",
      pace: "Ședințe de weekend (Mate + Calculator + Job)",
      pricing: "Dezvoltare profesională & parteneriat",
      topicBadge: "SISTEME DE NUMERAȚIE & LOGICĂ IT",
      problems: [
        {
          id: 1,
          title: "Modul IT #1 — Conversie Binară în Zecimal",
          statement: "În programare și rețele, o adresă IP sau un octet (byte) folosește 8 biți. Convertește numărul binar 00101010 în sistemul zecimal și numărul binar 11111111.",
          labels: ["Zecimal pentru 00101010:", "Zecimal pentru 11111111:"],
          correct: [42, 255],
          diagramHtml: `
            <div class="segment-row">
              <span>Puteri ale lui 2:</span>
              <div class="segment-bar" style="width: 280px; font-size: 0.75rem;">
                <div class="sub-seg">128</div><div class="sub-seg">64</div><div class="sub-seg">32</div><div class="sub-seg">16</div>
                <div class="sub-seg">8</div><div class="sub-seg">4</div><div class="sub-seg">2</div><div class="sub-seg">1</div>
              </div>
            </div>
            <div class="diagram-sum">00101010 = 32 + 8 + 2 = 42 | 11111111 = 255</div>
          `,
          explanation: [
            "Fiecare bit are o putere a lui 2: 128, 64, 32, 16, 8, 4, 2, 1.",
            "Pentru 00101010: bitii 1 sunt la pozițiile 32, 8 și 2 -> 32 + 8 + 2 = 42.",
            "Pentru 11111111: toți cei 8 biți sunt 1 -> suma lor este 255 (valoarea maximă pe 1 byte!)."
          ]
        }
      ]
    }
  };

  // State
  let currentStudentKey = 'anne';
  let currentProblemIndex = 0;
  let correctScore = 0;
  let totalAttempts = 0;

  // DOM Elements
  const studentSelect = document.getElementById('studentSelect');
  const statStudentName = document.getElementById('statStudentName');
  const statCurriculum = document.getElementById('statCurriculum');
  const statPace = document.getElementById('statPace');
  const statPricing = document.getElementById('statPricing');
  const statScore = document.getElementById('statScore');
  const problemTopicBadge = document.getElementById('problemTopicBadge');
  const problemTitle = document.getElementById('problemTitle');
  const problemStatement = document.getElementById('problemStatement');
  const visualDiagramBox = document.getElementById('visualDiagramBox');
  const labelInputA = document.getElementById('labelInputA');
  const labelInputB = document.getElementById('labelInputB');
  const inputA = document.getElementById('inputA');
  const inputB = document.getElementById('inputB');
  const answerForm = document.getElementById('answerForm');
  const feedbackAlert = document.getElementById('feedbackAlert');
  const btnShowStepByStep = document.getElementById('btnShowStepByStep');
  const explanationBox = document.getElementById('explanationBox');
  const explanationSteps = document.getElementById('explanationSteps');
  const btnNewProblem = document.getElementById('btnNewProblem');

  function loadProfile(key) {
    currentStudentKey = key;
    currentProblemIndex = 0;
    const p = PROFILES[key];

    statStudentName.textContent = p.name;
    statCurriculum.textContent = p.curriculum;
    statPace.textContent = p.pace;
    statPricing.textContent = p.pricing;
    problemTopicBadge.textContent = p.topicBadge;

    loadProblem(0);
  }

  function loadProblem(idx) {
    const p = PROFILES[currentStudentKey];
    const prob = p.problems[idx % p.problems.length];

    problemTitle.textContent = prob.title;
    problemStatement.textContent = prob.statement;
    labelInputA.textContent = prob.labels[0];
    labelInputB.textContent = prob.labels[1];
    visualDiagramBox.innerHTML = `
      <div class="diagram-title">Visual Hint / Reprezentare Didactică:</div>
      ${prob.diagramHtml}
    `;

    inputA.value = '';
    inputB.value = '';
    feedbackAlert.style.display = 'none';
    explanationBox.style.display = 'none';

    explanationSteps.innerHTML = prob.explanation.map(step => `<li>${step}</li>`).join('');
  }

  studentSelect.addEventListener('change', (e) => {
    loadProfile(e.target.value);
  });

  btnNewProblem.addEventListener('click', () => {
    currentProblemIndex++;
    loadProblem(currentProblemIndex);
  });

  answerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    totalAttempts++;

    const p = PROFILES[currentStudentKey];
    const prob = p.problems[currentProblemIndex % p.problems.length];

    const valA = parseFloat(inputA.value);
    const valB = parseFloat(inputB.value);

    const isCorrect = (valA === prob.correct[0] && valB === prob.correct[1]);

    feedbackAlert.style.display = 'block';
    if (isCorrect) {
      correctScore++;
      feedbackAlert.className = 'feedback-alert success';
      feedbackAlert.textContent = `🎉 Felicitări, răspuns impecabil! [${valA}] și [${valB}] sunt valorile corecte.`;
    } else {
      feedbackAlert.className = 'feedback-alert error';
      feedbackAlert.textContent = `❌ Aproape! Verifică din nou calculele sau dă click pe „Vezi Explicația Pas cu Pas” pentru îndrumare.`;
    }

    statScore.textContent = `${correctScore} / ${totalAttempts}`;
  });

  btnShowStepByStep.addEventListener('click', () => {
    explanationBox.style.display = explanationBox.style.display === 'none' ? 'block' : 'none';
  });

  // -------------------------------------------------------------
  // 2. Virtual Scratchpad & Whiteboard Canvas
  // -------------------------------------------------------------
  const canvas = document.getElementById('whiteboardCanvas');
  const ctx = canvas.getContext('2d');
  const btnClearCanvas = document.getElementById('btnClearCanvas');
  const canvasColorPicker = document.getElementById('canvasColorPicker');
  const btnSaveNotes = document.getElementById('btnSaveNotes');

  let isDrawing = false;
  let currentColor = '#d4af37';

  // Responsive canvas size adjustment
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 380;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  canvasColorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
  });

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function startDraw(e) {
    isDrawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e) {
    if (!isDrawing) return;
    const pos = getPos(e);
    ctx.strokeStyle = currentColor;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDraw() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);

  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDraw(e); }, { passive: false });
  canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); }, { passive: false });
  canvas.addEventListener('touchend', stopDraw);

  btnClearCanvas.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  btnSaveNotes.addEventListener('click', () => {
    window.print();
  });

  // -------------------------------------------------------------
  // 3. Student Session Log
  // -------------------------------------------------------------
  const sessionLogBody = document.getElementById('sessionLogBody');
  const btnAddSessionLog = document.getElementById('btnAddSessionLog');

  let sessionLogs = [
    { date: "09 Oct 2026", student: "Anne Stenopol", topics: "Metoda Segmentelor (Suma & Câtul)", status: "Însușit 85%", homework: "Fișa #3 exercițiile 1-5", notes: "Ritm bun, vizualizarea pe segmente colorate a ajutat mult." },
    { date: "07 Oct 2026", student: "Alex CEO", topics: "Markup vs Margin, BEP & Scalare", status: "Stăpânit 100%", homework: "Calcul marjă pe 3 oferte noi", notes: "Sesiune intensivă de 2h, claritate maximă pe calcul procentual." },
    { date: "04 Oct 2026", student: "Marius & Dami", topics: "Conversie Binară & Logica Booleană", status: "În progres", homework: "Tabele de adevăr AND/OR", notes: "Pregătire pentru interviu tehnic entry-level și lucru pe calculator." }
  ];

  function renderSessionLogs() {
    if (!sessionLogBody) return;
    sessionLogBody.innerHTML = sessionLogs.map(log => `
      <tr>
        <td><strong>${log.date}</strong></td>
        <td><span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa;">${log.student}</span></td>
        <td>${log.topics}</td>
        <td><span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">${log.status}</span></td>
        <td>${log.homework}</td>
        <td style="color: var(--text-muted); font-size: 0.8rem;">${log.notes}</td>
      </tr>
    `).join('');
  }

  if (btnAddSessionLog) {
    btnAddSessionLog.addEventListener('click', () => {
      const p = PROFILES[currentStudentKey];
      const today = new Date().toLocaleDateString('ro-RO', { day: '2-digit', month: 'short', year: 'numeric' });
      const newEntry = {
        date: today,
        student: p.name,
        topics: p.topicBadge,
        status: "Finalizat cu succes",
        homework: "Exerciții interactive pe OmnivoMath",
        notes: "Sesiune parcursă conform planului didactic."
      };
      sessionLogs.unshift(newEntry);
      renderSessionLogs();
      alert(`✓ Ședința pentru ${p.name} a fost înregistrată în jurnal!`);
    });
  }

  // Initial render
  loadProfile('anne');
  renderSessionLogs();
});
