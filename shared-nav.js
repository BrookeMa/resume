(() => {
  const style = document.createElement('style');
  style.textContent = `
    #site-nav {
      background: #fff;
      border-bottom: 1px solid #dadce0;
      z-index: 200;
    }
    #site-nav .sn-inner {
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      height: 56px;
    }
    #site-nav .sn-title {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: #202124;
      text-decoration: none;
    }
    #site-nav .sn-title:hover { text-decoration: none; }
    #site-nav .sn-dot { color: #1a73e8; }
    #site-nav .sn-links {
      display: flex;
      gap: 4px;
    }
    #site-nav .sn-links a {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: #5f6368;
      padding: 6px 12px;
      border-radius: 6px;
      text-decoration: none;
      transition: background .15s;
    }
    #site-nav .sn-links a:hover {
      background: #f8f9fa;
      text-decoration: none;
    }
    #site-footer {
      text-align: center;
      padding: 40px 24px;
      border-top: 1px solid #dadce0;
      font-size: 13px;
      color: #5f6368;
    }
    #site-footer a {
      color: #1a73e8;
      font-weight: 500;
      text-decoration: none;
    }
    #site-footer a:hover { text-decoration: underline; }
    @media (max-width: 640px) {
      #site-nav .sn-inner { padding: 0 16px; }
      #site-nav .sn-links { gap: 0; }
      #site-nav .sn-links a { font-size: 12px; padding: 6px 8px; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.getElementById('site-nav');
  if (nav) {
    nav.innerHTML = `
      <div class="sn-inner">
        <a href="index.html" class="sn-title">Ye Ma<span class="sn-dot">.</span></a>
        <div class="sn-links">
          <a href="index.html">Home</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="https://github.com/BrookeMa" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/brook-ma-45354722b/" target="_blank">LinkedIn</a>
        </div>
      </div>
    `;
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <a href="index.html">Home</a> &nbsp;&middot;&nbsp;
      <a href="portfolio.html">Portfolio</a> &nbsp;&middot;&nbsp;
      <a href="https://github.com/BrookeMa" target="_blank">GitHub</a> &nbsp;&middot;&nbsp;
      <a href="https://www.linkedin.com/in/brook-ma-45354722b/" target="_blank">LinkedIn</a>
      <p style="margin-top:8px">&copy; 2026 Ye Ma</p>
    `;
  }
})();
