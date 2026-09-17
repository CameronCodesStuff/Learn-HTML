const MISSIONS = [
  {
    id: 1,
    title: "Your first page",
    check: (code) => {
      const c = code.toLowerCase();
      return c.includes('<!doctype html') && c.includes('<html') && c.includes('<head') && c.includes('<body');
    },
    completeMsg: "Nice. That's the skeleton every HTML page starts with.",
    nextHint: "Next up: give your page a name.",
    instructions: `
      <div class="instruction-mission-num">Mission 1 of 7</div>
      <div class="instruction-title">Your first page</div>
      <div class="instruction-body">
        <p>Every website starts with the same four lines. Type these into the editor:</p>
        <div class="code-block"><span class="tag-color">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;/body&gt;
&lt;/html&gt;</span></div>
        <p><strong>&lt;!DOCTYPE html&gt;</strong> tells the browser "this is a webpage."</p>
        <p><strong>&lt;html&gt;</strong> wraps the whole thing. Everything goes inside it.</p>
        <p><strong>&lt;head&gt;</strong> holds info about your page. The <strong>&lt;title&gt;</strong> inside it sets the name shown in the browser tab.</p>
        <p><strong>&lt;body&gt;</strong> is where everything visible goes. That's where you'll spend most of your time.</p>
        <div class="tip-box"><strong>Type it yourself.</strong> Don't copy-paste. The act of typing it is how it sticks.</div>
        <div class="freedom-box freedom-note"><strong>Your title:</strong> Change "My Page" to whatever you want — your name, your username, anything.</div>
      </div>
    `
  },
  {
    id: 2,
    title: "Add your name",
    check: (code) => /<h1[^>]*>[^<]+<\/h1>/i.test(code),
    completeMsg: "That's your main heading. It's the first thing people will see.",
    nextHint: "Now let's add some text about you.",
    instructions: `
      <div class="instruction-mission-num">Mission 2 of 7</div>
      <div class="instruction-title">Add your name</div>
      <div class="instruction-body">
        <p>Inside your <strong>&lt;body&gt;</strong>, add this:</p>
        <div class="code-block"><span class="tag-color">&lt;h1&gt;</span><span class="text-color">Your Name Here</span><span class="tag-color">&lt;/h1&gt;</span></div>
        <p><strong>h1</strong> means "heading level 1" — the biggest, most important heading. Think of it as the title of your page.</p>
        <p>Replace "Your Name Here" with whatever you want. Your actual name, a username, a brand, anything.</p>
        <div class="tip-box"><strong>Opening and closing tags.</strong> Notice <span style="color:var(--accent);font-family:var(--mono)">&lt;h1&gt;</span> opens the heading and <span style="color:var(--accent);font-family:var(--mono)">&lt;/h1&gt;</span> closes it. The slash makes it a closing tag. Whatever you put between them shows up on screen.</div>
        <div class="freedom-note"><strong>No right answer here.</strong> It could be your full name, your first name, your DJ name, your handle. You decide.</div>
      </div>
    `
  },
  {
    id: 3,
    title: "Tell people who you are",
    check: (code) => /<p[^>]*>[^<]+<\/p>/i.test(code),
    completeMsg: "Good. You've got a heading and a paragraph. That's already a real webpage.",
    nextHint: "Next up: adding an image.",
    instructions: `
      <div class="instruction-mission-num">Mission 3 of 7</div>
      <div class="instruction-title">Tell people who you are</div>
      <div class="instruction-body">
        <p>Add a short description below your heading:</p>
        <div class="code-block"><span class="tag-color">&lt;p&gt;</span><span class="text-color">Write something about yourself here.</span><span class="tag-color">&lt;/p&gt;</span></div>
        <p><strong>&lt;p&gt;</strong> creates a paragraph. Put any text you want between the tags.</p>
        <p>It could be what you do, what you're into, where you're from — whatever feels right for your page.</p>
        <div class="freedom-note"><strong>Keep it short or make it long.</strong> One sentence is fine. Three sentences is fine. Your page, your rules.</div>
      </div>
    `
  },
  {
    id: 4,
    title: "Add an image",
    check: (code) => /<img[^>]+src=/i.test(code),
    completeMsg: "You just embedded an image with a single line. That's how it works.",
    nextHint: "Now let's add some links.",
    instructions: `
      <div class="instruction-mission-num">Mission 4 of 7</div>
      <div class="instruction-title">Add an image</div>
      <div class="instruction-body">
        <p>Images work a bit differently — they don't need a closing tag:</p>
        <div class="code-block"><span class="tag-color">&lt;img</span> <span class="attr-color">src=</span><span class="val-color">"https://placecats.com/300/300"</span> <span class="attr-color">alt=</span><span class="val-color">"A photo of me"</span><span class="tag-color">&gt;</span></div>
        <p><strong>src</strong> is short for "source" — it's the address of the image. You can paste any image URL you want.</p>
        <p><strong>alt</strong> is a text description of the image. It's used by screen readers and shows up if the image fails to load.</p>
        <div class="tip-box"><strong>Finding an image URL:</strong> Right-click any image on the web → "Copy image address" — then paste that as your src value. Or use your own photo hosting link.</div>
        <div class="freedom-note"><strong>Use whatever image you want.</strong> A photo of yourself, a logo, an avatar, a placeholder. The example above is just a placeholder cat — replace it.</div>
      </div>
    `
  },
  {
    id: 5,
    title: "Add your links",
    check: (code) => /<a[^>]+href=/i.test(code),
    completeMsg: "You've got a clickable link. That's the backbone of the whole web.",
    nextHint: "Let's add more personality to your page.",
    instructions: `
      <div class="instruction-mission-num">Mission 5 of 7</div>
      <div class="instruction-title">Add your links</div>
      <div class="instruction-body">
        <p>Links are what the web is made of. Here's how to make one:</p>
        <div class="code-block"><span class="tag-color">&lt;a</span> <span class="attr-color">href=</span><span class="val-color">"https://yoursite.com"</span><span class="tag-color">&gt;</span><span class="text-color">Your Link Text</span><span class="tag-color">&lt;/a&gt;</span></div>
        <p><strong>href</strong> is the URL the link goes to. The text between the tags is what people click on.</p>
        <p>Add as many links as you want. Your socials, your portfolio, your YouTube, whatever.</p>
        <div class="code-block"><span class="tag-color">&lt;a</span> <span class="attr-color">href=</span><span class="val-color">"https://instagram.com/yourhandle"</span><span class="tag-color">&gt;</span><span class="text-color">Instagram</span><span class="tag-color">&lt;/a&gt;</span>
<span class="tag-color">&lt;a</span> <span class="attr-color">href=</span><span class="val-color">"https://github.com/yourname"</span><span class="tag-color">&gt;</span><span class="text-color">GitHub</span><span class="tag-color">&lt;/a&gt;</span></div>
        <div class="freedom-note"><strong>Replace the example URLs.</strong> Link to your real pages, your favourite websites, your projects — or make up placeholders for now. Your choice.</div>
      </div>
    `
  },
  {
    id: 6,
    title: "Add more personality",
    check: (code) => /<h2[^>]*>[^<]+<\/h2>/i.test(code) || /<ul[^>]*>[\s\S]*?<li[^>]*>/i.test(code),
    completeMsg: "Your page is really taking shape now.",
    nextHint: "One more step — the free build.",
    instructions: `
      <div class="instruction-mission-num">Mission 6 of 7</div>
      <div class="instruction-title">Add more personality</div>
      <div class="instruction-body">
        <p>Here are a few more elements you can use — or skip any you don't want.</p>
        <p><strong>Subheading</strong> — to divide your page into sections:</p>
        <div class="code-block"><span class="tag-color">&lt;h2&gt;</span><span class="text-color">What I'm into</span><span class="tag-color">&lt;/h2&gt;</span></div>
        <p><strong>Bullet list</strong> — for listing things:</p>
        <div class="code-block"><span class="tag-color">&lt;ul&gt;
  &lt;li&gt;</span><span class="text-color">Music production</span><span class="tag-color">&lt;/li&gt;
  &lt;li&gt;</span><span class="text-color">Photography</span><span class="tag-color">&lt;/li&gt;
  &lt;li&gt;</span><span class="text-color">Coffee</span><span class="tag-color">&lt;/li&gt;
&lt;/ul&gt;</span></div>
        <p><strong>ul</strong> is the list container. Each <strong>li</strong> is one item inside it.</p>
        <div class="freedom-note"><strong>Use at least one of these</strong> to complete this mission. Make it actually about you — your interests, your links, your projects, your music taste. Whatever.</div>
      </div>
    `
  },
  {
    id: 7,
    title: "Build your own page",
    check: (code) => {
      const c = code.toLowerCase();
      const hasStructure = c.includes('<html') && c.includes('<body');
      const hasHeading = /<h[123][^>]*>[^<]+<\/h[123]>/i.test(code);
      const hasParagraph = /<p[^>]*>[^<]+<\/p>/i.test(code);
      const hasLink = /<a[^>]+href=/i.test(code);
      return hasStructure && hasHeading && hasParagraph && hasLink;
    },
    completeMsg: "You built a webpage. A real one. From scratch, with your own HTML.",
    nextHint: null,
    instructions: `
      <div class="instruction-mission-num">Mission 7 of 7</div>
      <div class="instruction-title">Build your own page</div>
      <div class="instruction-body">
        <p>No more hand-holding. You've got the tools — now build your page.</p>
        <div class="freedom-note"><strong>Make it yours.</strong> There's no correct answer. Your page should look like <em>you</em>, not like an example.</div>
        <p>Some things you could include:</p>
        <ul style="padding-left:16px;color:var(--text-soft);font-size:13px;line-height:2;">
          <li>Your name as a heading</li>
          <li>A short bio paragraph</li>
          <li>A profile photo</li>
          <li>Links to your socials or projects</li>
          <li>A list of your interests or hobbies</li>
          <li>A "currently" section — what you're reading, listening to, working on</li>
          <li>A contact section</li>
          <li>Anything else you want</li>
        </ul>
        <p>To complete this mission: your page needs at least a heading, a paragraph, and one link — but go further than that.</p>
        <div class="tip-box"><strong>Stuck?</strong> Open the HTML Reference on the right. It shows everything you've learned.</div>
      </div>
    `
  }
];

const HINT_LEVELS = [
  [
    "Something doesn't look quite right yet. Check the preview — does it look like what you expected?",
    "Hmm, not seeing it yet. Double-check you've typed the tags exactly.",
    "Have a look at the example in the instructions — compare it carefully with what you've written.",
  ],
  [
    "Check your heading — it needs to be inside the &lt;body&gt; tags.",
    "You've got &lt;h1&gt; — now make sure it has a closing &lt;/h1&gt; after the text.",
    "It should look like: &lt;h1&gt;Your text&lt;/h1&gt; — both tags, with text between them.",
  ],
  [
    "Your paragraph tag is &lt;p&gt; — it needs text between it and its closing tag &lt;/p&gt;.",
    "Try: &lt;p&gt;Something about you.&lt;/p&gt; — make sure both tags are there.",
    "A paragraph looks like: &lt;p&gt;I make things on the internet.&lt;/p&gt;",
  ],
  [
    "An image needs a src attribute with a URL. Check you've included that.",
    "Try: &lt;img src=\"URL\" alt=\"description\"&gt; — replace URL with a real image address.",
    "Example: &lt;img src=\"https://placecats.com/200/200\" alt=\"A cat\"&gt;",
  ],
  [
    "A link needs an href attribute. Check you've included that.",
    "Try: &lt;a href=\"https://example.com\"&gt;Link text&lt;/a&gt;",
    "Make sure the URL is inside quotes, and there's text between the &lt;a&gt; tags.",
  ],
  [
    "For this mission you need either a subheading or a list. Check you've added one.",
    "A subheading: &lt;h2&gt;Your section name&lt;/h2&gt; — or a list starting with &lt;ul&gt;",
    "A list looks like: &lt;ul&gt;&lt;li&gt;Item one&lt;/li&gt;&lt;li&gt;Item two&lt;/li&gt;&lt;/ul&gt;",
  ],
  [
    "Your page needs a few things to be complete. Check you have a heading, a paragraph, and at least one link.",
    "Missing something? Look at the checklist in the instructions — work through it item by item.",
    "Make sure your page has: &lt;h1&gt;, &lt;p&gt;, and &lt;a href=\"...\"&gt; — all inside &lt;body&gt;",
  ]
];

const ELEMENT_EXPLANATIONS = {
  '!doctype': "This line tells the browser that this file is an HTML document. Every HTML page should start with it.",
  'html': "The root element. Everything in your webpage goes inside &lt;html&gt; and &lt;/html&gt;.",
  'head': "The head section holds information about your page — like the title shown in the browser tab. Its content isn't visible on the page itself.",
  'title': "Whatever you put here appears in the browser tab. It doesn't show on your actual page — it's just the tab label.",
  '/head': "This closes the head section.",
  'body': "The body is where everything visible goes. Every heading, paragraph, image, and link you want people to see lives inside &lt;body&gt;.",
  '/body': "This closes the body. Everything visible on the page must be between &lt;body&gt; and &lt;/body&gt;.",
  '/html': "This closes the entire HTML document.",
  'h1': "A main heading — the biggest, most important one. Use it for your name or page title. Each page usually has just one &lt;h1&gt;.",
  '/h1': "This closes the main heading.",
  'h2': "A section heading. Smaller than &lt;h1&gt;, used to divide your page into sections.",
  '/h2': "This closes the section heading.",
  'h3': "A smaller section heading — for sub-sections within a section.",
  '/h3': "This closes the h3 heading.",
  'p': "A paragraph. Put your text here. The browser adds a little space above and below it automatically.",
  '/p': "This closes the paragraph.",
  'a': "A link. The href attribute tells the browser where to go when clicked. The text between the tags is what you click on.",
  '/a': "This closes the link.",
  'img': "An image tag. Unlike most tags, it doesn't need a closing tag. The src attribute is the URL of the image. The alt attribute is a description used by screen readers.",
  'ul': "An unordered (bulleted) list. All your list items go inside it.",
  '/ul': "This closes the list.",
  'li': "One item in a list. It goes inside &lt;ul&gt; (or &lt;ol&gt; for numbered lists).",
  '/li': "This closes the list item.",
  'br': "A line break. It forces the content after it to start on a new line.",
  'hr': "A horizontal line — a visual divider between sections.",
  'strong': "Makes text bold. Use it to emphasise important words.",
  '/strong': "This closes the bold text.",
  'em': "Makes text italic. Use it for emphasis.",
  '/em': "This closes the italic text.",
  'div': "A container element. It groups things together but has no visual effect by itself — it's often used for layout.",
  '/div': "This closes the div container.",
  'span': "An inline container, like &lt;div&gt; but for small pieces of text rather than whole blocks.",
  '/span': "This closes the span.",
  'ol': "An ordered (numbered) list. Items inside are numbered automatically.",
  '/ol': "This closes the numbered list.",
};

let currentMission = 0;
let hintCounts = new Array(MISSIONS.length).fill(0);
let completed = new Array(MISSIONS.length).fill(false);
let explainOpen = false;
let refOpen = false;
let previewTimeout = null;

const editor = document.getElementById('code-editor');
const lineNumbers = document.getElementById('line-numbers');
const previewFrame = document.getElementById('preview-frame');
const missionLabel = document.getElementById('mission-label');
const progressInner = document.getElementById('progress-bar-inner');
const progressText = document.getElementById('progress-text');
const feedbackBar = document.getElementById('feedback-bar');
const instructionPanel = document.getElementById('instruction-panel');
const explainPanel = document.getElementById('explain-panel');
const explainContent = document.getElementById('explain-content');
const refPanel = document.getElementById('ref-panel');
const completeOverlay = document.getElementById('complete-overlay');
const completeTitle = document.getElementById('complete-title');
const completeMsg = document.getElementById('complete-msg');

function updateLineNumbers() {
  const lines = editor.value.split('\n');
  const count = Math.max(lines.length, 1);
  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `<span class="line-num">${i}</span>`;
  }
  lineNumbers.innerHTML = html;
  lineNumbers.scrollTop = editor.scrollTop;
}

function syncScroll() {
  lineNumbers.scrollTop = editor.scrollTop;
}

function updatePreview() {
  clearTimeout(previewTimeout);
  previewTimeout = setTimeout(() => {
    const code = editor.value;
    try {
      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      doc.open();
      doc.write(code);
      doc.close();
    } catch (e) {}
  }, 300);
}

function setMission(index) {
  currentMission = index;
  const m = MISSIONS[index];

  instructionPanel.innerHTML = m.instructions;

  document.querySelectorAll('.mission-btn').forEach((btn, i) => {
    btn.classList.remove('active');
    if (i === index) btn.classList.add('active');
  });

  const done = completed.filter(Boolean).length;
  const pct = Math.round((done / MISSIONS.length) * 100);
  progressInner.style.width = pct + '%';
  progressText.textContent = `${done}/${MISSIONS.length}`;
  missionLabel.textContent = `Mission ${index + 1} of ${MISSIONS.length}`;

  feedbackBar.className = '';
  feedbackBar.innerHTML = '';
}

function checkMission() {
  const m = MISSIONS[currentMission];
  const code = editor.value;
  if (m.check(code)) {
    completed[currentMission] = true;
    const btn = document.querySelectorAll('.mission-btn')[currentMission];
    btn.classList.add('completed');

    const done = completed.filter(Boolean).length;
    const pct = Math.round((done / MISSIONS.length) * 100);
    progressInner.style.width = pct + '%';
    progressText.textContent = `${done}/${MISSIONS.length}`;

    showComplete(m);
  } else {
    showHint(currentMission);
  }
}

function showHint(missionIndex) {
  const hints = HINT_LEVELS[missionIndex];
  const level = Math.min(hintCounts[missionIndex], hints.length - 1);
  hintCounts[missionIndex] = Math.min(hintCounts[missionIndex] + 1, hints.length - 1);
  feedbackBar.className = 'show hint';
  feedbackBar.innerHTML = `<span>💡</span> <span>${hints[level]}</span>`;
}

function showComplete(mission) {
  completeTitle.textContent = "Mission complete.";
  completeMsg.textContent = mission.completeMsg;

  const nextBtn = document.getElementById('complete-next');
  if (currentMission < MISSIONS.length - 1) {
    nextBtn.textContent = `Next: ${MISSIONS[currentMission + 1].title} →`;
    nextBtn.onclick = () => {
      completeOverlay.classList.remove('show');
      setMission(currentMission + 1);
    };
  } else {
    nextBtn.textContent = 'Open free build mode →';
    nextBtn.onclick = () => {
      completeOverlay.classList.remove('show');
      enterFreeMode();
    };
  }

  completeOverlay.classList.add('show');

  feedbackBar.className = 'show success';
  feedbackBar.innerHTML = `<span>✓</span> <span>${mission.completeMsg}</span>`;
}

function enterFreeMode() {
  instructionPanel.innerHTML = `
    <div class="instruction-mission-num">Free Build Mode</div>
    <div class="instruction-title">Build whatever you want</div>
    <div class="instruction-body">
      <p>You know HTML now. This is your canvas.</p>
      <div class="freedom-note"><strong>No instructions. No checklist.</strong> Just write the HTML you want and watch it appear in the preview.</div>
      <p>Use the HTML Reference if you need a reminder of any tags.</p>
      <p>When you're done, select all the code in the editor, copy it, and paste it into a new file called <strong>index.html</strong> on your computer. Open that file in a browser. That's your website.</p>
    </div>
  `;
  missionLabel.textContent = 'Free Build';
}

function explainCode() {
  const code = editor.value;
  if (!code.trim()) {
    explainContent.innerHTML = '<p class="explain-empty">Type some HTML first, then click Explain my code.</p>';
    explainPanel.classList.add('open');
    return;
  }

  const lines = code.split('\n');
  let html = '';

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const explanation = explainLine(trimmed);
    html += `
      <div class="explain-line">
        <div class="explain-line-num">Line ${i + 1}</div>
        <div class="explain-code">${escapeHtml(trimmed)}</div>
        <div class="explain-text">${explanation}</div>
      </div>
    `;
  });

  if (!html) {
    html = '<p class="explain-empty">Nothing to explain yet. Write some HTML first.</p>';
  }

  explainContent.innerHTML = html;
  explainPanel.classList.add('open');
}

function explainLine(line) {
  const lower = line.toLowerCase();

  if (lower.includes('<!doctype')) return ELEMENT_EXPLANATIONS['!doctype'];

  const tagMatch = lower.match(/<\/?([a-z][a-z0-9]*)/);
  if (!tagMatch) {
    if (line.length > 0) {
      return "This is text content — it will appear directly on your page.";
    }
    return "An empty line — HTML ignores these, but they help you read your code.";
  }

  const fullTag = lower.match(/<\/?[a-z][a-z0-9]*/)?.[0].replace('<', '').replace('/', '');
  const isClosing = line.startsWith('</');
  const lookupKey = isClosing ? `/${fullTag}` : fullTag;

  const baseExplanation = ELEMENT_EXPLANATIONS[lookupKey] || ELEMENT_EXPLANATIONS[fullTag] || null;

  if (!baseExplanation) {
    if (isClosing) return `This closes the &lt;${fullTag}&gt; element.`;
    return `This is a &lt;${fullTag}&gt; element.`;
  }

  let extra = '';

  if (!isClosing) {
    const hrefMatch = line.match(/href=["']([^"']+)["']/i);
    const srcMatch = line.match(/src=["']([^"']+)["']/i);
    const altMatch = line.match(/alt=["']([^"']+)["']/i);

    if (hrefMatch) {
      extra += ` It links to <strong>${escapeHtml(hrefMatch[1])}</strong>.`;
    }
    if (srcMatch) {
      extra += ` The image source is <strong>${escapeHtml(srcMatch[1])}</strong>.`;
    }
    if (altMatch) {
      extra += ` The alt text is "<strong>${escapeHtml(altMatch[1])}</strong>".`;
    }

    const textMatch = line.match(/>([^<]+)</);
    if (textMatch && textMatch[1].trim()) {
      extra += ` The visible text is: "<strong>${escapeHtml(textMatch[1].trim())}</strong>".`;
    }
  }

  return baseExplanation + extra;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildMissionNav() {
  const nav = document.getElementById('mission-nav');
  nav.innerHTML = '';
  MISSIONS.forEach((m, i) => {
    const btn = document.createElement('button');
    btn.className = 'mission-btn';
    btn.innerHTML = `<span class="mission-dot">${i + 1}</span><span class="mission-title-text">${m.title}</span>`;
    btn.onclick = () => setMission(i);
    nav.appendChild(btn);
  });
}

function buildRef() {
  const content = document.getElementById('ref-content');
  const refs = [
    { tag: '&lt;!DOCTYPE html&gt;', desc: 'Required at the top of every HTML file', ex: '&lt;!DOCTYPE html&gt;' },
    { tag: '&lt;html&gt; ... &lt;/html&gt;', desc: 'Wraps everything', ex: '&lt;html&gt;...&lt;/html&gt;' },
    { tag: '&lt;head&gt; ... &lt;/head&gt;', desc: 'Page info (not visible)', ex: '&lt;head&gt;&lt;title&gt;Name&lt;/title&gt;&lt;/head&gt;' },
    { tag: '&lt;body&gt; ... &lt;/body&gt;', desc: 'Everything visible goes here', ex: '' },
    { tag: '&lt;h1&gt;', desc: 'Main heading', ex: '&lt;h1&gt;My Name&lt;/h1&gt;' },
    { tag: '&lt;h2&gt;', desc: 'Section heading', ex: '&lt;h2&gt;My Links&lt;/h2&gt;' },
    { tag: '&lt;p&gt;', desc: 'Paragraph of text', ex: '&lt;p&gt;I make things.&lt;/p&gt;' },
    { tag: '&lt;a&gt;', desc: 'Clickable link', ex: '&lt;a href="https://..."&gt;Click me&lt;/a&gt;' },
    { tag: '&lt;img&gt;', desc: 'Image (no closing tag)', ex: '&lt;img src="url" alt="desc"&gt;' },
    { tag: '&lt;ul&gt; + &lt;li&gt;', desc: 'Bulleted list', ex: '&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;' },
    { tag: '&lt;br&gt;', desc: 'Line break', ex: 'Line one&lt;br&gt;Line two' },
    { tag: '&lt;strong&gt;', desc: 'Bold text', ex: '&lt;strong&gt;Important&lt;/strong&gt;' },
    { tag: '&lt;em&gt;', desc: 'Italic text', ex: '&lt;em&gt;Emphasis&lt;/em&gt;' },
    { tag: '&lt;hr&gt;', desc: 'Horizontal divider line', ex: '&lt;hr&gt;' },
  ];

  content.innerHTML = refs.map(r => `
    <div class="ref-item">
      <div class="ref-tag">${r.tag}</div>
      <div class="ref-desc">${r.desc}</div>
      ${r.ex ? `<div class="ref-example">${r.ex}</div>` : ''}
    </div>
  `).join('');
}

editor.addEventListener('input', () => {
  updateLineNumbers();
  updatePreview();

  if (completed[currentMission]) return;
  const m = MISSIONS[currentMission];
  if (m.check(editor.value)) {
    completed[currentMission] = true;
    const btn = document.querySelectorAll('.mission-btn')[currentMission];
    btn.classList.add('completed');
    const done = completed.filter(Boolean).length;
    const pct = Math.round((done / MISSIONS.length) * 100);
    progressInner.style.width = pct + '%';
    progressText.textContent = `${done}/${MISSIONS.length}`;
    feedbackBar.className = 'show success';
    feedbackBar.innerHTML = `<span>✓</span> <span>${m.completeMsg}</span>`;
  }
});

editor.addEventListener('scroll', syncScroll);

editor.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 2;
    updateLineNumbers();
    updatePreview();
  }
});

document.getElementById('btn-check').addEventListener('click', checkMission);

document.getElementById('btn-hint').addEventListener('click', () => {
  showHint(currentMission);
});

document.getElementById('btn-explain').addEventListener('click', () => {
  if (explainPanel.classList.contains('open')) {
    explainPanel.classList.remove('open');
  } else {
    explainCode();
  }
});

document.getElementById('explain-close').addEventListener('click', () => {
  explainPanel.classList.remove('open');
});

document.getElementById('btn-ref').addEventListener('click', () => {
  refPanel.classList.toggle('open');
});

document.getElementById('ref-close').addEventListener('click', () => {
  refPanel.classList.remove('open');
});

completeOverlay.addEventListener('click', (e) => {
  if (e.target === completeOverlay) {
    completeOverlay.classList.remove('show');
  }
});

buildMissionNav();
buildRef();
setMission(0);
updateLineNumbers();
updatePreview();
