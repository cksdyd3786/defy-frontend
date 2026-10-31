// src/contracts.ts 가 원본 계약 파일과 바이트 단위로 같은지 확인한다 (복사본 수정 방지)
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const original = fileURLToPath(new URL('../../Defy_Tech_Spec_Contracts/web-demo-contracts.ts', import.meta.url));
const copy = fileURLToPath(new URL('../src/contracts.ts', import.meta.url));

if (!readFileSync(original).equals(readFileSync(copy))) {
  console.error(`contracts.ts 가 원본과 다릅니다.\n  원본: ${original}\n  복사본: ${copy}\n원본을 다시 복사하세요.`);
  process.exit(1);
}
console.log('contracts.ts = 원본 web-demo-contracts.ts (동일)');
