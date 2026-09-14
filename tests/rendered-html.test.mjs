import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../dist/server/index.js';
const checks=[['/','Empowering innovators'],['/portfolio','Portfolio'],['/portfolio/electricity','Electricity'],['/people','Bill Gates'],['/programs','Discovery'],['/perspectives','Perspectives'],['/fellows-projects','BE Fellows'],['/research-and-publications','Research and'],['/privacy-policy','Privacy Policy']];
for(const [path,title] of checks)test('renders '+path,async()=>{const response=await worker.fetch(new Request('https://preview.example'+path,{headers:{accept:'text/html'}}),{ASSETS:{fetch:async()=>new Response('Not found',{status:404})}},{waitUntil(){},passThroughOnException(){}});assert.equal(response.status,200);const html=await response.text();assert.ok(html.includes(title),'Expected route content');assert.ok(html.includes('Needs content'));assert.ok(!html.includes('codex-preview'));});
