// Shared MHA header + footer rendering
(function(){
  const root = document.currentScript.dataset.root || '';
  const active = document.currentScript.dataset.active || '';

  const header = `
  <header class="top">
    <div class="top-inner">
      <a class="brand" href="${root}index.html">
        <img src="${(window.__resources && window.__resources.mhaLogo) || root + 'assets/mha-logo.png'}" alt="Musculoskeletal Health Australia" />
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
      <a href="${root}weekly-plan.html" ${active==='plan'?'class="active"':''}>Weekly Plan</a>
      <a href="${root}get-informed.html">Get Informed</a>
      <a href="${root}get-supported.html" ${active==='support'?'class="active"':''}>Get Supported</a>
      <a href="${root}get-involved.html">Get Involved</a>
      <a href="${root}about.html" ${active==='about'?'class="active"':''}>About Us</a>
      <a href="#">What's On</a>
      <a href="${root}contact-us.html">Contact Us</a>
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
        <ul><li><a href="#">Contact us</a></li><li><a href="${root}about.html">Get to know MHA</a></li><li><a href="#">Our Partners</a></li><li><a href="#">Downloads</a></li><li><a href="#">Advertising opportunities</a></li><li><a href="#">Terms &amp; conditions</a></li><li><a href="#">Privacy policy</a></li></ul>
      </div>
    </div>
    <div class="copy">
      <span>Copyright © Musculoskeletal Health Australia 2026. All rights reserved.</span>
      <span class="abn"><span><b>ABN:</b> 31 607 996 921</span><span><b>ACN:</b> 607 996 921</span></span>
    </div>
  </footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    const h = document.getElementById('mha-header');
    const f = document.getElementById('mha-footer');
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;
  });
})();
