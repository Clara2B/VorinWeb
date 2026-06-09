/* ── THEME TOGGLE ── */
(function () {
  var html = document.documentElement;
  var saved = localStorage.getItem('vw-theme') || 'dark';
  html.setAttribute('data-theme', saved);

  var btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('vw-theme', next);
    });
  }
})();

/* ── FAQ ACCORDION ── */
function toggleFaq(el) {
  var item = el.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function (i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
}

/* ── DEMO MODAL DATA ── */
var demos = {
  restaurante: {
    title: '🍽️ Modelo Restaurante — Sabor da Terra',
    html: `<div class="demo-site">
      <div class="dr-hero">
        <div class="dr-ey">🍽️ Gastronomia Artesanal</div>
        <h2>Uma mesa reservada<br><span>só para você</span></h2>
        <p>Ingredientes frescos do campo direto para o seu prato. Experiência única toda noite.</p>
        <div class="dr-btns">
          <button class="dr-btn">📱 Reservar pelo WhatsApp</button>
          <button class="dr-btn-g">Ver cardápio</button>
        </div>
      </div>
      <div class="dr-menu">
        <div class="dr-mhdr">
          <div class="dr-mt">Destaques do dia</div>
          <div class="dr-filt">
            <div class="dr-fc on">Todos</div>
            <div class="dr-fc">Entradas</div>
            <div class="dr-fc">Pratos</div>
          </div>
        </div>
        <div class="dr-grid">
          <div class="dr-item"><div class="dr-img dr-i1">🍝</div><div class="dr-ib"><div class="dr-in">Massa Artesanal</div><div class="dr-ip">R$ 58,90</div></div></div>
          <div class="dr-item"><div class="dr-img dr-i2">🥗</div><div class="dr-ib"><div class="dr-in">Salada da Horta</div><div class="dr-ip">R$ 32,00</div></div></div>
          <div class="dr-item"><div class="dr-img dr-i3">🍖</div><div class="dr-ib"><div class="dr-in">Costela na Brasa</div><div class="dr-ip">R$ 89,90</div></div></div>
        </div>
      </div>
    </div>`
  },
  clinica: {
    title: '🏥 Modelo Clínica — Clínica Saúde Plena',
    html: `<div class="demo-site">
      <div class="dc-wrap">
        <div class="dc-side">
          <div class="dc-brand">🏥 Saúde Plena</div>
          <div class="dc-menu">
            <div class="dc-mi on">Dashboard</div>
            <div class="dc-mi">Agenda</div>
            <div class="dc-mi">Pacientes</div>
            <div class="dc-mi">Relatórios</div>
          </div>
        </div>
        <div class="dc-main">
          <div class="dc-top">
            <div class="dc-wlc">Bom dia, Dr. Silva 👋</div>
            <div class="dc-dt">Terça, 10 Jun 2025</div>
          </div>
          <div class="dc-stats">
            <div class="dc-stat"><div class="dc-sn">24</div><div class="dc-sl">Consultas hoje</div></div>
            <div class="dc-stat"><div class="dc-sn">3</div><div class="dc-sl">Aguardando</div></div>
            <div class="dc-stat"><div class="dc-sn">98%</div><div class="dc-sl">Satisfação</div></div>
          </div>
          <div class="dc-apts">
            <div class="dc-at">Próximas consultas</div>
            <div class="dc-apt"><div class="dc-atm">09:00</div><div class="dc-an">Maria Oliveira</div><span class="dc-ab apt-ok">Confirmada</span></div>
            <div class="dc-apt"><div class="dc-atm">09:30</div><div class="dc-an">João Santos</div><span class="dc-ab apt-wt">Aguardando</span></div>
            <div class="dc-apt"><div class="dc-atm">10:15</div><div class="dc-an">Ana Costa</div><span class="dc-ab apt-ok">Confirmada</span></div>
          </div>
        </div>
      </div>
    </div>`
  },
  bot: {
    title: '🤖 Modelo Chatbot — Assistente Virtual 24h',
    html: `<div class="demo-site">
      <div class="db-wrap">
        <div class="db-header">
          <div class="db-brand">
            <div class="db-brand-icon">🤖</div>
            <div><div class="db-brand-name">AssistenteBot</div><div class="db-brand-sub">Atendimento inteligente</div></div>
          </div>
          <div class="db-status"><span style="width:6px;height:6px;background:#4ade80;border-radius:50%;display:inline-block;"></span> Online agora</div>
        </div>
        <div class="db-chat">
          <div class="db-msg bot">Olá! 👋 Sou o assistente virtual. Como posso te ajudar hoje?</div>
          <div class="db-options">
            <div class="db-opt">📅 Agendar</div>
            <div class="db-opt">💰 Preços</div>
            <div class="db-opt">📍 Endereço</div>
            <div class="db-opt">❓ Dúvidas</div>
          </div>
          <div class="db-msg usr">Quero agendar para sexta-feira</div>
          <div class="db-msg bot">Ótimo! Aqui estão os horários disponíveis para sexta:</div>
          <div class="db-calendar">
            <div class="db-cal-title">Sexta-feira, 13 Jun</div>
            <div class="db-cal-grid">
              <div class="db-cal-day hdr">09h</div><div class="db-cal-day hdr">10h</div><div class="db-cal-day hdr">11h</div>
              <div class="db-cal-day hdr">14h</div><div class="db-cal-day hdr">15h</div><div class="db-cal-day hdr">16h</div>
              <div class="db-cal-day hdr">17h</div>
              <div class="db-cal-day avail">09:00</div><div class="db-cal-day avail">10:00</div><div class="db-cal-day avail">11:00</div>
              <div class="db-cal-day sel">14:00</div><div class="db-cal-day avail">15:00</div><div class="db-cal-day avail">16:00</div>
              <div class="db-cal-day avail">17:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },
  loja: {
    title: '🛍️ Modelo Loja — Urban Store',
    html: `<div class="demo-site">
      <div class="dl-wrap">
        <div class="dl-nav">
          <div class="dl-logo">URBAN<span>STORE</span></div>
          <div class="dl-navl">
            <div class="dl-nl">Masculino</div>
            <div class="dl-nl">Feminino</div>
            <div class="dl-nl">Acessórios</div>
          </div>
          <div class="dl-cart">🛒 Carrinho (2)</div>
        </div>
        <div class="dl-hero">
          <div class="dl-hl">⚡ Black Friday antecipada</div>
          <h2>Estilo que<br>fala por você</h2>
          <p>Peças exclusivas com até 50% off. Por tempo limitado.</p>
          <button class="dl-hcta">Ver ofertas →</button>
        </div>
        <div class="dl-grid">
          <div class="dl-item"><div class="dl-img dl-i1">👕</div><div class="dl-ib"><div class="dl-in">Camiseta Premium</div><div><span class="dl-ip">R$ 89,90</span><span class="dl-io">R$ 149,00</span></div></div></div>
          <div class="dl-item"><div class="dl-img dl-i2">👟</div><div class="dl-ib"><div class="dl-in">Tênis Urban Run</div><div><span class="dl-ip">R$ 249,90</span><span class="dl-io">R$ 420,00</span></div></div></div>
          <div class="dl-item"><div class="dl-img dl-i3">🧢</div><div class="dl-ib"><div class="dl-in">Boné Streetwear</div><div><span class="dl-ip">R$ 69,90</span><span class="dl-io">R$ 99,00</span></div></div></div>
        </div>
      </div>
    </div>`
  }
};

function openDemo(type) {
  var d = demos[type];
  if (!d) return;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalBody').innerHTML = d.html;
  var ov = document.getElementById('demoModal');
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  var ov = document.getElementById('demoModal');
  ov.classList.remove('open');
  document.body.style.overflow = '';
}

/* ESC + click outside */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeDemo();
});
document.getElementById('demoModal').addEventListener('click', function (e) {
  if (e.target === this) closeDemo();
});

/* ── CONTACT FORM ── */
function submitForm(btn) {
  var form = btn.closest('form') || btn.parentElement;
  var inputs = form ? form.querySelectorAll('input, textarea, select') : [];
  var empty = false;
  inputs.forEach(function (i) {
    if (i.required && !i.value.trim()) empty = true;
  });
  if (empty) {
    btn.textContent = '⚠️ Preencha todos os campos';
    setTimeout(function () { btn.innerHTML = '📱 Enviar pelo WhatsApp &rarr;'; }, 2000);
    return;
  }
  var nome = (form.querySelector('[name="nome"]') || {}).value || '';
  var seg = (form.querySelector('[name="segmento"]') || {}).value || '';
  var msg = (form.querySelector('[name="msg"]') || {}).value || '';
  var txt = encodeURIComponent(
    'Olá! Vim pelo site da VorinWeb.\n\nNome: ' + nome +
    '\nSegmento: ' + seg +
    (msg ? '\n\nMensagem: ' + msg : '')
  );
  window.open('https://wa.me/5500000000000?text=' + txt, '_blank');
}
