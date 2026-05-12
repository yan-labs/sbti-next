import {copyFile, mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

const games = [
  {
    slug: 'league-of-legends',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01c71425e481918a79db4184232abd.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01b8456c74819194740ef80a44401d.png',
  },
  {
    slug: 'counter-strike-2',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01c781b7dc8191b8abf869f5deeb36.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01b8bb40fc8191bdf3b366d831b4ea.png',
  },
  {
    slug: 'valorant',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01c8362f9c8191a75f0f3cf0d8cea8.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01b92e3dd48191b780811721fff635.png',
  },
  {
    slug: 'delta-force',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01c8fd52b08191bf425bf072c287ac.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01b9a395c8819199ed69a326b4a325.png',
  },
  {
    slug: 'honor-of-kings',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01c9b58858819189655a8f686ef6b2.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01ba1017f881919edb0c3d4f4eb76b.png',
  },
  {
    slug: 'overwatch-2',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01cb69b288819190322548e5c98754.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01ba8901f481918d7ab740077a5411.png',
  },
  {
    slug: 'pubg-battlegrounds',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01cbda6d488191b88cb84c5bbf2e12.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01bb08358c8191b805efa92e631d02.png',
  },
  {
    slug: 'apex-legends',
    cover:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01ccba35408191958c804d971df929.png',
    resultSheet:
      '/Users/kcsx/.codex/generated_images/019e164c-76ab-7132-bb59-7d06468718af/ig_02d6102f0a09e51f016a01bb7bd5608191b3a4419ebfdd4bd5.png',
  },
];

const resultPanels = [
  {id: 'planner', row: 0, col: 0},
  {id: 'carry', row: 0, col: 1},
  {id: 'support', row: 1, col: 0},
  {id: 'chaos', row: 1, col: 1},
];

async function extractResultPanel(source, panel, output) {
  const metadata = await sharp(source).metadata();
  const width = metadata.width ?? 1254;
  const height = metadata.height ?? 1254;
  const cellW = Math.floor(width / 2);
  const cellH = Math.floor(height / 2);

  await sharp(source)
    .extract({
      left: panel.col * cellW,
      top: panel.row * cellH,
      width: cellW,
      height: cellH,
    })
    .png()
    .toFile(output);
}

const manifest = [];

for (const game of games) {
  const baseDir = path.join(root, 'public/game-quizzes', game.slug);
  await mkdir(path.join(baseDir, 'results'), {recursive: true});

  await copyFile(game.cover, path.join(baseDir, 'cover.png'));
  manifest.push({type: 'cover', game: game.slug, source: game.cover, output: `/game-quizzes/${game.slug}/cover.png`});

  for (let questionNumber = 1; questionNumber <= 10; questionNumber += 1) {
    manifest.push({
      type: 'question',
      game: game.slug,
      question: questionNumber,
      source: game.cover,
      output: `/game-quizzes/${game.slug}/cover.png`,
    });
  }

  for (const panel of resultPanels) {
    const output = path.join(baseDir, 'results', `${panel.id}.png`);
    await extractResultPanel(game.resultSheet, panel, output);
    manifest.push({
      type: 'result',
      game: game.slug,
      result: panel.id,
      source: game.resultSheet,
      output: `/game-quizzes/${game.slug}/results/${panel.id}.png`,
    });
  }
}

await writeFile(
  path.join(root, 'docs/image2/applied-dedicated-result-art.json'),
  `${JSON.stringify({generatedAt: new Date().toISOString(), items: manifest}, null, 2)}\n`,
);

console.log(
  `Configured ${manifest.length} quiz art slots from ${games.length + games.length * resultPanels.length} original generated images, including ${games.length * resultPanels.length} dedicated result illustrations.`,
);
