import {Question} from '../types';

export const mainQuestions: Question[] = [
  {id: 'q1', dim: 'S1', text: '我觉得自己还不错，值得被爱。', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q2', dim: 'S1', text: '如果有人认真地夸了你一句"你真的很优秀"，你的第一反应是？', options: [{label: '我哭了。。', value: 1}, {label: '这是什么。。', value: 2}, {label: '这不是我！', value: 3}]},
  {id: 'q3', dim: 'S2', text: '如果用一段话概括"我是一个什么样的人"，你能说得清楚吗？', options: [{label: '并没有', value: 1}, {label: '也许？', value: 2}, {label: '是的！（问心无愧骄傲脸）', value: 3}]},
  {id: 'q4', dim: 'S2', text: '我内心有真正追求的东西', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q5', dim: 'S3', text: '我会为自己真正相信的东西付出时间和精力', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q6', dim: 'S3', text: '你有没有认真做过一件"不为赚钱也不为别人夸，纯粹因为觉得该做"的事？', options: [{label: '这种情况较少。', value: 1}, {label: '可能碍于情面或者关系。', value: 2}, {label: '不想让别人知道自己是个阴暗的人。', value: 3}]},
  {id: 'q7', dim: 'E1', text: '假设你是一位恋人，你认为健康的恋爱关系是双方应保持独立人格？', options: [{label: '我更喜欢依赖与被依赖', value: 1}, {label: '看情况', value: 2}, {label: '是的！（斩钉截铁地说道）', value: 3}]},
  {id: 'q8', dim: 'E1', text: '你的恋人/朋友说今天和你约好的聚会因"拉稀5小时了"来不了了。', options: [{label: '拉稀不可能5小时，也许ta隐瞒了我。', value: 1}, {label: '在信任和怀疑之间摇摆。', value: 2}, {label: '也许今天ta真的不太舒服。', value: 3}]},
  {id: 'q9', dim: 'E2', text: '如果遇到一个很投缘的人/恋人，你会怎样？', options: [{label: '就算ta再优秀我也不会陷入太深。', value: 1}, {label: '会介于A和C之间。', value: 2}, {label: '会非常珍惜ta，也许会变成恋爱脑。', value: 3}]},
  {id: 'q10', dim: 'E2', text: '一个你单方面认识的小女孩走过来给了你一个棒棒糖。', options: [{label: '呜呜她真好真可爱！居然给我棒棒糖！', value: 3}, {label: '一脸懵逼，作挠头状', value: 2}, {label: '这也许是一种新型诈骗？还是走开为好。', value: 1}]},
  {id: 'q11', dim: 'E3', text: '你会经常查看恋人/好友的社交账号动态，看TA有没有在和别人聊天/互动？', options: [{label: '确实', value: 1}, {label: '有时', value: 2}, {label: '不是', value: 3}]},
  {id: 'q12', dim: 'E3', text: '假设你是一位恋人。你的恋人说想要时刻和你待在一起、分享一切，你的感受是？', options: [{label: '那很爽了', value: 1}, {label: '都行无所谓', value: 2}, {label: '我更喜欢保留独立空间', value: 3}]},
  {id: 'q13', dim: 'A1', text: '你相信大部分人心底是善良的吗？', options: [{label: '其实邪恶的人心比世界上的痔疮更多。', value: 1}, {label: '也许吧。', value: 2}, {label: '是的，我愿相信好人更多。', value: 3}]},
  {id: 'q14', dim: 'A1', text: '你觉得这个世界整体上是可信赖的，还是充满了隐藏的陷阱？', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q15', dim: 'A2', text: '你做事前会列出详细计划，还是习惯走一步看一步？', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q16', dim: 'A2', text: '我会提前制定详细计划、并严格按照计划执行。', options: [{label: '然而计划不如变化快。', value: 1}, {label: '有时能完成，有时不能。', value: 2}, {label: '我讨厌被打破计划。', value: 3}]},
  {id: 'q17', dim: 'A3', text: '我感觉生活有明确的意义和方向。', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q18', dim: 'A3', text: '是否你也同意你正活出自己想要的样子', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q19', dim: 'Ac1', text: '做一件事时，你的核心动力更多是"我想赢/做得更好"还是"别出错/别丢脸"？', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q20', dim: 'Ac1', text: '是否同意：我是一个上进心很强的人', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q21', dim: 'Ac2', text: '关于快速做决定这件事，你是否会在脑中反复思考各种方案和角度？', options: [{label: '反复思考后感觉应该选A？', value: 1}, {label: '啊，要不选B？', value: 2}, {label: '不会就选C？', value: 3}]},
  {id: 'q22', dim: 'Ac2', text: '你坐在马桶上已经四十分钟了却没有拉出来。你接下来会？', options: [{label: '再坐三十分钟看看，说不定就有了。', value: 1}, {label: '用力拍打自己的屁股并说："死屁股，快拉啊！"', value: 2}, {label: '使用开塞露，快点拉出来才好。', value: 3}]},
  {id: 'q23', dim: 'Ac3', text: '假如你是一个临近考试的学生，一个很好的朋友邀请你去外地旅游。你会？', options: [{label: '翘了！反正就一次！', value: 1}, {label: '干脆请个假吧。', value: 2}, {label: '都快考试了还去啥。', value: 3}]},
  {id: 'q24', dim: 'Ac3', text: '你是那种"被逼到最后一刻才爆发执行力"的人吗？', options: [{label: '我被逼到最后确实执行力超强。。。', value: 1}, {label: '啊，有时候吧。', value: 2}, {label: '是的，事情本来就该被推进', value: 3}]},
  {id: 'q25', dim: 'So1', text: '在一个全是陌生人的聚会上，你会主动找人搭话吗？', options: [{label: '网上口嗨下就算了，真见面还是有点忐忑。', value: 1}, {label: '见网友也挺好，反正谁来聊我就聊两句。', value: 2}, {label: '我会打扮一番并热情聊天，万一呢，我是说万一呢？', value: 3}]},
  {id: 'q26', dim: 'So1', text: '我是一个在社交中主动且外向的人。', options: [{label: '是的', value: 3}, {label: '偶尔', value: 2}, {label: '不是', value: 1}]},
  {id: 'q27', dim: 'So2', text: '你的朋友的朋友来了，你会怎么对待这位"二度关系"的人？', options: [{label: '对"朋友的朋友"天然有点距离感，怕影响二人关系', value: 1}, {label: '看对方，能玩就玩。', value: 2}, {label: '朋友的朋友应该也算我的朋友！要热情聊天', value: 3}]},
  {id: 'q28', dim: 'So2', text: '有时候你说的话和心里真正想的不太一样', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q29', dim: 'So3', text: '在不同的社交场景中（工作、朋友、家人），你的表现会有明显不同吗？', options: [{label: '不认同', value: 1}, {label: '中立', value: 2}, {label: '认同', value: 3}]},
  {id: 'q30', dim: 'So3', text: '保坂进一，我以前可能觉得你很有趣甚至很帅，但其实你只不过是个无聊的人罢了，真的，从今天起我再也不想看到你这张脸了，听到了吗，你被我开除了。', options: [{label: '我哭了。。', value: 1}, {label: '这是什么。。', value: 2}, {label: '这不是我！', value: 3}]},
];

export const specialQuestions: Question[] = [
  {
    id: 'drink_gate_q1',
    kind: 'drink_gate',
    text: '您平时有什么爱好？',
    options: [
      {label: '吃喝拉撒', value: 1},
      {label: '艺术爱好', value: 2},
      {label: '饮酒', value: 3},
      {label: '健身', value: 4},
    ],
  },
  {
    id: 'drink_gate_q2',
    kind: 'drink_gate',
    text: '请问您是否认同以下说法？',
    options: [
      {label: '我偶尔会喝一点，但不多。', value: 1},
      {label: '我习惯将白酒灌在保温杯，当白开水喝，酒精令我信服。', value: 2},
    ],
  },
];
