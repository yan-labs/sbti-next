# RUNBOOK：哥飞 SEO Agent（网页版，无对话 API）

**触发语 →  走本 RUNBOOK 全套**：「和哥飞对话」「问问哥飞」「找那个 SEO Agent」
「让哥飞验一下」。听到这些就照下面执行，不必重新摸索。

## 为什么不能走 API

哥飞开放的是**单点数据接口**：`/kd/api/v1/kd`（关键词难度）、`/referring/api/site`（引荐域）、
以及一个 KD 的 MCP 端点——这些照常直接调。
**对话 Agent 本体没有 API**：只有网页形态，要登录态、按条扣积分。
所以走 `<rankup-skill>/scripts/chatbot-drive.browser.js`，在**用户自己的 Chrome** 里驱动。

## 步骤

1. 新开一个 tab（别复用别人的），导到 `https://seo.web.cafe/chat/`。
2. 把 `chatbot-drive.browser.js` **整段**注入（别手打精简版）。
3. `__rk.init(PROFILE)` —— PROFILE 见下。
4. **先看要不要接着上一轮**：`__rk.sessions()` 列侧边栏，`__rk.open('<id>')` 点回去。
   接在原会话里它才有上下文，才能做「你上次说 X，现在新证据推翻了吗」这种复核。
   `open()` 常常在 CDP 45s 超时里返回失败，**但副作用已生效**——用
   `__rk.session()` 核对 id 对上没有，别重发。
5. 长文提问用 base64 传：`atob` + `TextDecoder` 解出来再 `__rk.send(txt)`，
   避开正文里的反引号把 JS 模板字符串撑破。
6. `__rk.wait(14000)` 反复轮询到 `done:true`。工具调用阶段 `len` 会长时间不动，正常。
7. `__rk.capture()` 取全文，然后 POST 给本地 receiver 落盘：
   `fetch('http://127.0.0.1:<port>/slice?seed=gefei&kind=raw&slice=<主题>',{method:'POST',body:__rk.raw()})`
   —— 端口读 `.rankup/receiver.json`。落地后 `mv` 进 `.rankup/consults/`，删掉 seeds 下的空目录。
8. `__rk.session()` 记 `{id, title}` 进 `data/gefei/conversations.md`。**认 id，不认标题。**

## PROFILE（本站点实测）

```js
{input:'textarea#q', send:'#send', log:'#chatlog', answer:'.msg.ai',
 copy:'button.anscopy', busyText:'停止', idleText:'发送',
 convItem:'#convlist .convitem', convIdAttr:'id', convSearch:'#convSearch'}
```

## 判断纪律

- 按条扣费，**问题一次问完整**，追问是另一次消费。
- 它调外部工具查回来的数据可以采信——**但要能和你手上另一个口径对上**。
  2026-08-20 实测它把两个新站的流量快照报错了一到两个数量级（还方向相反），
  并据此开出一条 P0 结论。对不上时以自己当场拉的原始报表为准。
