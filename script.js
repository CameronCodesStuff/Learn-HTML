const MISSIONS = [
  {
    id: 1,
    title: "Your first page",
    check: (code) => {
      const c = code.toLowerCase();
      return c.includes('<!doctype html') && c.includes('<html') && c.includes('<head') && c.includes('<body');
    },
    completeMsg: "That's the skeleton every HTML page starts with. Well done.",
    nextHint: "Next up: give your page a name.",
    instructions: `
      <div class="instruction-mission-num">Mission 1 of 7</div>
      <div class="instruction-title">Your first page</div>
      <div class="instruction-body">
        <p>Every webpage starts with the same structure. Type this into the editor — exactly as shown:</p>
        <div class="code-block"><span class="tag-color">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;

  &lt;/body&gt;
&lt;/html&gt;</span></div>
        <p><strong>&lt;!DOCTYPE html&gt;</strong> — tells the browser this is a webpage. It always goes first.</p>
        <p><strong>&lt;html&gt; ... &lt;/html&gt;</strong> — wraps the whole document. Everything goes inside it.</p>
        <p><strong>&lt;head&gt;</strong> — invisible info about your page. The <strong>&lt;title&gt;</strong> inside it sets the browser tab name.</p>
        <p><strong>&lt;body&gt;</strong> — this is where everything <em>visible</em> goes. You'll work here most.</p>
        <div class="tip-box">💡 <strong>Type it, don't paste.</strong> Typing it once is worth ten reads. Make a typo? The preview updates instantly so you'll see what's wrong.</div>
        <div class="freedom-note">✦ <strong>Make it yours:</strong> Change <code style="color:var(--success);font-family:var(--mono)">"My Page"</code> to your name, a project name, anything you like.</div>
      </div>
    `
  },
  {
    id: 2,
    title: "Add your name",
    check: (code) => /<h1[^>]*>[^<]+<\/h1>/i.test(code),
    completeMsg: "That's your main heading — the first thing people see on your page.",
    nextHint: "Now let's add some text about you.",
    instructions: `
      <div class="instruction-mission-num">Mission 2 of 7</div>
      <div class="instruction-title">Add your name</div>
      <div class="instruction-body">
        <p>Inside your <strong>&lt;body&gt;</strong> tags, add a heading:</p>
        <div class="code-block"><span class="tag-color">&lt;h1&gt;</span><span class="text-color">Your Name Here</span><span class="tag-color">&lt;/h1&gt;</span></div>
        <p><strong>h1</strong> stands for "heading level 1" — the biggest, most important heading on the page. Think of it as your page's title.</p>
        <p>Replace "Your Name Here" with whatever you want — your real name, a username, a handle, a brand.</p>
        <div class="tip-box">💡 <strong>Opening and closing tags.</strong> <code style="color:var(--accent);font-family:var(--mono)">&lt;h1&gt;</code> opens the heading, <code style="color:var(--accent);font-family:var(--mono)">&lt;/h1&gt;</code> closes it. The forward slash marks a closing tag. Text between them appears on screen.</div>
        <div class="freedom-note">✦ No right answer — your full name, first name only, DJ name, handle, whatever fits.</div>
      </div>
    `
  },
  {
    id: 3,
    title: "Tell people who you are",
    check: (code) => /<p[^>]*>[^<]+<\/p>/i.test(code),
    completeMsg: "A heading and a paragraph. That's already a real webpage.",
    nextHint: "Next: adding an image.",
    instructions: `
      <div class="instruction-mission-num">Mission 3 of 7</div>
      <div class="instruction-title">Tell people who you are</div>
      <div class="instruction-body">
        <p>Below your <strong>&lt;h1&gt;</strong>, add a short description:</p>
        <div class="code-block"><span class="tag-color">&lt;p&gt;</span><span class="text-color">Write something about yourself here.</span><span class="tag-color">&lt;/p&gt;</span></div>
        <p><strong>&lt;p&gt;</strong> creates a paragraph. Any text you put between the tags appears as a block of content.</p>
        <p>It could be what you do, what you're into, where you're from, what you're building — anything.</p>
        <div class="freedom-note">✦ One sentence is fine. Three is fine too. No rules on length here.</div>
      </div>
    `
  },
  {
    id: 4,
    title: "Add an image",
    check: (code) => /<img[^>]+src=/i.test(code),
    completeMsg: "You embedded an image with a single line. That's how it works.",
    nextHint: "Now let's add some links.",
    instructions: `
      <div class="instruction-mission-num">Mission 4 of 7</div>
      <div class="instruction-title">Add an image</div>
      <div class="instruction-body">
        <p>Images are a bit different — they use a single tag with no closing tag:</p>
        <div class="code-block"><span class="tag-color">&lt;img</span> <span class="attr-color">src=</span><span class="val-color">"https://placecats.com/300/300"</span> <span class="attr-color">alt=</span><span class="val-color">"A photo of me"</span><span class="tag-color">&gt;</span></div>
        <p><strong>src</strong> (source) — the web address of the image. Paste any image URL you want here.</p>
        <p><strong>alt</strong> — a text description of the image, used by screen readers and shown if the image fails to load. Always include it.</p>
        <div class="tip-box">💡 <strong>Finding an image URL:</strong> Right-click any image on the web → "Copy image address" — then paste it as your src value.</div>
        <div class="freedom-note">✦ The example uses a placeholder cat. Replace it with any image you like — a photo, a logo, an avatar, anything with a public URL.</div>
      </div>
    `
  },
  {
    id: 5,
    title: "Add your links",
    check: (code) => /<a[^>]+href=/i.test(code),
    completeMsg: "You've got a clickable link — the backbone of the whole web.",
    nextHint: "Let's add more personality to your page.",
    instructions: `
      <div class="instruction-mission-num">Mission 5 of 7</div>
      <div class="instruction-title">Add your links</div>
      <div class="instruction-body">
        <p>Links are what connect the web together. Here's the pattern:</p>
        <div class="code-block"><span class="tag-color">&lt;a</span> <span class="attr-color">href=</span><span class="val-color">"https://yoursite.com"</span><span class="tag-color">&gt;</span><span class="text-color">Click here</span><span class="tag-color">&lt;/a&gt;</span></div>
        <p><strong>href</strong> is the destination URL. The text between the tags is what people see and click.</p>
        <p>You can add as many links as you want — your socials, your portfolio, your GitHub, whatever:</p>
        <div class="code-block"><span class="tag-color">&lt;a</span> <span class="attr-color">href=</span><span class="val-color">"https://instagram.com/yourhandle"</span><span class="tag-color">&gt;</span><span class="text-color">Instagram</span><span class="tag-color">&lt;/a&gt;</span>
<span class="tag-color">&lt;a</span> <span class="attr-color">href=</span><span class="val-color">"https://github.com/yourname"</span><span class="tag-color">&gt;</span><span class="text-color">GitHub</span><span class="tag-color">&lt;/a&gt;</span></div>
        <div class="freedom-note">✦ Replace the example URLs with real ones — your profiles, projects, favourite sites — or keep them as placeholders for now.</div>
      </div>
    `
  },
  {
    id: 6,
    title: "Add more personality",
    check: (code) => /<h2[^>]*>[^<]+<\/h2>/i.test(code) || /<ul[^>]*>[\s\S]*?<li[^>]*>/i.test(code),
    completeMsg: "Your page is really taking shape now.",
    nextHint: "One more — the free build.",
    instructions: `
      <div class="instruction-mission-num">Mission 6 of 7</div>
      <div class="instruction-title">Add more personality</div>
      <div class="instruction-body">
        <p>Two more tools to help structure your page. Use either one (or both) to complete this mission.</p>
        <p><strong>Subheading</strong> — to divide your page into sections:</p>
        <div class="code-block"><span class="tag-color">&lt;h2&gt;</span><span class="text-color">What I'm into</span><span class="tag-color">&lt;/h2&gt;</span></div>
        <p><strong>Bullet list</strong> — for listing things clearly:</p>
        <div class="code-block"><span class="tag-color">&lt;ul&gt;
  &lt;li&gt;</span><span class="text-color">Music production</span><span class="tag-color">&lt;/li&gt;
  &lt;li&gt;</span><span class="text-color">Photography</span><span class="tag-color">&lt;/li&gt;
  &lt;li&gt;</span><span class="text-color">Coffee</span><span class="tag-color">&lt;/li&gt;
&lt;/ul&gt;</span></div>
        <p><strong>&lt;ul&gt;</strong> wraps the whole list. Each <strong>&lt;li&gt;</strong> is one item inside it.</p>
        <div class="freedom-note">✦ Make it actually about you — your interests, your stack, your tastes. Whatever.</div>
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
    completeMsg: "You built a webpage. A real one. From scratch, in HTML.",
    nextHint: null,
    instructions: `
      <div class="instruction-mission-num">Mission 7 of 7</div>
      <div class="instruction-title">Build your own page</div>
      <div class="instruction-body">
        <p>No more hand-holding. You have the tools — now build your page your way.</p>
        <div class="freedom-note">✦ <strong>No correct answer.</strong> Your page should look like <em>you</em>, not like a tutorial example.</div>
        <p>To pass this mission your page needs at least: a heading, a paragraph, and one link. But don't stop there — add whatever you want:</p>
        <ul style="padding-left:18px;color:var(--text-soft);font-size:13.5px;line-height:2.1;list-style-type:disc">
          <li>Your name as a heading</li>
          <li>A short bio paragraph</li>
          <li>A profile photo</li>
          <li>Links to your socials or projects</li>
          <li>A list of your interests or hobbies</li>
          <li>A "currently" section — reading, listening to, working on</li>
          <li>Anything else you want</li>
        </ul>
        <div class="tip-box">💡 <strong>Stuck on a tag?</strong> Click "Reference" below — it shows everything you've learned.</div>
      </div>
    `
  }
];

const HINT_LEVELS = [
  [
    "Check the preview — does it look like a webpage yet? Make sure you've included all four parts.",
    "Hmm, not there yet. Compare your code carefully with the example — look for typos in the tags.",
    "You need: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> (with a title), and <code>&lt;body&gt;</code>.",
  ],
  [
    "Your heading needs to be inside the &lt;body&gt; tags.",
    "Make sure &lt;h1&gt; has a closing &lt;/h1&gt; — with text between them.",
    "It should look like: <code>&lt;h1&gt;Your text here&lt;/h1&gt;</code>",
  ],
  [
    "Your paragraph tag is &lt;p&gt; — it needs text between it and its closing &lt;/p&gt;.",
    "Try: <code>&lt;p&gt;Something about you.&lt;/p&gt;</code> — make sure both tags are there.",
    "Example: <code>&lt;p&gt;I make things on the internet.&lt;/p&gt;</code>",
  ],
  [
    "An image needs a src attribute with a URL. Check you've included that.",
    "Try: <code>&lt;img src=\"URL\" alt=\"description\"&gt;</code> — replace URL with a real image address.",
    "Example: <code>&lt;img src=\"https://placecats.com/200/200\" alt=\"A cat\"&gt;</code>",
  ],
  [
    "A link needs an href attribute. Check you've included that.",
    "Try: <code>&lt;a href=\"https://example.com\"&gt;Link text&lt;/a&gt;</code>",
    "Make sure the URL is inside quotes, and there's text between the &lt;a&gt; tags.",
  ],
  [
    "For this mission you need either a subheading (&lt;h2&gt;) or a list (&lt;ul&gt; with &lt;li&gt; items).",
    "A subheading: <code>&lt;h2&gt;Your section name&lt;/h2&gt;</code> — or start a list with &lt;ul&gt;",
    "A list: <code>&lt;ul&gt;&lt;li&gt;Item one&lt;/li&gt;&lt;li&gt;Item two&lt;/li&gt;&lt;/ul&gt;</code>",
  ],
  [
    "Check your page has a heading, a paragraph, and at least one link.",
    "Missing something? Work through the checklist in the instructions item by item.",
    "Make sure you have: &lt;h1&gt;, &lt;p&gt;, and &lt;a href=\"...\"&gt; — all inside &lt;body&gt;.",
  ]
];

const ELEMENT_EXPLANATIONS = {
  '!doctype': "Tells the browser this is an HTML document. Always goes on line 1.",
  'html': "The root element — everything on your page goes inside &lt;html&gt; and &lt;/html&gt;.",
  'head': "Holds info about your page — like its title. Nothing in &lt;head&gt; appears visually on the page.",
  'title': "Sets the text shown in the browser tab. Doesn't appear on the page itself.",
  '/head': "Closes the head section.",
  'body': "Everything visible goes here — headings, paragraphs, images, links, all of it.",
  '/body': "Closes the body. Everything visible must be between &lt;body&gt; and &lt;/body&gt;.",
  '/html': "Closes the entire HTML document.",
  'h1': "Main heading — the biggest one. Usually your name or page title. Most pages only have one &lt;h1&gt;.",
  '/h1': "Closes the main heading.",
  'h2': "Section heading — smaller than h1. Use it to divide your page into named sections.",
  '/h2': "Closes the section heading.",
  'h3': "Sub-section heading — smaller than h2.",
  '/h3': "Closes the h3.",
  'p': "A paragraph of text. The browser adds a little space above and below it automatically.",
  '/p': "Closes the paragraph.",
  'a': "A link. href sets the destination URL. The text between the tags is what people click.",
  '/a': "Closes the link.",
  'img': "An image. Unlike most tags it has no closing tag. src is the image URL; alt is a text description for screen readers.",
  'ul': "An unordered (bulleted) list. All &lt;li&gt; items go inside it.",
  '/ul': "Closes the list.",
  'li': "One item in a list — goes inside &lt;ul&gt; or &lt;ol&gt;.",
  '/li': "Closes the list item.",
  'br': "A line break — forces the next content to start on a new line.",
  'hr': "A horizontal rule — a visual divider between sections.",
  'strong': "Bold text. Use it to emphasise important words.",
  '/strong': "Closes the bold text.",
  'em': "Italic text. Use it for emphasis.",
  '/em': "Closes the italic.",
  'div': "A container element — groups things together but has no visual effect by itself.",
  '/div': "Closes the div container.",
  'span': "An inline container, like &lt;div&gt; but for small pieces of text.",
  '/span': "Closes the span.",
  'ol': "An ordered (numbered) list — items are numbered automatically.",
  '/ol': "Closes the numbered list.",
};

function escapeForHighlight(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightHTML(code) {
  let result = '';
  let i = 0;
  const len = code.length;

  while (i < len) {
    if (code[i] === '<') {
      if (code.slice(i, i + 4) === '<!--') {
        const end = code.indexOf('-->', i + 4);
        const commentEnd = end === -1 ? len : end + 3;
        result += `<span class="hl-comment">${escapeForHighlight(code.slice(i, commentEnd))}</span>`;
        i = commentEnd;
      } else if (code.slice(i, i + 9).toLowerCase() === '<!doctype') {
        const end = code.indexOf('>', i);
        const tagEnd = end === -1 ? len : end + 1;
        result += `<span class="hl-doctype">${escapeForHighlight(code.slice(i, tagEnd))}</span>`;
        i = tagEnd;
      } else {
        const end = code.indexOf('>', i);
        const tagEnd = end === -1 ? len : end + 1;
        const rawTag = code.slice(i, tagEnd);

        let tagHtml = '<span class="hl-tag-bracket">&lt;</span>';
        const inner = rawTag.slice(1, rawTag.endsWith('>') ? rawTag.length - 1 : rawTag.length);
        const isClose = inner.startsWith('/');
        const innerContent = isClose ? inner.slice(1) : inner;

        const nameMatch = innerContent.match(/^([a-zA-Z][a-zA-Z0-9]*)/);
        if (nameMatch) {
          if (isClose) tagHtml += '<span class="hl-tag-bracket">/</span>';
          tagHtml += `<span class="hl-tag-name">${nameMatch[1]}</span>`;
          let rest = innerContent.slice(nameMatch[1].length);

          const attrRegex = /(\s+)([a-zA-Z][a-zA-Z0-9\-]*)(\s*=\s*)(["'][^"']*["']|[^\s>]+)?/g;
          let lastIdx = 0;
          let attrMatch;
          let restResult = '';

          while ((attrMatch = attrRegex.exec(rest)) !== null) {
            restResult += escapeForHighlight(rest.slice(lastIdx, attrMatch.index));
            restResult += attrMatch[1];
            restResult += `<span class="hl-attr-name">${escapeForHighlight(attrMatch[2])}</span>`;
            if (attrMatch[3]) {
              restResult += `<span class="hl-attr-equals">${escapeForHighlight(attrMatch[3])}</span>`;
            }
            if (attrMatch[4]) {
              restResult += `<span class="hl-attr-value">${escapeForHighlight(attrMatch[4])}</span>`;
            }
            lastIdx = attrMatch.index + attrMatch[0].length;
          }
          restResult += escapeForHighlight(rest.slice(lastIdx));
          tagHtml += restResult;
        } else {
          tagHtml += escapeForHighlight(inner);
        }

        if (rawTag.endsWith('>')) tagHtml += '<span class="hl-tag-bracket">&gt;</span>';
        result += tagHtml;
        i = tagEnd;
      }
    } else if (code[i] === '&') {
      const semi = code.indexOf(';', i);
      if (semi !== -1 && semi - i < 12) {
        result += `<span class="hl-entity">${escapeForHighlight(code.slice(i, semi + 1))}</span>`;
        i = semi + 1;
      } else {
        result += `<span class="hl-text">&amp;</span>`;
        i++;
      }
    } else {
      let j = i;
      while (j < len && code[j] !== '<' && code[j] !== '&') j++;
      const text = code.slice(i, j);
      if (text.trim()) {
        result += `<span class="hl-text">${escapeForHighlight(text)}</span>`;
      } else {
        result += escapeForHighlight(text);
      }
      i = j;
    }
  }

  return result;
}

function updateHighlight() {
  const hl = document.getElementById('highlight-layer');
  if (!hl) return;
  hl.innerHTML = highlightHTML(editor.value) + '\n';
  hl.scrollTop = editor.scrollTop;
  hl.scrollLeft = editor.scrollLeft;
}

let currentMission = 0;
let hintCounts = new Array(MISSIONS.length).fill(0);
let completed = new Array(MISSIONS.length).fill(false);
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
  const hl = document.getElementById('highlight-layer');
  if (hl) {
    hl.scrollTop = editor.scrollTop;
    hl.scrollLeft = editor.scrollLeft;
  }
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
  instructionPanel.scrollTop = 0;

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
  if (m.check(editor.value)) {
    completed[currentMission] = true;
    document.querySelectorAll('.mission-btn')[currentMission].classList.add('completed');

    const done = completed.filter(Boolean).length;
    progressInner.style.width = Math.round((done / MISSIONS.length) * 100) + '%';
    progressText.textContent = `${done}/${MISSIONS.length}`;

    showComplete(m);
  } else {
    showHint(currentMission);
  }
}

function showHint(idx) {
  const hints = HINT_LEVELS[idx];
  const level = Math.min(hintCounts[idx], hints.length - 1);
  hintCounts[idx] = Math.min(hintCounts[idx] + 1, hints.length - 1);
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
    nextBtn.textContent = 'Enter free build mode →';
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
    <div class="instruction-mission-num">Free Build</div>
    <div class="instruction-title">Build whatever you want</div>
    <div class="instruction-body">
      <p>You know HTML now. This is your canvas.</p>
      <div class="freedom-note">✦ <strong>No instructions. No checklist.</strong> Just write the HTML you want and watch it appear in the preview.</div>
      <p>When you're done: select all the code in the editor, copy it, and save it as <strong>index.html</strong> on your computer. Open that file in a browser — that's your website.</p>
      <p>Use the Reference if you need a reminder of any tags.</p>
    </div>
  `;
  missionLabel.textContent = 'Free Build';
}

function explainCode() {
  const code = editor.value;
  if (!code.trim()) {
    explainContent.innerHTML = '<p class="explain-empty">Type some HTML first,<br>then click Explain.</p>';
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

  if (!html) html = '<p class="explain-empty">Nothing to explain yet.</p>';
  explainContent.innerHTML = html;
  explainPanel.classList.add('open');
}

function explainLine(line) {
  const lower = line.toLowerCase();
  if (lower.includes('<!doctype')) return ELEMENT_EXPLANATIONS['!doctype'];

  const tagMatch = lower.match(/<\/?([a-z][a-z0-9]*)/);
  if (!tagMatch) {
    if (line.length > 0) return "This is text content — it will appear directly on your page.";
    return "An empty line — HTML ignores these, but they help readability.";
  }

  const fullTag = lower.match(/<\/?[a-z][a-z0-9]*/)?.[0].replace('<', '').replace('/', '');
  const isClosing = line.startsWith('</');
  const lookupKey = isClosing ? `/${fullTag}` : fullTag;
  const baseExplanation = ELEMENT_EXPLANATIONS[lookupKey] || ELEMENT_EXPLANATIONS[fullTag] || null;

  if (!baseExplanation) {
    return isClosing ? `Closes the &lt;${fullTag}&gt; element.` : `This is a &lt;${fullTag}&gt; element.`;
  }

  let extra = '';
  if (!isClosing) {
    const hrefMatch = line.match(/href=["']([^"']+)["']/i);
    const srcMatch = line.match(/src=["']([^"']+)["']/i);
    const altMatch = line.match(/alt=["']([^"']+)["']/i);
    const textMatch = line.match(/>([^<]+)</);
    if (hrefMatch) extra += ` Links to: <strong>${escapeHtml(hrefMatch[1])}</strong>.`;
    if (srcMatch) extra += ` Image URL: <strong>${escapeHtml(srcMatch[1])}</strong>.`;
    if (altMatch) extra += ` Alt text: "<strong>${escapeHtml(altMatch[1])}</strong>".`;
    if (textMatch && textMatch[1].trim()) extra += ` Visible text: "<strong>${escapeHtml(textMatch[1].trim())}</strong>".`;
  }

  return baseExplanation + extra;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
  const refs = [
    { tag: '&lt;!DOCTYPE html&gt;', desc: 'Required at the top of every HTML file', ex: '&lt;!DOCTYPE html&gt;' },
    { tag: '&lt;html&gt;', desc: 'Wraps the entire document', ex: '&lt;html&gt; ... &lt;/html&gt;' },
    { tag: '&lt;head&gt;', desc: 'Page metadata — not visible on the page', ex: '&lt;head&gt;&lt;title&gt;Name&lt;/title&gt;&lt;/head&gt;' },
    { tag: '&lt;body&gt;', desc: 'Everything visible goes here', ex: '&lt;body&gt; ... &lt;/body&gt;' },
    { tag: '&lt;h1&gt;', desc: 'Main heading — one per page', ex: '&lt;h1&gt;My Name&lt;/h1&gt;' },
    { tag: '&lt;h2&gt;', desc: 'Section heading', ex: '&lt;h2&gt;My Links&lt;/h2&gt;' },
    { tag: '&lt;p&gt;', desc: 'Paragraph of text', ex: '&lt;p&gt;I make things.&lt;/p&gt;' },
    { tag: '&lt;a&gt;', desc: 'Clickable link', ex: '&lt;a href="https://..."&gt;Click me&lt;/a&gt;' },
    { tag: '&lt;img&gt;', desc: 'Image — no closing tag needed', ex: '&lt;img src="url" alt="description"&gt;' },
    { tag: '&lt;ul&gt; + &lt;li&gt;', desc: 'Bulleted list with items', ex: '&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;' },
    { tag: '&lt;br&gt;', desc: 'Line break', ex: 'Line one&lt;br&gt;Line two' },
    { tag: '&lt;strong&gt;', desc: 'Bold text', ex: '&lt;strong&gt;Important&lt;/strong&gt;' },
    { tag: '&lt;em&gt;', desc: 'Italic text', ex: '&lt;em&gt;Emphasis&lt;/em&gt;' },
    { tag: '&lt;hr&gt;', desc: 'Horizontal divider line', ex: '&lt;hr&gt;' },
  ];

  document.getElementById('ref-content').innerHTML = refs.map(r => `
    <div class="ref-item">
      <div class="ref-tag">${r.tag}</div>
      <div class="ref-desc">${r.desc}</div>
      ${r.ex ? `<div class="ref-example">${r.ex}</div>` : ''}
    </div>
  `).join('');
}

editor.addEventListener('input', () => {
  updateLineNumbers();
  updateHighlight();
  updatePreview();
  if (completed[currentMission]) return;
  const m = MISSIONS[currentMission];
  if (m.check(editor.value)) {
    completed[currentMission] = true;
    document.querySelectorAll('.mission-btn')[currentMission].classList.add('completed');
    const done = completed.filter(Boolean).length;
    progressInner.style.width = Math.round((done / MISSIONS.length) * 100) + '%';
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
  }
});

document.getElementById('btn-check').addEventListener('click', checkMission);
document.getElementById('btn-hint').addEventListener('click', () => showHint(currentMission));
document.getElementById('btn-explain').addEventListener('click', () => {
  if (explainPanel.classList.contains('open')) explainPanel.classList.remove('open');
  else explainCode();
});
document.getElementById('explain-close').addEventListener('click', () => explainPanel.classList.remove('open'));
document.getElementById('btn-ref').addEventListener('click', () => refPanel.classList.toggle('open'));
document.getElementById('ref-close').addEventListener('click', () => refPanel.classList.remove('open'));
completeOverlay.addEventListener('click', (e) => {
  if (e.target === completeOverlay) completeOverlay.classList.remove('show');
});

buildMissionNav();
buildRef();
setMission(0);
updateLineNumbers();
updateHighlight();
updatePreview();
