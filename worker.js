// SkillSwap 乐园 — agentqev.uk
// ES Module 格式：托管落地页（招募转化页）+ 意向登记（落 D1）+ 简易管理视图
// 绑定经 env 访问：env.DB (D1), env.ADMIN_KEY

const LANDING_HTML = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>SkillSwap 乐园 · 全世界互相教</title>
<meta name="description" content="SkillSwap 全球技能互换乐园：语言交换 + AI/Agent 技能 + 任意技能匹配。2027-01-15 正式启动，全球招募 18 名骨干。" />
<style>
  :root{--bg:#0f1226;--card:#1a1f3d;--accent:#7c5cff;--accent2:#22d3ee;--text:#e7e9f5;--muted:#9aa0c4}
  *{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif;background:radial-gradient(1200px 600px at 70% -10%,#241b54 0%,var(--bg) 55%);color:var(--text);line-height:1.6}
  .wrap{max-width:980px;margin:0 auto;padding:24px 20px 64px}
  .topbar{display:flex;justify-content:flex-end;gap:8px;margin-bottom:8px}
  .langbtn{font-size:13px;color:var(--accent2);border:1px solid #2b3360;background:#161b38;padding:5px 12px;border-radius:999px;cursor:pointer}
  .cd{display:flex;align-items:center;gap:14px;background:linear-gradient(90deg,#1a1f3d,#241b54);border:1px solid #2b3360;border-radius:16px;padding:16px 20px;margin:8px 0 28px;flex-wrap:wrap}
  .cd .lbl{font-size:14px;color:var(--muted)}
  .cd .num{font-size:30px;font-weight:800;background:linear-gradient(90deg,#fff,#b9a8ff);-webkit-background-clip:text;background-clip:text;color:transparent;font-variant-numeric:tabular-nums}
  .cd .unit{font-size:13px;color:var(--muted);margin-left:-8px;margin-right:10px}
  header{padding:8px 0}
  .badge{display:inline-block;font-size:13px;color:var(--accent2);border:1px solid #2b3360;background:#161b38;padding:4px 12px;border-radius:999px;margin-bottom:16px}
  h1{font-size:40px;line-height:1.15;margin:0 0 12px;background:linear-gradient(90deg,#fff,#b9a8ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .sub{color:var(--muted);font-size:18px;max-width:680px}
  .pillars{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:36px 0}
  .pillar{background:var(--card);border:1px solid #2b3360;border-radius:16px;padding:22px}
  .pillar h3{margin:0 0 8px;font-size:19px}
  .pillar p{margin:0;color:var(--muted);font-size:15px}
  .pillar .en{color:#6f76a8;font-size:13px;margin-top:10px}
  .recruit{background:linear-gradient(135deg,#1a1f3d,#2a1f4d);border:1px solid #3a2f6e;border-radius:20px;padding:30px;margin:28px 0}
  .recruit h2{margin:0 0 6px;font-size:26px;background:linear-gradient(90deg,#fff,#c4b5ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .recruit .lead{color:var(--muted);margin:0 0 18px;font-size:15px}
  .terms{list-style:none;padding:0;margin:0 0 22px;display:grid;gap:12px}
  .terms li{background:#161b38;border:1px solid #2b3360;border-radius:12px;padding:14px 16px;font-size:15px;display:flex;gap:10px;align-items:flex-start}
  .terms .k{color:var(--accent2);font-weight:700;white-space:nowrap}
  .cta{display:inline-block;text-decoration:none;padding:15px 28px;border:0;border-radius:12px;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#0b0e22;font-size:17px;font-weight:800}
  .card{background:var(--card);border:1px solid #2b3360;border-radius:18px;padding:28px;margin-top:24px}
  .card h2{margin:0 0 6px;font-size:24px}
  .card .hint{color:var(--muted);margin:0 0 20px;font-size:14px}
  label{display:block;font-size:14px;color:var(--muted);margin:14px 0 6px}
  input,select,textarea{width:100%;padding:11px 12px;border-radius:10px;border:1px solid #2b3360;background:#0f1330;color:var(--text);font-size:15px;outline:none}
  input:focus,select:focus,textarea:focus{border-color:var(--accent)}
  .row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  button.sub{margin-top:20px;width:100%;padding:14px;border:0;border-radius:12px;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#0b0e22;font-size:16px;font-weight:700;cursor:pointer}
  button.sub:disabled{opacity:.6;cursor:default}
  .msg{margin-top:14px;font-size:14px;min-height:20px}
  .ok{color:#34d399}.err{color:#f87171}
  footer{margin-top:40px;color:var(--muted);font-size:14px;text-align:center}
  footer a{color:var(--accent2);text-decoration:none}
  .en-only{color:#7e85b8;font-size:13px}
  [data-lang="zh"] .en{display:none}
  [data-lang="en"] .zh{display:none}
  @media(max-width:560px){.row{grid-template-columns:1fr}.cd .num{font-size:24px}}
</style>
</head>
<body data-lang="zh">
<div class="wrap">
  <div class="topbar"><span class="langbtn" id="langBtn" onclick="toggleLang()">EN / 中</span></div>

  <div class="cd">
    <span class="lbl zh">距项目正式启动</span><span class="lbl en">Launch countdown</span>
    <span class="num" id="cd-d">--</span><span class="unit zh">天</span><span class="unit en">days</span>
    <span class="num" id="cd-h">--</span><span class="unit zh">时</span><span class="unit en">h</span>
    <span class="num" id="cd-m">--</span><span class="unit zh">分</span><span class="unit en">m</span>
    <span class="num" id="cd-s">--</span><span class="unit zh">秒</span><span class="unit en">s</span>
  </div>

  <header>
    <span class="badge zh">开源共建 · Open Source · GitHub: genlivo/skillswap</span>
    <span class="badge en">Open Source · GitHub: genlivo/skillswap</span>
    <h1 class="zh">SkillSwap 乐园<br/>全世界的人，互相教</h1>
    <h1 class="en">SkillSwap Playground<br/>Everyone teaches everyone</h1>
    <p class="sub zh">中文小孩找外国人练语言；想学 AI / Agent 的人找到会的人；任何一门手艺，都能在这里找到老师或学生。</p>
    <p class="sub en">Chinese learners find native speakers; AI/Agent beginners find mentors; any craft finds its teacher or student here.</p>
  </header>

  <section class="recruit">
    <h2 class="zh">全球招募 · 18 名骨干（不含发起人）</h2>
    <h2 class="en">Global call · 18 core members (excluding founder)</h2>
    <p class="lead zh">项目 2027-01-15 正式启动，以 SkillSwap 为核心延伸分支、走向真正商业化。我们找一支正式的团队，不是围观者。</p>
    <p class="lead en">Launches 2027-01-15. Build a real commercial team around SkillSwap and its spin-offs — not bystanders.</p>
    <ul class="terms">
      <li><span class="k zh">人数</span><span class="k en">Size</span><span class="zh">面向外部招募 18 名骨干，不含发起人本人。</span><span class="en">18 external core members, founder not counted.</span></li>
      <li><span class="k zh">地点</span><span class="k en">Where</span><span class="zh">可来中国 · 山西 · 晋中 · 左权县驻地，与发起人当面共谋。</span><span class="en">Come to the founder's base in Zuoquan County, Shanxi, China.</span></li>
      <li><span class="k zh">路费</span><span class="k en">Travel</span><span class="zh">往返交通、签证及途中一切费用，全部本人自理。</span><span class="en">All travel, visa and transit costs are self-paid.</span></li>
      <li><span class="k zh">考察</span><span class="k en">Eval</span><span class="zh">抵达后先考察一段时间，再定是否纳入合伙人及待遇。</span><span class="en">After arrival, a trial period decides partnership & benefits.</span></li>
      <li><span class="k zh">周期</span><span class="k en">Timeline</span><span class="zh">自正式启动到落成上市，全程 100 天（约 2027-04-25）。</span><span class="en">100 days from launch to public launch (~2027-04-25).</span></li>
    </ul>
    <a class="cta zh" href="mailto:contribute@agentqev.uk?subject=%E9%AA%A8%E5%B9%B2%E5%85%A5%E4%BC%99&body=%E5%A7%94%E7%BA%B3%E4%BA%BA%E5%A5%BD%EF%BC%8C%E6%88%91%E6%84%8F%E5%90%91%E6%88%90%E4%B8%BA%E9%AA%A8%E5%B9%B2%EF%BC%9A%0A1.%20%E5%8F%AF%E5%88%B0%E9%A9%BB%E5%9C%B0%E6%97%B6%E9%97%B4%EF%BC%9A%0A2.%20%E6%89%BF%E6%8B%85%E8%A7%92%E8%89%B2%EF%BC%9A%0A3.%20%E6%9C%9F%E6%9C%9B%E8%A7%92%E8%89%B2%EF%BC%9A">申请成为骨干 →</a>
    <a class="cta en" href="mailto:contribute@agentqev.uk?subject=Core%20Member&body=Hi%2C%20I%20want%20to%20join%20as%20a%20core%20member%3A%0A1.%20Arrival%20window%3A%0A2.%20Role%20I%20can%20take%3A%0A3.%20Skills%3A">Apply as core member →</a>
  </section>

  <section class="pillars">
    <div class="pillar">
      <h3 class="zh">🗣️ 语言交换</h3><h3 class="en">🗣️ Language</h3>
      <p class="zh">中国孩子想练地道英语/日语/西语，海外朋友想学中文 —— 配对、互教、长期语伴。</p>
      <p class="en">Chinese learners & native speakers worldwide pair up as long-term language partners.</p>
    </div>
    <div class="pillar">
      <h3 class="zh">🤖 AI / Agent 技能</h3><h3 class="en">🤖 AI / Agent</h3>
      <p class="zh">会用 AI、会搭 Agent 的人，带零基础的人上手；从提示词到自动化工作流。</p>
      <p class="en">Mentors help beginners ship their first AI automation, from prompts to workflows.</p>
    </div>
    <div class="pillar">
      <h3 class="zh">🎸 任何技能</h3><h3 class="en">🎸 Any skill</h3>
      <p class="zh">吉他、绘画、编程、烹饪、理财…… 你会的，教别人；你想学的，找老师。</p>
      <p class="en">Guitar, art, coding, cooking, finance — teach what you know, learn what you don't.</p>
    </div>
  </section>

  <section class="card">
    <h2 class="zh">登记你的技能意向</h2><h2 class="en">List your skill intent</h2>
    <p class="hint zh">想学 / 能教都可以留，我们帮你配对。中英文都可填。</p>
    <p class="hint en">Want to learn or can teach — leave it here, we'll match you. Any language OK.</p>
    <form id="f">
      <div class="row">
        <div><label class="zh">昵称 / Name</label><label class="en">Name</label><input name="name" required placeholder="怎么称呼你" /></div>
        <div><label class="zh">角色 / Role</label><label class="en">Role</label>
          <select name="role" required>
            <option value="learn">想学 / Want to learn</option>
            <option value="teach">能教 / Can teach</option>
            <option value="both">都能 / Both</option>
          </select>
        </div>
      </div>
      <label class="zh">技能 / 语言 / Skill or Language</label><label class="en">Skill or Language</label>
      <input name="skill" required placeholder="例如：英语口语、AI Agent、吉他、Python" />
      <div class="row">
        <div><label class="zh">教学语言 / Medium</label><label class="en">Medium</label><input name="lang" placeholder="中文 / English / 日本語…" /></div>
        <div><label class="zh">时区 / Timezone</label><label class="en">Timezone</label><input name="tz" placeholder="UTC+8 / GMT+0…" /></div>
      </div>
      <label class="zh">联系方式 / Contact</label><label class="en">Contact</label>
      <input name="contact" required placeholder="邮箱 / 微信 / QQ —— 方便我们联系你" />
      <label class="zh">备注 / Note</label><label class="en">Note</label>
      <textarea name="note" rows="3" placeholder="想找什么样的搭档？有什么要求？"></textarea>
      <button class="sub" id="b" type="submit">提交意向 / Submit</button>
      <div class="msg" id="msg"></div>
    </form>
  </section>

  <footer>
    <span class="zh">合作 / 共建：<a href="mailto:community@agentqev.uk">community@agentqev.uk</a> · 骨干入伙：<a href="mailto:contribute@agentqev.uk">contribute@agentqev.uk</a></span>
    <span class="en">Collaborate: <a href="mailto:community@agentqev.uk">community@agentqev.uk</a> · Join as core: <a href="mailto:contribute@agentqev.uk">contribute@agentqev.uk</a></span><br/>
    © 2026 SkillSwap 乐园 · 由左权社区助手发起
  </footer>
</div>
<script>
function toggleLang(){var b=document.body; b.dataset.lang = b.dataset.lang==='zh'?'en':'zh';}
var target=new Date('2027-01-15T00:00:00Z').getTime();
function tick(){
  var diff=target-Date.now();
  if(diff<=0){document.getElementById('cd-d').textContent='0';document.getElementById('cd-h').textContent='00';document.getElementById('cd-m').textContent='00';document.getElementById('cd-s').textContent='00';return;}
  var d=Math.floor(diff/86400000);var h=Math.floor(diff%86400000/3600000);var m=Math.floor(diff%3600000/60000);var s=Math.floor(diff%60000/1000);
  function p(n){return (n<10?'0':'')+n;}
  document.getElementById('cd-d').textContent=d;
  document.getElementById('cd-h').textContent=p(h);
  document.getElementById('cd-m').textContent=p(m);
  document.getElementById('cd-s').textContent=p(s);
}
tick();setInterval(tick,1000);

var f=document.getElementById('f'),b=document.getElementById('b'),msg=document.getElementById('msg');
f.addEventListener('submit',async function(e){
  e.preventDefault();
  b.disabled=true;msg.className='msg';msg.textContent='提交中…';
  var d=Object.fromEntries(new FormData(f).entries());
  try{
    var r=await fetch('/api/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});
    var j=await r.json();
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
