(() => {
  const typing = document.getElementById("typing");
  const transition = document.getElementById("transition");
  if (!typing || !transition) return;

  const message = "AL-FASI SA KALAWAKAN";
  let character = 0;
  let redirected = false;

  function typeNextCharacter() {
    if (!typing || character >= message.length) return;
    typing.textContent += message.charAt(character++);
    window.setTimeout(typeNextCharacter, 82);
  }

  function enterHome() {
    if (redirected) return;
    redirected = true;
    transition?.classList.add("active");
    window.setTimeout(() => {
      try { sessionStorage.setItem("alfarsiStartEntranceMusic", "yes"); } catch (_) {}
      window.location.href = "home.html";
    }, 700);
  }

  window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(typeNextCharacter, 550);
    window.setTimeout(enterHome, 5200);
  });
})();


(function () {
  'use strict';

  var MUSIC_LINKS = {
    vlad: 'https://file.garden/avfrhhNmL46cQZyA/7698401990434475285-Tikdown.net.mp3',      
    luzi: 'https://file.garden/avfrhhNmL46cQZyA/7655301803365403925-Tikdown.net.mp3',     
    lexi: 'https://file.garden/avfrhhNmL46cQZyA/lexi2.0.mp3',
    ira: 'https://file.garden/avfrhhNmL46cQZyA/iramusic.mp3',
    xia: 'https://file.garden/avfrhhNmL46cQZyA/xiamusic.mp3',
    kenchie: 'https://file.garden/avfrhhNmL46cQZyA/kenchiemusic.mp3',
    ashiro: 'https://file.garden/avfrhhNmL46cQZyA/ashiromusic.mp3',    
    milo: 'https://file.garden/avfrhhNmL46cQZyA/7677069934110838024-Tikdown.net.mp3' ,
    yin: '',
    bel: '',
    rias: '',
    wes: '',
    denji: '',
    vad: '',
    ziku: '',
    kent: '',
    clove: '',
    drei: '',
    kaii: 'https://file.garden/avfrhhNmL46cQZyA/7677582198068808992-Tikdown.net.mp3',
  };

  var MEMBERS = [
    {name:'Vlad', music:MUSIC_LINKS.vlad, discordId:'944607734203052042', handle:'@Vlad', hall: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/Mute%20The%20Silence.gif', bio:'@chinadoll.xo'},
    {name:'Luzi', music:MUSIC_LINKS.luzi, discordId:'765797439629164564', handle:'@luzi', hall: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/kenbanner.gif', bio:'backburner, di pinursue, second option, di pinili, laging pangalawa, standby lang, backup plan, never priority, almost pero hindi, reserve lang, last pick, pang-lipas oras, fallback palagi, hindi inuna, hindi sineryoso, hindi tunay na mahalaga, pero nandyan lang palagi, handa lang umako kapag wala nang iba, parang echo sa isip mo na hindi mo kayang itigil, parang damdaming iniwan mo sa gilid, laging standby, laging nakahanda, laging nasa likod ng priority mo, hindi pinipili, hindi pinag-iisipan, hindi pinapansin, parang laging pangalawa, pang-reserve, pang-ubos lang ng oras, never truly chosen, almost pero hindi, di kailanman una, di seryoso, di tunay, laging nasa huli, di kailanman sa unahan, pang-lipas oras, pang-replace, pang-second thought, pang-fill in, pang-temporary, pang-huli, pang-extras, pang-standby, pang-always waiting.'},
    {name:'Lexi', music:MUSIC_LINKS.lexi, discordId:'1228011743175901316', handle:'@lexi.', hall: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/card3.gif', bio:'@lymxia_'},
    {name:'Kenchie', music:MUSIC_LINKS.kenchie, discordId:'444393598621057054', handle:'@k0xz',banner: 'https://file.garden/avfrhhNmL46cQZyA/kench.gif', bio:'Hello World!'},
    {name:'Ira', music:MUSIC_LINKS.ira, discordId:'830411307668340756', handle:'@Ira', hall: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/ira.gif', bio:''},
    {name:'Yin', music:MUSIC_LINKS.yin, discordId:'1455471269712625806', handle:'@yin', banner: 'https://file.garden/avfrhhNmL46cQZyA/download%20(1).gif', bio:''},
    {name:'Xia', music:MUSIC_LINKS.xia, discordId:'889161427003244635', handle:'@xia',  banner: 'https://file.garden/avfrhhNmL46cQZyA/xia.gif', bio:''},
    {name:'Kaii', music:MUSIC_LINKS.kaii, discordId:'', handle:'@kaii',banner: 'https://file.garden/avfrhhNmL46cQZyA/New%20Beginnings%2066.gif', bio:'kai cenat'},
    {name:'Bel', music:MUSIC_LINKS.bel, discordId:'1029425641872957500', handle:'@bel', banner: 'https://file.garden/avfrhhNmL46cQZyA/download.gif', bio:''},
    {name:'Wes', music:MUSIC_LINKS.wes, discordId:'1228011743175901316', handle:'@wes', banner: 'https://file.garden/avfrhhNmL46cQZyA/lexi1.gif', bio:''},
    {name:'Ashiro', music:MUSIC_LINKS.ashiro, discordId:'833585204135198730', handle:'@ashiro',banner: 'https://file.garden/avfrhhNmL46cQZyA/lv_0_20251017033304.gif', bio:'Mica on top'},
    {name:'Milo', music:MUSIC_LINKS.milo, discordId:'708498824041070672', handle:'@milo.',banner: 'https://file.garden/avfrhhNmL46cQZyA/b643c9f00659f035bcb60a065e5a7286.jpg', bio:'MILO EVERYDAY'},
    {name:'Rias', music:MUSIC_LINKS.rias, discordId:'738630835057721406', handle:'@rias', banner: 'https://file.garden/avfrhhNmL46cQZyA/giphy_gif%20(500%C3%97281).gif', bio:''},
    {name:'Denji', music:MUSIC_LINKS.denji , discordId:'', handle:'@denji', banner: 'https://file.garden/avfrhhNmL46cQZyA/sunappu.gif', bio:''},
    {name:'Vad', music:MUSIC_LINKS.vad , discordId:'', handle:'@vad', banner: 'https://file.garden/avfrhhNmL46cQZyA/download%20(2).gif', bio:''},
    {name:'Ziku', music:MUSIC_LINKS.ziku , discordId:'', handle:'@ziku', banner: 'https://file.garden/avfrhhNmL46cQZyA/zico.gif', bio:''},
    {name:'Kent', music:MUSIC_LINKS.kent , discordId:'', handle:'@kent', banner: 'https://file.garden/avfrhhNmL46cQZyA/%E3%83%A9%E3%83%96%E3%83%AC%E3%82%BF%E3%83%BC%20%F0%9F%92%8C%20__%20nijisanji%20boys%20collection.gif', bio:''},
    {name:'Clove', music:MUSIC_LINKS.clove , discordId:'', handle:'@clove', banner: 'https://file.garden/avfrhhNmL46cQZyA/fui.gif', bio:''},
    {name:'Drei', music:MUSIC_LINKS.drei , discordId:'', handle:'@drei', banner: 'https://file.garden/avfrhhNmL46cQZyA/%E2%98%86Studio%20Ghibli%E2%98%86.gif', bio:''},
  ];

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];
    });
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function displayName(member, data) {
    var u = data && data.discord_user;
    if (u) {
      var n = u.global_name || u.display_name || u.username;
      if (n && String(n).trim()) return n;
    }
    return member ? member.name : '';
  }

  function decoUrl(user) {
    if (!user) return null;
    var d = user.avatar_decoration_data;
    var asset = (d && d.asset) ? d.asset : (user.avatar_decoration || null);
    if (!asset) return null;
    return 'https://cdn.discordapp.com/avatar-decoration-presets/' + asset + '.png';
  }

  function applyDeco(img, user) {
    if (!img) return;
    var url = decoUrl(user);
    if (url) {
      if (img.getAttribute('src') !== url) img.src = url;
      img.classList.add('is-on');
    } else {
      img.removeAttribute('src');
      img.classList.remove('is-on');
    }
  }

  function customStatusText(data) {
    if (!data || !Array.isArray(data.activities)) return '';
    for (var i = 0; i < data.activities.length; i++) {
      var a = data.activities[i];
      if (a && a.type === 4) {
        var emoji = a.emoji && a.emoji.name ? a.emoji.name + ' ' : '';
        var state = a.state || '';
        return (emoji + state).trim();
      }
    }
    return '';
  }

  function bioText(member, data) {
    var custom = customStatusText(data);
    if (custom) return custom;
    return member && member.bio ? member.bio : '';
  }

  var views = {
    '/':             document.getElementById('view-home'),
    '/hall-of-fame': document.getElementById('view-hall'),
    '/members':      document.getElementById('view-members')
  };
  var navLinks = document.querySelectorAll('[data-route]');

  var activeRoute = null;

  function currentRoute() {
    var rawHash = location.hash.replace(/^#/, '');
    if (!rawHash) return activeRoute || '/';
    var h = rawHash;
    if (h === '/') return '/';
    if (h === '/hall-of-fame' || h === '/fame' || h === '/fame.html') return '/hall-of-fame';
    if (h === '/members' || h === '/mem' || h === '/mem.html') return '/members';

    return activeRoute || '/';
  }

  function applyRoute() {
    var r = currentRoute();
    var routeChanged = r !== activeRoute;
    activeRoute = r;
    Object.keys(views).forEach(function (k) {
      views[k].classList.toggle('active', k === r);
    });
    navLinks.forEach(function (a) {
      var on = a.getAttribute('data-route') === r && a.hasAttribute('data-nav');
      if (on) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.title = r === '/hall-of-fame' ? 'AL-FARSI — Hall of Fame'
                   : r === '/members' ? 'AL-FARSI — Members'
                   : 'AL-FARSI';
    if (r === '/members' || r === '/hall-of-fame') {
      renderPresence();
      connectSocket();
    }
    if (routeChanged) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }

  window.addEventListener('hashchange', applyRoute);
  window.addEventListener('popstate', applyRoute);

  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var themeIcon = document.getElementById('themeIcon');
  var MOON = ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'];
  var SUN  = ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z','M12 2v2','M12 20v2','M4.93 4.93l1.41 1.41','M17.66 17.66l1.41 1.41','M2 12h2','M20 12h2','M4.93 19.07l1.41-1.41','M17.66 6.34l1.41-1.41'];

  function renderThemeIcon() {
    var paths = root.classList.contains('light') ? SUN : MOON;
    themeIcon.innerHTML = paths.map(function (d) { return '<path d="' + d + '"></path>'; }).join('');
  }
  function setTheme(t) {
    root.classList.toggle('light', t === 'light');
    root.classList.toggle('dark', t !== 'light');
    root.style.colorScheme = t === 'light' ? 'light' : 'dark';
    try { localStorage.setItem('theme', t); } catch (e) {}
    renderThemeIcon();
  }
  renderThemeIcon();
  themeBtn.addEventListener('click', function () {
    setTheme(root.classList.contains('light') ? 'dark' : 'light');
  });

  var menuBtn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  function closeMenu() { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 768) closeMenu(); });

  var bgMusic   = document.getElementById('bgMusic');
  var musicBtn  = document.getElementById('musicBtn');
  var musicIcon = document.getElementById('musicIcon');
  var NOTE_ON   = '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>';
  var NOTE_OFF  = NOTE_ON + '<line x1="2" y1="2" x2="22" y2="22"></line>';
  var siteMusicSrc = 'https://file.garden/avfrhhNmL46cQZyA/1114%20(2).mp4';
  var currentMusicMode = 'site';
  var currentMemberMusic = null;
  var musicWanted = false;

  try { musicWanted = localStorage.getItem('music') === 'on'; } catch (e) {}

  function renderMusicIcon() {
    if (!musicIcon || !musicBtn) return;
    var playing = bgMusic && !bgMusic.paused;
    musicIcon.innerHTML = playing ? NOTE_ON : NOTE_OFF;
    musicBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    musicBtn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
    musicBtn.title = playing ? 'Pause background music' : 'Play background music';
  }

  function setMusicSource(src, mode, shouldPlay) {
    if (!bgMusic || !src) return;
    currentMusicMode = mode;
    bgMusic.onerror = null;
    bgMusic.pause();
    if (bgMusic.getAttribute('src') !== src) {
      bgMusic.setAttribute('src', src);
      bgMusic.load();
    }
    if (shouldPlay) tryPlayMusic();
    else renderMusicIcon();
  }

  function tryPlayMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.35;
    var p = bgMusic.play();
    if (p && typeof p.then === 'function') {
      p.then(function () {
        renderMusicIcon();
        try { localStorage.setItem('music', 'on'); } catch (e) {}
      }).catch(function () { renderMusicIcon(); });
    }
  }

  function playSelectedMemberMusic(member) {
    if (!bgMusic || !member) return;
    var memberTrack = member.music;
    currentMemberMusic = memberTrack || null;
    if (!memberTrack) {
      setMusicSource(siteMusicSrc, 'site', !bgMusic.paused || musicWanted);
      return;
    }


    setMusicSource(memberTrack, 'member', true);
    bgMusic.onerror = function () {
      bgMusic.onerror = null;
      currentMemberMusic = null;
      setMusicSource(siteMusicSrc, 'site', true);
    };
  }

  if (bgMusic && musicBtn) {
    renderMusicIcon();
    musicBtn.addEventListener('click', function () {
      if (bgMusic.paused) {
        musicWanted = true;
        tryPlayMusic();
      } else {
        musicWanted = false;
        bgMusic.pause();
        renderMusicIcon();
        try { localStorage.setItem('music', 'off'); } catch (e) {}
      }
    });
    bgMusic.addEventListener('play', renderMusicIcon);
    bgMusic.addEventListener('pause', renderMusicIcon);

    // The site-wide song is the default until a member is selected.
    if (bgMusic.getAttribute('src') !== siteMusicSrc) {
      bgMusic.setAttribute('src', siteMusicSrc);
    }
    var startEntranceMusic = false;
    try {
      startEntranceMusic = sessionStorage.getItem('alfarsiStartEntranceMusic') === 'yes';
      if (startEntranceMusic) sessionStorage.removeItem('alfarsiStartEntranceMusic');
    } catch (e) {}
    if (musicWanted || startEntranceMusic) tryPlayMusic();
  }

  function buildHallOfFame() {
    var fameGrid = document.getElementById('fameGrid');
    if (!fameGrid) return;

    var fameMembers = MEMBERS.filter(function(m) { return m.hall === true; });

    fameGrid.innerHTML = fameMembers.map(function(m, i) {
      var bgSrc = m.banner ? m.banner : 'https://cdn.discordapp.com/embed/avatars/0.png';
      var avatarSrc = 'https://cdn.discordapp.com/embed/avatars/0.png';

      return '<div class="fame-card fade-up" style="animation-delay:' + (i * 100) + 'ms" data-name="' + escapeHTML(m.name) + '">' +
        '<img class="fame-card-bg" src="' + escapeHTML(bgSrc) + '" alt="" loading="lazy">' +
        '<div class="fame-card-overlay"></div>' +
        '<div class="fame-card-content">' +
          '<div class="fame-card-header">' +
            '<div class="fame-card-avatar-wrap">' +
              '<img class="fame-card-avatar" src="' + avatarSrc + '" alt="' + escapeHTML(m.name) + '">' +
              '<img class="avatar-deco" alt="" aria-hidden="true">' +
            '</div>' +
            '<div class="fame-card-text">' +
              '<h3 class="fame-card-name">' + escapeHTML(m.name) + '</h3>' +
              '<p class="fame-card-handle">' + escapeHTML(m.handle) + '</p>' +
            '</div>' +
          '</div>' +
          '<p class="fame-card-bio">' + escapeHTML(m.bio) + '</p>' +
          '<div class="fame-card-tags">' +
            '<div class="fame-card-tag"></div>' +
            '<div class="fame-card-tag"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  var showcase = document.getElementById('showcase');
  var carousel = document.getElementById('carousel');
  var rail = document.getElementById('rail');
  var gridView = document.getElementById('gridView');
  var idAvatar = document.getElementById('identityAvatar');
  var idDeco = document.getElementById('identityDeco');
  var idName = document.getElementById('identityName');
  var idHandle = document.getElementById('identityHandle');
  var idRole = document.getElementById('identityRole');
  var idBio = document.getElementById('identityBio');
  var viewSingle = document.getElementById('viewSingle');
  var viewGrid = document.getElementById('viewGrid');

  var index = 0;
  var total = MEMBERS.length;

  function buildCarousel() {
    carousel.innerHTML = MEMBERS.map(function (m, i) {
      var cached = presenceCache[m.name];
      var user = cached && cached.discord_user;
      var initialImg = m.banner || (user ? (getBannerUrl(user.id, user.banner) || getAvatarUrl(user.id, user.avatar)) : 'https://cdn.discordapp.com/embed/avatars/0.png');
      return '<div class="carousel-card" data-index="' + i + '" role="option" aria-selected="' + (i === index) + '">' +
        '<div class="card-overlay"></div>' +
        '<span class="card-label">MEMBER / #' + pad(i + 1) + '</span>' +
        '<div class="card-presence" data-status="offline"><span class="dot"></span><span class="presence-label">Offline</span></div>' +
        '<img src="' + initialImg + '" alt="' + m.name + '">' +
      '</div>';
    }).join('');
  }

  function updatePositions() {
    var cards = carousel.querySelectorAll('.carousel-card');
    cards.forEach(function (card, i) {
      var diff = i - index;
      var pos;
      if (diff === 0) pos = '0';
      else if (diff === 1) pos = '1';
      else if (diff === -1) pos = '-1';
      else if (diff === 2) pos = '2';
      else if (diff === -2) pos = '-2';
      else pos = 'hidden';

      if (pos === 'hidden') {
        card.setAttribute('data-pos', 'hidden');
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.transform = 'translate(-50%,-50%) rotateY(-12deg) rotateX(4deg) translateZ(-500px)';
        card.style.zIndex = '0';
        return;
      }
      card.style.opacity = '';
      card.style.transform = '';
      card.style.zIndex = '';
      card.setAttribute('data-pos', pos);
      card.style.pointerEvents = (pos === '0') ? 'auto' : 'none';
      card.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    var m = MEMBERS[index];
    idName.textContent = displayName(m, presenceCache[m.name]);
    idHandle.textContent = m.handle;
    idRole.textContent = m.role;

    renderPresence();

    var steps = rail.querySelectorAll('.rail-step');
    steps.forEach(function (s, i) {
      var on = i === index;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) {
        var rTop = rail.scrollTop;
        var rBottom = rTop + rail.clientHeight;
        var sTop = s.offsetTop;
        var sBottom = sTop + s.offsetHeight;
        if (sTop < rTop) rail.scrollTop = sTop - 8;
        else if (sBottom > rBottom) rail.scrollTop = sBottom - rail.clientHeight + 8;
      }
    });
  }

  function buildRail() {
    rail.innerHTML = MEMBERS.map(function (m, i) {
      return '<button class="rail-step' + (i === index ? ' is-active' : '') + '" type="button" role="tab" aria-label="Go to ' + m.name + '" aria-selected="' + (i === index) + '"><span>' + pad(i + 1) + '</span></button>';
    }).join('');
    rail.querySelectorAll('.rail-step').forEach(function (btn, i) {
      btn.addEventListener('click', function () { goTo(i); });
    });
  }
  
  console.log("reverse engineering is a crime, but resu did it anyway..");

  function buildGrid() {
    gridView.innerHTML = MEMBERS.map(function (m) {
      return '<article class="grid-card" data-name="' + m.name + '">' +
        '<div class="grid-presence" data-status="offline"><span class="dot"></span><span class="grid-presence-label">Offline</span></div>' +
        '<div class="avatar-wrapper">' +
          '<img class="avatar" src="https://cdn.discordapp.com/embed/avatars/0.png" alt="' + m.name + '">' +
          '<img class="avatar-deco" alt="" aria-hidden="true">' +
        '</div>' +
        '<h3 class="member-name">' + m.name + '</h3>' +
        '<p class="member-role">' + m.role + '</p>' +
        '<p class="member-bio">' + m.bio + '</p>' +
      '</article>';
    }).join('');
  }

  function goTo(i) { index = (i + total) % total; updatePositions(); playSelectedMemberMusic(MEMBERS[index]); }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  document.addEventListener('keydown', function (e) {
    if (!views['/members'].classList.contains('active')) return;
    if (showcase.classList.contains('grid-mode')) return;
    if (e.target.matches('input, textarea, select')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
  });

  var startX = null, startY = null;
  showcase.addEventListener('touchstart', function (e) {
    if (showcase.classList.contains('grid-mode')) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  showcase.addEventListener('touchend', function (e) {
    if (startX === null || showcase.classList.contains('grid-mode')) return;
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
    else if (Math.abs(dy) > 45 && Math.abs(dy) > Math.abs(dx)) goTo(index + (dy < 0 ? 1 : -1));
    startX = null; startY = null;
  }, { passive: true });

  // --- SCROLL-TO-NAVIGATE FOR THE WHOLE MEMBERS PAGE ---
  // Scroll anywhere on the page to advance members. One scroll gesture = one member.
  var scrollAccum = 0;
  var scrollIdleTimer = null;
  var SCROLL_THRESHOLD = 80;

  function resetScrollAccumSoon() {
    if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(function () {
      scrollAccum = 0;
    }, 200);
  }

  window.addEventListener('wheel', function (e) {
    if (activeRoute !== '/members' || !views['/members'].classList.contains('active')) return;
    if (showcase.classList.contains('grid-mode')) return;

    // Keep wheel gestures inside the member carousel; never let them trigger
    // browser/page navigation or an accidental fragment change.
    e.preventDefault();
    e.stopPropagation();
    scrollAccum += e.deltaY;

    if (Math.abs(scrollAccum) >= SCROLL_THRESHOLD) {
      if (scrollAccum > 0) next();
      else prev();
      scrollAccum = 0;
    }
    resetScrollAccumSoon();
  }, { passive: false });

  function setView(mode) {
    var isGrid = mode === 'grid';
    showcase.classList.toggle('grid-mode', isGrid);
    viewGrid.classList.toggle('is-active', isGrid);
    viewSingle.classList.toggle('is-active', !isGrid);
    viewGrid.setAttribute('aria-pressed', isGrid ? 'true' : 'false');
    viewSingle.setAttribute('aria-pressed', isGrid ? 'false' : 'true');
    try { localStorage.setItem('membersView', mode); } catch (e) {}
    renderPresence();
  }
  viewGrid.addEventListener('click', function () { setView('grid'); });
  viewSingle.addEventListener('click', function () { setView('single'); });

  var LANYARD_REST_BASE = 'https://api.lanyard.rest/v1/users/';
  var LANYARD_SOCKET_URL = 'wss://api.lanyard.rest/socket';

  var presenceCache = {};
  var socket = null;
  var heartbeatTimer = null;
  var reconnectTimer = null;
  var gotInit = false;

  function isPlaceholder(id) {
    return !id || id.indexOf('REPLACE_WITH') === 0;
  }

  function getAvatarUrl(userId, hash) {
    if (!hash) return 'https://cdn.discordapp.com/embed/avatars/0.png';
    var ext = hash.startsWith('a_') ? 'gif' : 'png';
    return 'https://cdn.discordapp.com/avatars/' + userId + '/' + hash + '.' + ext + '?size=512';
  }

  function getBannerUrl(userId, hash) {
    if (!hash) return null;
    var ext = hash.startsWith('a_') ? 'gif' : 'png';
    return 'https://cdn.discordapp.com/banners/' + userId + '/' + hash + '.' + ext + '?size=600';
  }

  function statusLabel(s) {
    if (s === 'online') return 'Online';
    if (s === 'idle') return 'Idle';
    if (s === 'dnd') return 'Do Not Disturb';
    return 'Offline';
  }

  function activityLabel(data) {
    if (!data) return null;

    if (data.listening_to_spotify && data.spotify) {
      return {
        type: 'spotify',
        text: data.spotify.song + ' — ' + data.spotify.artist,
        icon: data.spotify.album_art_url
      };
    }

    var acts = data.activities;
    if (!acts || !acts.length) return null;

    var a = acts[0];
    var prefix = a.type === 0 ? 'Playing'
               : a.type === 1 ? 'Streaming'
               : a.type === 2 ? 'Listening'
               : a.type === 3 ? 'Watching'
               : a.type === 5 ? 'Competing'
               : 'Doing';
    return {
      type: 'activity',
      text: prefix + ' ' + (a.name || ''),
      icon: null
    };
  }

  function memberFromId(userId) {
    for (var i = 0; i < MEMBERS.length; i++) {
      if (MEMBERS[i].discordId === userId) return MEMBERS[i];
    }
    return null;
  }

  function fetchPresenceREST(name) {
    var member = MEMBERS.find(function(m) { return m.name === name; });
    if (!member || isPlaceholder(member.discordId)) return Promise.resolve(null);

    return fetch(LANYARD_REST_BASE + member.discordId)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.success && j.data) {
          presenceCache[name] = j.data;
          return j.data;
        }
        return null;
      })
      .catch(function () { return null; });
  }

  function fetchAllREST() {
    return Promise.all(MEMBERS.map(function (m) { return fetchPresenceREST(m.name); }))
      .then(function () { renderPresence(); });
  }

  function connectSocket() {
    if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) return;

    var ids = MEMBERS.map(function (m) { return m.discordId; })
                     .filter(function (id) { return !isPlaceholder(id); });
    if (!ids.length) return;

    gotInit = false;
    socket = new WebSocket(LANYARD_SOCKET_URL);

    var initTimeout = setTimeout(function () {
      if (!gotInit) fetchAllREST();
    }, 5000);

    socket.onopen = function () {
      socket.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: ids } }));
    };

    socket.onmessage = function (event) {
      var msg;
      try { msg = JSON.parse(event.data); } catch (e) { return; }

      if (msg.op === 1 && msg.d && msg.d.heartbeat_interval) {
        if (heartbeatTimer) clearInterval(heartbeatTimer);
        heartbeatTimer = setInterval(function () {
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ op: 3 }));
          }
        }, msg.d.heartbeat_interval);
      }

      if (msg.op === 0 && msg.t === 'INIT_STATE') {
        gotInit = true;
        clearTimeout(initTimeout);
        var map = msg.d || {};
        Object.keys(map).forEach(function (userId) {
          var member = memberFromId(userId);
          if (member) presenceCache[member.name] = map[userId];
        });
        renderPresence();
      }

      if (msg.op === 0 && msg.t === 'PRESENCE_UPDATE') {
        var userId = msg.d && msg.d.user_id;
        if (!userId) return;
        var member = memberFromId(userId);
        if (member) {
          presenceCache[member.name] = msg.d;
          renderPresence();
        }
      }
    };

    socket.onclose = function () {
      socket = null;
      clearTimeout(initTimeout);
      if (heartbeatTimer) { clearInterval(heartbeatTimer); heartbeatTimer = null; }
      fetchAllREST();
      if (!reconnectTimer) {
        reconnectTimer = setTimeout(function () {
          reconnectTimer = null;
          connectSocket();
        }, 10000);
      }
    };

    socket.onerror = function () {
      if (socket) socket.close();
    };
  }

  function renderPresence() {
    document.querySelectorAll('.fame-card').forEach(function (card) {
      var name = card.getAttribute('data-name');
      var member = MEMBERS.find(function (m) { return m.name === name; });
      var data = presenceCache[name];
      var user = data && data.discord_user;

      var img = card.querySelector('.fame-card-avatar');
      if (img && user) img.src = getAvatarUrl(user.id, user.avatar);

      applyDeco(card.querySelector('.avatar-deco'), user);

      var nameEl = card.querySelector('.fame-card-name');
      if (nameEl && member) nameEl.textContent = displayName(member, data);

      var bioEl = card.querySelector('.fame-card-bio');
      if (bioEl && member) bioEl.textContent = bioText(member, data);
    });

    var m = MEMBERS[index];
    if (!m) return;
    var data = presenceCache[m.name];
    var status = data ? data.discord_status : 'offline';
    var user = data && data.discord_user;

    var dot = document.getElementById('identityDot');
    if (dot) { dot.setAttribute('data-status', status); dot.title = statusLabel(status); }

    if (user) {
      idAvatar.src = getAvatarUrl(user.id, user.avatar);
    } else {
      idAvatar.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
    }

    applyDeco(idDeco, user);

    idName.textContent = displayName(m, data);

    if (idBio) idBio.textContent = bioText(m, data);

    var chip = document.getElementById('identityActivity');
    var chipIcon = document.getElementById('identityActivityIcon');
    var chipText = document.getElementById('identityActivityText');
    var act = data ? activityLabel(data) : null;

    if (act) {
      chip.classList.remove('hidden');
      chip.classList.toggle('spotify', act.type === 'spotify');
      chipText.innerHTML = '<span class="chip-label">' +
        (act.type === 'spotify' ? 'Spotify' : 'Activity') +
        '</span> · ' + escapeHTML(act.text);
      if (act.icon) { chipIcon.src = act.icon; chipIcon.style.display = ''; }
      else { chipIcon.style.display = 'none'; }
    } else {
      chip.classList.add('hidden');
    }

    // Keep every carousel card in sync with its own member. Updating only the
    // active card left placeholder Discord avatars on the cards behind it.
    carousel.querySelectorAll('.carousel-card').forEach(function (card) {
      var cardIndex = Number(card.getAttribute('data-index'));
      var cardMember = MEMBERS[cardIndex];
      if (!cardMember) return;

      var cardData = presenceCache[cardMember.name];
      var cardUser = cardData && cardData.discord_user;
      var cardImg = card.querySelector('img');

      if (cardImg) {
        var bannerUrl = cardMember.banner || (cardUser ? getBannerUrl(cardUser.id, cardUser.banner) : null);
        var imageUrl = bannerUrl || (cardUser ? getAvatarUrl(cardUser.id, cardUser.avatar) : 'https://cdn.discordapp.com/embed/avatars/0.png');
        if (cardImg.getAttribute('src') !== imageUrl) cardImg.src = imageUrl;
      }

      var badge = card.querySelector('.card-presence');
      if (badge) {
        var cardStatus = cardData ? cardData.discord_status : 'offline';
        badge.setAttribute('data-status', cardStatus);
        var label = badge.querySelector('.presence-label');
        if (label) label.textContent = statusLabel(cardStatus);
      }
    });

    gridView.querySelectorAll('.grid-card').forEach(function (gc) {
      var gName = gc.getAttribute('data-name');
      var gData = presenceCache[gName];
      var gStatus = gData ? gData.discord_status : 'offline';
      var gUser = gData && gData.discord_user;

      var gImg = gc.querySelector('.avatar');
      if (gImg) {
        if (gUser) {
          gImg.src = getAvatarUrl(gUser.id, gUser.avatar);
        } else {
          gImg.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
        }
      }

      applyDeco(gc.querySelector('.avatar-deco'), gUser);

      var gNameEl = gc.querySelector('.member-name');
      var gMember = MEMBERS.find(function (x) { return x.name === gName; });
      if (gNameEl && gMember) gNameEl.textContent = displayName(gMember, gData);

      var gBioEl = gc.querySelector('.member-bio');
      if (gBioEl && gMember) gBioEl.textContent = bioText(gMember, gData);

      var gp = gc.querySelector('.grid-presence');
      if (gp) {
        gp.setAttribute('data-status', gStatus);
        var gl = gp.querySelector('.grid-presence-label');
        if (gl) gl.textContent = statusLabel(gStatus);
      }
    });
  }

  // Refresh stale Discord presence when the visitor returns to this tab.
  // This updates card contents in place and never reloads the document.
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible') return;
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      fetchAllREST();
      if (!reconnectTimer) connectSocket();
    }
  });

  buildHallOfFame();
  buildCarousel();
  buildRail();
  buildGrid();

  var savedView = null;
  try { savedView = localStorage.getItem('membersView'); } catch (e) {}
  if (savedView === 'grid') setView('grid');

  updatePositions();
  applyRoute();
})();