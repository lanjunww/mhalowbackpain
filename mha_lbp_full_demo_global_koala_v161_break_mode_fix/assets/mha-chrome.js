// Shared MHA header + footer rendering
(function(){
  const root = document.currentScript.dataset.root || '';
  const active = document.currentScript.dataset.active || '';

  const header = `
  <header class="top">
    <div class="top-inner">
      <a class="brand" href="${root}index.html">
        <img src="${root}assets/mha-logo.png" alt="Musculoskeletal Health Australia" />
        <span class="pipe"></span>
        <span class="sub"><span class="eyebrow">A sub-site of MHA</span><span class="name">Low Back Pain<span class="tag">RISK TOOL</span></span></span>
      </a>
      <div class="tagline">
        <div class="t1">A trusted source of information and support for over 50 years</div>
        <div class="t2"><span style="color:var(--teal)">Back pain</span><span class="dot"></span><span style="color:var(--teal)">Arthritis</span><span class="dot"></span><span style="color:var(--teal)">Musculoskeletal conditions</span></div>
      </div>
      <div class="contact-block">
        <div class="phone-line">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>
          <div class="stack"><span class="num">1800 263 265</span><a href="mailto:helpline@msk.org.au" class="lbl">B.A.M. Helpline</a></div>
        </div>
        <div class="auth-block">
          <a class="auth-link login" href="${root}signup.html?mode=login">Log in</a>
          <a class="auth-link signup" href="${root}signup.html?mode=signup">Sign up</a>
        </div>
        <a class="donate-btn" href="${root}get-involved.html">Donate Now</a>
      </div>
    </div>
  </header>
  <nav class="nav">
    <div class="nav-inner">
      <a href="${root}index.html" ${active==='home'?'class="active"':''}>Home</a>
      <a href="${root}weekly-plan.html" ${active==='plan'?'class="active"':''}>Weekly Plan</a>\n      <a href="${root}reminders.html" ${active==='reminders'?'class="active"':''}>Reminders</a>
      <a href="${root}get-informed.html" ${active==='informed'?'class="active"':''}>Get Informed</a>
      <a href="${root}get-supported.html" ${active==='support'?'class="active"':''}>Get Supported</a>
      <a href="${root}get-involved.html" ${active==='involved'?'class="active"':''}>Get Involved</a>
      <a href="${root}about.html" ${active==='about'?'class="active"':''}>About Us</a>
      <a href="${root}submissions.html">What's On</a>
      <a href="${root}contact-us.html" ${active==='contact'?'class="active"':''}>Contact Us</a>
      <a class="search" href="#" aria-label="Search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></a>
    </div>
  </nav>`;

  const footer = `
  <footer class="site">
    <div class="inner">
      <div>
        <div class="footer-brand"><span class="fb-name">Musculoskeletal Health Australia</span><span class="fb-tag">Knowledge · Choice · Connection</span></div>
        <p>Musculoskeletal Health Australia (or MHA) is the consumer organisation working with, and advocating on behalf of, people with arthritis, osteoporosis, back pain, gout and over 150 other musculoskeletal conditions.</p>
      </div>
      <div>
        <h4>Key Conditions</h4>
        <ul><li>Osteoarthritis</li><li>Rheumatoid Arthritis</li><li><strong>Back Pain</strong></li><li>Osteoporosis</li><li>Gout</li><li>Polymyalgia Rheumatica</li><li>Ankylosing Spondylitis</li><li>Fibromyalgia</li><li>JIA</li></ul>
      </div>
      <div>
        <h4>Useful Links</h4>
        <ul><li><a href="${root}contact-us.html">Contact us</a></li><li><a href="${root}about.html">Get to know MHA</a></li><li><a href="${root}get-involved.html">Get involved</a></li><li><a href="#">Downloads</a></li><li><a href="#">Advertising opportunities</a></li><li><a href="#">Terms &amp; conditions</a></li><li><a href="#">Privacy policy</a></li></ul>
      </div>
    </div>
    <div class="copy">
      <span>Copyright © Musculoskeletal Health Australia 2026. All rights reserved.</span>
      <span class="abn"><span><b>ABN:</b> 31 607 996 921</span><span><b>ACN:</b> 607 996 921</span></span>
    </div>
  </footer>`;


  const SESSION_KEY_GLOBAL = 'mha.session';

  function readMhaSession(){
    try { return JSON.parse(localStorage.getItem(SESSION_KEY_GLOBAL) || 'null'); } catch(e) { return null; }
  }

  function hasActiveMhaSession(){
    const s = readMhaSession();
    return !!(s && s.exp && s.exp > Date.now() && s.email);
  }

  function clearMhaUserData(){
    try {
      const prefixes = [
        'mha.session',
        'mha.userProfile',
        'mha.demoName',
        'mha.koala',
        'mha.dailyReminder',
        'mha.riskResult',
        'mha.educationReady',
        'mha.savedExplanation',
        'mha.weekly.done.v7',
        'mha.weekly.done.v8',
        'mha.plan',
        'mha.planV2',
        'mha.planMeta',
        'mha.q1Answers',
        'mha.q2Answers',
        'mha.weeklyPlan',
        'mha.dayCheckmarks',
        'mha.cycleStart',
        'mha.reminders',
        'mha.mhNoteCollapsed',
        'mha.mhPriority',
        'mha.riskLevel',
        'mha.flaggedFactors',
        'mha.extraActivities'
      ];
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k) continue;
        if (prefixes.some(p => k === p || k.indexOf(p + '.') === 0)) keys.push(k);
        if (/^mha\.(weekly|plan|risk|q1|q2|education|koala|daily|user|demo|session|saved|mh|flagged|extra)/.test(k)) keys.push(k);
        if (/^mha_(added_|done_|reminder|pwa_|fired_|planStart)/.test(k)) keys.push(k);
        if (k === 'mha.planStart') keys.push(k);
      }
      [...new Set(keys)].forEach(k => localStorage.removeItem(k));
      sessionStorage.clear();
    } catch(e) {}
  }

  window.MHAClearUserData = clearMhaUserData;
  window.MHAHasActiveSession = hasActiveMhaSession;

  function installGlobalLogout(){
    const session = readMhaSession();
    const auth = document.querySelector('.auth-block');
    if (!auth) return;

    if (hasActiveMhaSession()) {
      const label = (session.name || session.email || 'Account').split('@')[0];
      auth.innerHTML = `
        <span class="auth-link login" style="cursor:default;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${label}</span>
        <button type="button" class="auth-link signup" id="mhaGlobalLogout" style="border:0;cursor:pointer;font-family:inherit">Log out</button>
      `;
      const btn = document.getElementById('mhaGlobalLogout');
      if (btn) btn.addEventListener('click', () => {
        const ok = confirm('Log out and clear this saved plan from this device?');
        if (!ok) return;
        clearMhaUserData();
        if (window.MHAKoala && window.MHAKoala.disableSitting) window.MHAKoala.disableSitting();
        window.location.href = (typeof root !== 'undefined' ? root : '') + 'index.html';
      });
    }
  }


  function installKoaladesktopBar(){
    if (window.self !== window.top) {
      try { window.MHAKoala = window.parent.MHAKoala; } catch(e) {}
      return;
    }
    if (document.getElementById('mha-global-side-rail')) return;

    const style = document.createElement('style');
    style.textContent = `
      .mha-side-rail{position:fixed;right:0;top:42%;transform:translateY(-50%);z-index:9999;display:none;flex-direction:column;align-items:center;gap:6px;border-radius:16px 0 0 16px;padding:9px 6px 10px;background:#fff;border:1px solid rgba(21,31,99,.13);border-right:0;box-shadow:0 12px 34px rgba(10,20,70,.16);cursor:pointer;user-select:none;transition:transform .18s ease,box-shadow .18s ease;width:48px}.mha-side-rail.active{display:flex}.mha-side-rail:hover{transform:translateY(-50%) translateX(-3px);box-shadow:0 18px 48px rgba(10,20,70,.22)}
      .mha-rail-label{writing-mode:vertical-rl;transform:rotate(180deg);font-size:10px;font-weight:850;letter-spacing:.10em;text-transform:uppercase;color:#172046;line-height:1}.mha-rail-sub{font-size:9px;color:#6d7488;margin-top:2px;writing-mode:vertical-rl;transform:rotate(180deg);line-height:1;max-height:62px;overflow:hidden}
      .mha-mini-koala{width:34px;height:34px;display:block;transform-origin:50% 80%;animation:none!important}.mha-koala-pop{position:fixed;top:50%;right:54px;transform:translateY(-50%);width:335px;background:rgba(255,255,255,.98);border:1px solid rgba(0,0,0,.08);border-radius:20px;box-shadow:0 28px 80px rgba(10,20,70,.24);z-index:10000;display:none;overflow:hidden}.mha-koala-pop.show{display:block}
      .mha-pop-head{background:linear-gradient(135deg,#f8fbff,#fff6dd);padding:18px;display:flex;gap:14px;align-items:center}.mha-big-koala{width:120px;height:120px;flex:0 0 120px;transform-origin:50% 85%;animation:mhaKoalaBreathe 2.2s ease-in-out infinite;filter:drop-shadow(0 10px 12px rgba(0,0,0,.12))}
      .mha-big-koala.stiff{animation:mhaKoalaStiff 1.1s ease-in-out infinite}.mha-big-koala.tired{animation:mhaKoalaSway 1.7s ease-in-out infinite}.mha-big-koala.melt{animation:mhaKoalaMelt 2.1s ease-in-out infinite}.mha-side-rail .mha-mini-koala,.mha-side-rail .mha-mini-koala.stiff,.mha-side-rail .mha-mini-koala.tired,.mha-side-rail .mha-mini-koala.melt{animation:none!important;transform:none!important}
      @keyframes mhaKoalaBreathe{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-2px) scale(1.025)}}@keyframes mhaKoalaStiff{0%,100%{transform:rotate(-1deg)}50%{transform:rotate(1deg)}}@keyframes mhaKoalaSway{0%,100%{transform:translateX(-1px) rotate(-2deg)}50%{transform:translateX(2px) rotate(2deg)}}@keyframes mhaKoalaMelt{0%,100%{transform:translateY(1px) scaleY(.96)}50%{transform:translateY(5px) scaleY(.91)}}
      .mha-pop-title{font-size:18px;font-weight:850;margin:0 0 4px;color:#182562}.mha-pop-note{font-size:13px;color:#5A6079;line-height:1.35;margin:0}.mha-pop-body{padding:16px 18px 18px}.mha-timer-row{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.mha-timer-actions{display:grid;grid-template-columns:1fr;gap:10px;min-width:116px}.mha-timer{font-size:34px;font-weight:850;letter-spacing:-.03em;font-variant-numeric:tabular-nums;margin:0 0 2px;color:#182562}.mha-timer-label{font-size:12px;color:#5A6079;text-transform:uppercase;letter-spacing:.08em;font-weight:800}
      .mha-controls{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px;align-items:stretch}.mha-primary,.mha-secondary,.mha-mode{border-radius:10px;padding:11px 14px;font-weight:850;letter-spacing:.06em;font-size:12px;cursor:pointer;font-family:inherit;width:100%}.mha-primary{border:0;color:#fff;background:#1F8A5B;box-shadow:0 8px 16px rgba(35,131,79,.18)}.mha-secondary{border:1px solid #d5d9e4;color:#303955;background:#fff}.mha-mode{border:1px solid #BFDDEB;color:#182562;background:#EEF8FC;padding:11px 14px;font-size:11px;line-height:1.1;white-space:nowrap}.mha-pill-status{display:inline-flex;align-items:center;gap:6px;margin-top:12px;background:#eef8f2;color:#1e7a4a;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:750}.mha-widget-settings{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px;border-top:1px solid #eef0f5;padding-top:13px}.mha-widget-settings label{display:block;font-size:11px;font-weight:850;letter-spacing:.08em;text-transform:uppercase;color:#5A6079;margin-bottom:6px}.mha-widget-settings select{width:100%;border:1px solid #d5d9e4;border-radius:9px;background:#fff;padding:8px 9px;color:#202845;font:inherit;font-size:13px}.mha-risk-display{width:100%;border:1px solid #d5d9e4;border-radius:9px;background:#fff;padding:8px 9px;color:#202845;font:inherit;font-size:13px;font-weight:800;text-transform:capitalize}@media(max-width:520px){.mha-timer-row{flex-direction:column}.mha-timer-actions{width:100%;grid-template-columns:1fr 1fr}.mha-controls,.mha-widget-settings{grid-template-columns:1fr}}
      .mha-toast{position:fixed;top:18px;right:70px;width:320px;background:rgba(255,255,255,.97);border:1px solid rgba(0,0,0,.08);border-radius:18px;box-shadow:0 20px 60px rgba(20,30,80,.22);padding:14px 15px;z-index:9998;display:none;gap:12px;align-items:flex-start}.mha-toast.show{display:flex;animation:mhaToastIn .25s ease-out}@keyframes mhaToastIn{from{transform:translateY(-8px);opacity:0}to{transform:translateY(0);opacity:1}}.mha-toast svg{width:48px;height:48px;flex:0 0 48px}.mha-toast b{display:block;color:#182562;font-size:14px;margin-bottom:4px}.mha-toast span{display:block;color:#596177;font-size:13px;line-height:1.35}
      @media(max-width:760px){.mha-koala-pop{right:8px;left:8px;width:auto}.mha-toast{right:8px;left:8px;width:auto}.mha-side-rail{top:auto;bottom:92px;transform:none;width:48px}.mha-side-rail:hover{transform:translateX(-3px)}}
    `;
    document.head.appendChild(style);

    const rail = document.createElement('div');
    rail.id='mha-global-side-rail';
    rail.className='mha-side-rail';
    rail.title='Open Koala Back Buddy';
    rail.innerHTML = `<div id="mhaMiniKoala"></div><div class="mha-rail-label">Koala</div><div id="mhaWidgetSub" class="mha-rail-sub">ready</div>`;
    document.body.appendChild(rail);

    const pop = document.createElement('div');
    pop.id='mhaKoalaPopover';
    pop.className='mha-koala-pop';
    pop.innerHTML = `<div class="mha-pop-head"><div id="mhaBigKoala"></div><div><h3 class="mha-pop-title" id="mhaBuddyTitle">Koala Back Buddy</h3><p class="mha-pop-note" id="mhaBuddyNote">Docked on the right side, still keeping an eye on sitting time.</p></div></div><div class="mha-pop-body"><div class="mha-timer-row"><div><div class="mha-timer" id="mhaTimer">0h 00m</div><div class="mha-timer-label" id="mhaTimerLabel">current sitting session</div></div><div class="mha-timer-actions"><button class="mha-mode" id="mhaTimeMode" type="button">DEMO TIME</button><button class="mha-secondary" id="mhaResetSit">RESET</button></div></div><div class="mha-pill-status" id="mhaBreakCount">🌿 0 back-friendly breaks today</div><div class="mha-widget-settings"><div><label>Remind after</label><select id="mhaWidgetInterval"><option value="1">1 hour</option><option value="2">2 hours</option><option value="3">3 hours</option><option value="4">4 hours</option><option value="5">5 hours</option></select></div><div><label>Your risk</label><div id="mhaWidgetRisk" class="mha-risk-display">Medium risk</div></div></div><div class="mha-controls"><button class="mha-primary" id="mhaStartBreak">START BREAK</button><button class="mha-secondary" id="mhaStartSitting">START SITTING</button></div></div>`;
    document.body.appendChild(pop);

    const toast = document.createElement('div');
    toast.id='mhaKoalaToast';
    toast.className='mha-toast';
    toast.innerHTML = `<div id="mhaToastKoala"></div><div><b id="mhaToastTitle">Koala reminder</b><span id="mhaToastBody">Your lower back has applied for a rest 😂</span></div>`;
    document.body.appendChild(toast);

    window.MHAKoala = createKoalaController();
    window.MHAKoala.init();
  }

  function createKoalaController(){
    const DEMO_HOUR_MS = 10000; // demo: 10 seconds equals 1 hour
    const REAL_HOUR_MS = 3600000;
    let tickTimer = null;
    let toastTimer = null;
    const $ = id => document.getElementById(id);
    const st = () => {
      const s = JSON.parse(localStorage.getItem('mha.koala') || '{}');
      if (!s.sittingStart) s.sittingStart = Date.now();
      if (!s.breaksToday) s.breaksToday = 0;
      if (!s.lastReminderMark) s.lastReminderMark = 0;
      if (!s.interval) s.interval = 1;
      if (!s.riskTone) s.riskTone = 'medium';
      if (!s.timeMode) s.timeMode = 'demo';
      return s;
    };
    const save = s => localStorage.setItem('mha.koala', JSON.stringify(s));

    function koalaSVG(state='happy'){
      const cfg={happy:{m:'M45 65 Q55 74 65 65',e:'circle',b:'',bl:1,y:0,sweat:0},alert:{m:'M47 66 Q55 71 63 66',e:'circle',b:'<path d="M34 41 L45 38" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/><path d="M66 38 L77 41" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/>',bl:1,y:0,sweat:1},watch:{m:'M47 68 Q55 64 63 68',e:'circleSmall',b:'<path d="M33 40 L45 39" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/><path d="M65 39 L77 40" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/>',bl:0,y:1,sweat:1},stiff:{m:'M48 69 L62 69',e:'rect',b:'<path d="M33 38 L45 39" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/><path d="M65 39 L77 38" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/>',bl:0,y:1,sweat:1},tired:{m:'M47 71 Q55 63 63 71',e:'path',b:'',bl:0,y:2,sweat:1},melt:{m:'M45 73 Q55 62 65 73',e:'path',b:'<path d="M34 41 L45 44" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/><path d="M65 44 L76 41" stroke="#4c4c52" stroke-width="4" stroke-linecap="round"/>',bl:0,y:4,sweat:1},recover:{m:'M43 64 Q55 78 67 64',e:'circle',b:'',bl:1,y:-1,sweat:0}}[state]||{};
      let eyes='';if(cfg.e==='circle')eyes='<circle cx="40" cy="49" r="4.6" fill="#22252d"/><circle cx="70" cy="49" r="4.6" fill="#22252d"/><circle cx="42" cy="47" r="1.2" fill="#fff"/><circle cx="72" cy="47" r="1.2" fill="#fff"/>';else if(cfg.e==='circleSmall')eyes='<circle cx="40" cy="49" r="4" fill="#22252d"/><circle cx="70" cy="49" r="4" fill="#22252d"/><circle cx="42" cy="47" r="1.1" fill="#fff"/><circle cx="72" cy="47" r="1.1" fill="#fff"/>';else if(cfg.e==='rect')eyes='<rect x="35" y="47" width="10" height="4" rx="2" fill="#22252d"/><rect x="65" y="47" width="10" height="4" rx="2" fill="#22252d"/>';else eyes='<path d="M35 50 Q40 46 45 50" stroke="#22252d" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M65 50 Q70 46 75 50" stroke="#22252d" stroke-width="4" stroke-linecap="round" fill="none"/>';
      const blush=cfg.bl?'<ellipse cx="29" cy="60" rx="7" ry="4" fill="#f3a7a5" opacity=".55"/><ellipse cx="81" cy="60" rx="7" ry="4" fill="#f3a7a5" opacity=".55"/>':'';const sweat=cfg.sweat?'<path d="M77 28 C84 18,90 24,87 34 C85 40,80 42,76 37 C73 33,73 31,77 28 Z" fill="#8ad2ff" stroke="#67bff6" stroke-width="1.5" opacity=".95"/>':'';
      return `<svg viewBox="0 0 110 110" aria-hidden="true"><defs><radialGradient id="earG" cx="50%" cy="45%" r="60%"><stop offset="0%" stop-color="#f2f2f3"/><stop offset="100%" stop-color="#b9bcc4"/></radialGradient><linearGradient id="bodyG" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#d9dce2"/><stop offset="100%" stop-color="#aeb3bd"/></linearGradient></defs><g transform="translate(0 ${cfg.y})"><circle cx="25" cy="42" r="22" fill="#9da3ae"/><circle cx="85" cy="42" r="22" fill="#9da3ae"/><circle cx="25" cy="42" r="14" fill="url(#earG)"/><circle cx="85" cy="42" r="14" fill="url(#earG)"/><ellipse cx="55" cy="56" rx="43" ry="39" fill="url(#bodyG)"/><ellipse cx="55" cy="70" rx="25" ry="20" fill="#eef0f2" opacity=".82"/>${cfg.b}${sweat}${eyes}<ellipse cx="55" cy="58" rx="9" ry="7" fill="#343842"/><path d="${cfg.m}" stroke="#343842" stroke-width="4" stroke-linecap="round" fill="none"/>${blush}<path d="M22 81 Q30 93 44 88" stroke="#8f96a2" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M88 81 Q80 93 66 88" stroke="#8f96a2" stroke-width="7" stroke-linecap="round" fill="none"/></g></svg>`;
    }
    function hourMs(s){return (s && s.timeMode === 'real') ? REAL_HOUR_MS : DEMO_HOUR_MS}
    function hourMark(s){return Math.floor((Date.now()-(s.sittingStart||Date.now()))/hourMs(s))}
    function stateForHours(h,s){if(Date.now()<(s.recoveredUntil||0))return'recover';if(h>=5)return'melt';if(h>=4)return'tired';if(h>=3)return'stiff';if(h>=2)return'watch';if(h>=1)return'alert';return'happy'}
    function format(ms,s){const mins=Math.floor(ms/(hourMs(s)/60)),h=Math.floor(mins/60),m=mins%60;return `${h}h ${String(m).padStart(2,'0')}m`}
    function ordinal(n){const suf=(n%10===1&&n%100!==11)?'st':(n%10===2&&n%100!==12)?'nd':(n%10===3&&n%100!==13)?'rd':'th';return n+suf}
    function setKoala(state){['mhaMiniKoala','mhaBigKoala','mhaToastKoala'].forEach(id=>{const el=$(id); if(el) el.innerHTML=koalaSVG(state)});const mini=$('mhaMiniKoala')?.querySelector('svg'),big=$('mhaBigKoala')?.querySelector('svg');mini&&mini.classList.add('mha-mini-koala');big&&big.classList.add('mha-big-koala');if(['stiff','tired','melt'].includes(state)){mini&&mini.classList.add(state);big&&big.classList.add(state)}}
    function updateClock(){const c=$('mhaClock'); if(c)c.textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}
    function activity(h){if(h>=5)return'a proper reset';if(h>=4)return'a gentle stretch';if(h>=3)return'a short walk';if(h>=2)return'a 2-minute movement break';return'a tiny posture reset'}

    function readRiskLevel(){
      try {
        const r = JSON.parse(localStorage.getItem('mha.riskResult') || 'null');
        if (r && r.level) return String(r.level).toLowerCase();
      } catch(e){}
      try { return String(localStorage.getItem('mha.riskLevel') || 'medium').toLowerCase(); } catch(e){ return 'medium'; }
    }
    function readFlagged(){
      try {
        const a = JSON.parse(localStorage.getItem('mha.flaggedFactors') || sessionStorage.getItem('mha.flaggedFactors') || '[]');
        return Array.isArray(a) ? a : [];
      } catch(e){ return []; }
    }
    function clusterKeys(){
      const text = readFlagged().join(' ').toLowerCase();
      const keys = [];
      if (/sedentary|sitting|bmi|body mass|activity|exercise|movement|low activity|weight/.test(text)) keys.push('movement');
      if (/work|occupation|lifting|manual|ergonomic|desk|posture/.test(text)) keys.push('work');
      if (/mental|anxiety|depress|stress|sleep|mood/.test(text)) keys.push('psychosocial');
      if (/smok|tobacco/.test(text)) keys.push('smoking');
      return keys.length ? keys : ['movement'];
    }
    function todayPlanActivity(){
      try {
        const plan = JSON.parse(localStorage.getItem('mha.plan') || 'null');
        if (!plan || !Array.isArray(plan.days)) return null;
        const d = new Date();
        const idx = d.getDay() === 0 ? 6 : d.getDay() - 1;
        const day = plan.days[idx];
        if (!day || day.rest || !Array.isArray(day.activities) || !day.activities.length) return null;
        return day.activities[(Math.floor((Date.now()/10000)) % day.activities.length)];
      } catch(e){ return null; }
      return null;
    }
    function clusterActivity(){
      const bank = {
        movement: [
          'a 5-minute hallway walk',
          'one song-length standing break',
          'a kettle stretch while you wait',
          'a short walk around the block'
        ],
        work: [
          'a 90-second pre-shift warm-up',
          'a hip-hinge practice before lifting',
          'splitting one heavy load into two trips',
          'a quick shoe or workstation check'
        ],
        psychosocial: [
          'five slow breaths before standing',
          'a low-energy stretch',
          'a one-word mood check-in',
          'a screen-free wind-down reminder'
        ],
        smoking: [
          'walking once around the block before a smoke break',
          'playing one song before lighting up',
          'checking Quitline or GP support when ready',
          'delaying one automatic cigarette by 10 minutes'
        ]
      };
      const ks = clusterKeys();
      const k = ks[Math.floor(Date.now()/10000) % ks.length];
      const arr = bank[k] || bank.movement;
      return arr[Math.floor(Date.now()/10000) % arr.length];
    }

    function msg(h,s){
      const risk = readRiskLevel();
      const planned = todayPlanActivity();
      let move = planned && planned.t ? planned.t : clusterActivity();
      let body = `Your plan suggests: ${move}. Start gently and change position now.`;
      if (risk === 'low') body = `Quick reset: ${move}. Keep the habit small so it is easy to repeat.`;
      if (risk === 'medium') body = `Your back has been sitting a while. Try ${move} from your plan?`;
      if (risk === 'high') body = `Gentle high-risk nudge: ${move}. Move slowly, stay comfortable, and stop if symptoms worsen.`;
      return {title:`Koala says: ${h} hour${h>1?'s':''} sitting`, body}
    }
    function showToast(title,body,state='happy',url){const t=$('mhaKoalaToast'); if(!t)return; $('mhaToastTitle').textContent=title;$('mhaToastBody').textContent=body;$('mhaToastKoala').innerHTML=koalaSVG(state);t.onclick=url?()=>{window.location.href=url}:null;t.style.cursor=url?'pointer':'default';t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),6200)}
    function notify(title,body,state,url){if('Notification'in window&&Notification.permission==='granted'){try{const n=new Notification(title,{body,silent:false});if(url){n.onclick=()=>{window.focus();window.location.href=url;};}}catch(e){}}showToast(title,body,state,url)}
    function updateUI(){let s=st();const enabled=!!s.sittingEnabled && hasActiveMhaSession();const widget=$('mha-global-side-rail');if(widget)widget.classList.toggle('active',enabled);if(!enabled){if(widget)widget.classList.remove('active');const pop=$('mhaKoalaPopover');if(pop)pop.classList.remove('show');setKoala('happy');return}if(s.onBreak){const breakMs=Date.now()-(s.breakStart||Date.now());setKoala('recover');$('mhaWidgetSub')&&($('mhaWidgetSub').textContent='break');$('mhaTimer')&&($('mhaTimer').textContent=format(breakMs,s));$('mhaTimerLabel')&&($('mhaTimerLabel').textContent='break in progress');if($('mhaBuddyTitle')){$('mhaBuddyTitle').textContent='Koala is on a break 🌿';$('mhaBuddyNote').textContent='Sitting timer is paused. Press START SITTING when you sit down again.'}$('mhaBreakCount')&&($('mhaBreakCount').textContent=`🌿 ${s.breaksToday||0} back-friendly break${(s.breaksToday||0)===1?'':'s'} today`);if($('mhaWidgetInterval')) $('mhaWidgetInterval').value=String(s.interval||1);if($('mhaWidgetRisk')) $('mhaWidgetRisk').textContent=(readRiskLevel().replace(/^./,c=>c.toUpperCase())+' risk');if($('mhaTimeMode')) $('mhaTimeMode').textContent = (s.timeMode === 'real' ? 'REAL TIME' : 'DEMO TIME');return}const ms=Date.now()-s.sittingStart,h=hourMark(s),state=stateForHours(h,s);setKoala(state);$('mhaWidgetSub')&&($('mhaWidgetSub').textContent=format(ms,s));$('mhaTimer')&&($('mhaTimer').textContent=format(ms,s));$('mhaTimerLabel')&&($('mhaTimerLabel').textContent='current sitting session');if($('mhaBuddyTitle')){if(Date.now()<(s.recoveredUntil||0)){$('mhaBuddyTitle').textContent='Koala is recovering 🌿';$('mhaBuddyNote').textContent=`Nice — you just completed your ${ordinal(s.breaksToday||0)} back-friendly break today.`}else if(h>=3){$('mhaBuddyTitle').textContent='Koala is getting stiff';$('mhaBuddyNote').textContent=`Sitting ${format(ms,s)}. Notification follows your selected interval.`}else if(h>=1){$('mhaBuddyTitle').textContent='Koala is looking a little tired';$('mhaBuddyNote').textContent=`Sitting ${format(ms,s)}. Koala changes mood before it sends a notification.`}else{$('mhaBuddyTitle').textContent='Koala Back Buddy';$('mhaBuddyNote').textContent='Docked on the right side, still keeping an eye on sitting time.'}}$('mhaBreakCount')&&($('mhaBreakCount').textContent=`🌿 ${s.breaksToday||0} back-friendly break${(s.breaksToday||0)===1?'':'s'} today`);if($('mhaWidgetInterval')) $('mhaWidgetInterval').value=String(s.interval||1);if($('mhaWidgetRisk')) $('mhaWidgetRisk').textContent=(readRiskLevel().replace(/^./,c=>c.toUpperCase())+' risk');if($('mhaTimeMode')) $('mhaTimeMode').textContent = (s.timeMode === 'real' ? 'REAL TIME' : 'DEMO TIME');if(h>0&&h%(parseInt(s.interval||1,10))===0&&h!==s.lastReminderMark){s.lastReminderMark=h;save(s);const m=msg(h,s);notify(m.title,m.body,state)}}
    function init(){updateClock();setInterval(updateClock,1000);setKoala('happy');$('mha-global-side-rail')?.addEventListener('click',e=>{e.stopPropagation();$('mhaKoalaPopover')?.classList.toggle('show')});$('mha-global-side-rail')?.addEventListener('mouseenter',()=>{$('mhaKoalaPopover')?.classList.add('show')});document.addEventListener('click',e=>{const p=$('mhaKoalaPopover'),w=$('mha-global-side-rail');if(p&&w&&!p.contains(e.target)&&!w.contains(e.target))p.classList.remove('show')});$('mhaStartBreak')?.addEventListener('click',()=>{let s=st();s.breaksToday=(s.breaksToday||0)+1;s.onBreak=true;s.breakStart=Date.now();s.recoveredUntil=0;s.lastReminderMark=0;save(s);showToast('Koala feels better 🌿',`Nice — you just completed your ${ordinal(s.breaksToday)} back-friendly break today!`,'recover');updateUI()});const restartSittingSession=()=>{let s=st();s.onBreak=false;s.breakStart=0;s.sittingStart=Date.now();s.lastReminderMark=0;s.recoveredUntil=0;save(s);updateUI()};$('mhaStartSitting')?.addEventListener('click',()=>{restartSittingSession();showToast('New sitting session started','Koala is tracking a fresh sitting session from now.','happy')});$('mhaResetSit')?.addEventListener('click',()=>{restartSittingSession()});$('mhaWidgetInterval')?.addEventListener('change',()=>{let s=st();s.interval=parseInt($('mhaWidgetInterval').value||1,10);s.lastReminderMark=hourMark(s);save(s);showToast('Koala reminder updated',`Koala will now nudge after every ${s.interval} hour${s.interval===1?'':'s'} of sitting.`,'happy');updateUI()});$('mhaTimeMode')?.addEventListener('click',()=>{let s=st();s.timeMode = (s.timeMode === 'real') ? 'demo' : 'real';if(s.onBreak){s.breakStart=Date.now()}else{s.sittingStart=Date.now()}s.lastReminderMark=0;save(s);showToast('Timer mode changed', s.timeMode === 'real' ? 'Real time: one hour means one real hour.' : 'Demo time: 10 seconds equals one hour.', 'happy');updateUI()});clearInterval(tickTimer);tickTimer=setInterval(updateUI,500);updateUI()}
    async function requestPermission(){if(!('Notification'in window))return true;if(Notification.permission==='granted')return true;if(Notification.permission==='denied')return true;const p=await Notification.requestPermission();return p==='granted'||p==='denied'}
    return {init, requestPermission, enableSitting: async function(interval,risk){if(!hasActiveMhaSession()){showToast('Sign in first','Create an account before turning on Koala reminders.','alert','signup.html');return false}const ok=await requestPermission();if(!ok){showToast('Notifications not enabled','Please allow notifications to turn reminders on.','alert');return false}let s=st();s.sittingEnabled=true;s.interval=parseInt(interval||1,10);s.riskTone=readRiskLevel();s.timeMode=s.timeMode||'demo';s.onBreak=false;s.breakStart=0;s.sittingStart=Date.now();s.lastReminderMark=0;save(s);updateUI();showToast('Koala is docked on the right 🐨','Even when the panel is hidden, Koala keeps the sitting timer running.','happy');return true}, disableSitting:function(){let s=st();s.sittingEnabled=false;save(s);updateUI()}, enableDaily: async function(time,freq){if(!hasActiveMhaSession()){showToast('Sign in first','Create an account before turning on Daily Plan Nudge.','alert','signup.html');return false}const ok=await requestPermission();if(!ok){showToast('Notifications not enabled','Please allow notifications to turn reminders on.','alert');return false}localStorage.setItem('mha.dailyReminder',JSON.stringify({enabled:true,time:time||'08:00',frequency:freq||'daily'}));showToast('Your daily back plan is ready 🌿','Tap to check today’s first small action.','happy','weekly-plan.html');return true}, setIntervalRisk:function(interval,risk){let s=st();s.interval=parseInt(interval||s.interval||1,10);s.riskTone=readRiskLevel();save(s);updateUI()}, getState:st, showToast};
  }

  document.addEventListener('DOMContentLoaded', () => {
    const h = document.getElementById('mha-header');
    const f = document.getElementById('mha-footer');
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;
    installKoaladesktopBar();
    installGlobalLogout();
  });
})();


// v29 demo watermark
function injectDemoWatermarkV29(){
  if (document.getElementById('demoWatermarkV29')) return;
  const wm = document.createElement('div');
  wm.id = 'demoWatermarkV29';
  wm.textContent = 'AI-assisted demo · Codex + Claude Code vibe-coded · for showcase only';
  document.body.appendChild(wm);
}
document.addEventListener('DOMContentLoaded', injectDemoWatermarkV29);
