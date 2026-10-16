// SkillSwap 乐园 — agentqev.uk
// ES Module 格式：托管落地页 + 意向登记（落 D1）+ 简易管理视图
// 绑定经 env 访问：env.DB (D1), env.ADMIN_KEY

const LANDING_HTML = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>SkillSwap 乐园 · 全世界互相教</title>
<style>
  :root{--bg:#0f1226;--card:#1a1f3d;--accent:#7c5cff;--accent2:#22d3ee;--text:#e7e9f5;--muted:#9aa0c4}
  *{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif;background:radial-gradient(1200px 600px at 70% -10%,#241b54 0%,var(--bg) 55%);color:var(--text);line-height:1.6}
  .wrap{max-width:960px;margin:0 auto;padding:32px 20px 64px}
  header{padding:40px 0 8px}
  .badge{display:inline-block;font-size:13px;color:var(--accent2);border:1px solid #2b3360;background:#161b38;padding:4px 12px;border-radius:999px;margin-bottom:16px}
  h1{font-size:40px;line-height:1.15;margin:0 0 12px;background:linear-gradient(90deg,#fff,#b9a8ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .sub{color:var(--muted);font-size:18px;max-width:680px}
  .pillars{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:36px 0}
  .pillar{background:var(--card);border:1px solid #2b3360;border-radius:16px;padding:22px}
  .pillar h3{margin:0 0 8px;font-size:19px}
  .pillar p{margin:0;color:var(--muted);font-size:15px}
  .pillar .en{color:#6f76a8;font-size:13px;margin-top:10px}
  .card{background:var(--card);border:1px solid #2b3360;border-radius:18px;padding:28px;margin-top:24px}
  .card h2{margin:0 0 6px;font-size:24px}
  .card .hint{color:var(--muted);margin:0 0 20px;font-size:14px}
  label{display:block;font-size:14px;color:var(--muted);margin:14px 0 6px}
  input,select,textarea{width:100%;padding:11px 12px;border-radius:10px;border:1px solid #2b3360;background:#0f1330;color:var(--text);font-size:15px;outline:none}
  input:focus,select:focus,textarea:focus{border-color:var(--accent)}
  .row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  button{margin-top:20px;width:100%;padding:14px;border:0;border-radius:12px;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#0b0e22;font-size:16px;font-weight:700;cursor:pointer}
  button:disabled{opacity:.6;cursor:default}
  .msg{margin-top:14px;font-size:14px;min-height:20px}
  .ok{color:#34d399}.err{color:#f87171}
  footer{margin-top:40px;color:var(--muted);font-size:14px;text-align:center}
  footer a{color:var(--accent2);text-decoration:none}
  .en-only{color:#7e85b8;font-size:13px}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <span class="badge">开源共建 · Open Source · GitHub: genlivo/skillswap</span>
    <h1>SkillSwap 乐园<br/>全世界的人，互相教</h1>
    <p class="sub">中文小孩找外国人练语言；想学 AI / Agent 的人找到会的人；任何一门手艺，都能在这里找到老师或学生。</p>
    <p class="en-only">A global skill-exchange playground: language partners, AI/Agent mentors, and any skill you can teach or learn.</p>
  </header>

  <section class="pillars">
    <div class="pillar">
      <h3>🗣️ 语言交换</h3>
      <p>中国孩子想练地道英语/日语/西语，海外朋友想学中文 —— 配对、互教、长期语伴。</p>
      <p class="en">Language exchange between Chinese learners and native speakers worldwide.</p>
    </div>
    <div class="pillar">
      <h3>🤖 AI / Agent 技能</h3>
      <p>会用 AI、会搭 Agent 的人，带零基础的人上手；从提示词到自动化工作流。</p>
      <p class="en">AI & Agent skills — mentors help beginners ship their first automation.</p>
    </div>
    <div class="pillar">
      <h3>🎸 任何技能</h3>
      <p>吉他、绘画、编程、烹饪、理财…… 你会的，教别人；你想学的，找老师。</p>
      <p class="en">Any skill: teach what you know, learn what you don't.</p>
    </div>
  </section>

  <section class="card">
    <h2>登记你的意向</h2>
    <p class="hint">留下你想学 / 能教的，我们（和志愿者）帮你配对。中英文都可填。</p>
    <form id="f">
      <div class="row">
        <div><label>昵称 / Name</label><input name="name" required placeholder="怎么称呼你" /></div>
        <div><label>角色 / Role</label>
          <select name="role" required>
            <option value="learn">想学 / Want to learn</option>
            <option value="teach">能教 / Can teach</option>
            <option value="both">都能 / Both</option>
          </select>
        </div>
      </div>
      <label>技能 / 语言 / Skill or Language</label>
      <input name="skill" required placeholder="例如：英语口语、AI Agent、吉他、Python" />
      <div class="row">
        <div><label>教学语言 / Medium</label><input name="lang" placeholder="中文 / English / 日本語…" /></div>
        <div><label>时区 / Timezone</label><input name="tz" placeholder="UTC+8 / GMT+0…" /></div>
      </div>
      <label>联系方式 / Contact</label>
      <input name="contact" required placeholder="邮箱 / 微信 / QQ —— 方便我们联系你" />
      <label>备注 / Note</label>
      <textarea name="note" rows="3" placeholder="想找什么样的搭档？有什么要求？"></textarea>
      <button id="b" type="submit">提交意向 / Submit</button>
      <div class="msg" id="msg"></div>
    </form>
  </section>

  <footer>
    合作 / 共建：<a href="mailto:community@agentqev.uk">community@agentqev.uk</a> · 投稿：<a href="mailto:contribute@agentqev.uk">contribute@agentqev.uk</a><br/>
    © 2026 SkillSwap 乐园 · 由左权社区助手发起
  </footer>
</div>
<script>
const f=document.getElementById('f'),b=document.getElementById('b'),msg=document.getElementById('msg');
f.addEventListener('submit',async e=>{
  e.preventDefault();
  b.disabled=true;msg.className='msg';msg.textContent='提交中…';
  const d=Object.fromEntries(new FormData(f).entries());
  try{
    const r=await fetch('/api/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});
    const j=await r.json();
    if(r.ok){msg.className='msg ok';msg.textContent='✅ 已收到！我们会尽快帮你配对。/ Received — we will match you soon.';f.reset();}
    else{msg.className='msg err';msg.textContent='❌ '+(j.error||'提交失败');}
  }catch(err){msg.className='msg err';msg.textContent='❌ 网络错误，请重试';}
  b.disabled=false;
});
</script>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/register' && request.method === 'POST') {
      return register(request, env);
    }
    if (url.pathname === '/admin') {
      return admin(request, env);
    }
    return new Response(LANDING_HTML, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};

async function register(request, env) {
  try {
    const d = await request.json();
    const name = (d.name || '').toString().trim();
    const role = (d.role || '').toString().trim();
    const skill = (d.skill || '').toString().trim();
    const lang = (d.lang || '').toString().trim();
    const tz = (d.tz || '').toString().trim();
    const contact = (d.contact || '').toString().trim();
    const note = (d.note || '').toString().trim();

    if (!name || !skill || !contact) {
      return json({ error: '昵称、技能、联系方式为必填' }, 400);
    }
    if (!['learn', 'teach', 'both'].includes(role)) {
      return json({ error: 'role 不合法' }, 400);
    }
    if (contact.length > 200 || note.length > 1000) {
      return json({ error: '内容过长' }, 400);
    }

    await env.DB.prepare(
      `INSERT INTO intents (created_at,name,role,skill,lang,tz,contact,note)
       VALUES (datetime('now'),?,?,?,?,?,?,?)`
    )
      .bind(name.slice(0, 60), role, skill.slice(0, 120), lang.slice(0, 60), tz.slice(0, 40), contact.slice(0, 200), note.slice(0, 1000))
      .run();

    return json({ ok: true });
  } catch (e) {
    return json({ error: '服务器错误: ' + e.message }, 500);
  }
}

async function admin(request, env) {
  const key = new URL(request.url).searchParams.get('key');
  if (key !== env.ADMIN_KEY) {
    return new Response('Unauthorized', { status: 401 });
  }
  const { results } = await env.DB.prepare(
    'SELECT id,created_at,name,role,skill,lang,tz,contact,note FROM intents ORDER BY id DESC LIMIT 200'
  ).all();
  const rows = results
    .map(
      (r) =>
        `<tr><td>${r.id}</td><td>${r.created_at}</td><td>${esc(r.name)}</td><td>${r.role}</td><td>${esc(r.skill)}</td><td>${esc(r.lang)}</td><td>${esc(r.tz)}</td><td>${esc(r.contact)}</td><td>${esc(r.note)}</td></tr>`
    )
    .join('');
  return new Response(
    `<!doctype html><meta charset=utf-8><title>意向列表</title>
    <style>body{font-family:sans-serif;background:#0f1226;color:#e7e9f5;padding:24px}
    table{border-collapse:collapse;width:100%;font-size:13px}th,td{border:1px solid #2b3360;padding:6px 8px;text-align:left}
    th{background:#1a1f3d}</style>
    <h2>SkillSwap 意向登记（${results.length}）</h2>
    <table><thead><tr><th>ID</th><th>时间</th><th>昵称</th><th>角色</th><th>技能</th><th>语言</th><th>时区</th><th>联系</th><th>备注</th></tr></thead>
    <tbody>${rows}</tbody></table>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
