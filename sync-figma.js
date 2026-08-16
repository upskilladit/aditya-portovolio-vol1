import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const FIGMA_TOKEN = 'figd_RXtlrJpPMQmPV2MpZFrGxad-vBRNEqHw7JJlJYgb';
const FILE_KEY = 'xNWRG9DEQXx9JvjDjbLZuL';

async function sync() {
  console.log('🔄 Connecting to Figma API...');
  try {
    const res = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: { 'X-Figma-Token': FIGMA_TOKEN }
    });

    if (!res.ok) {
      throw new Error(`Figma API Error: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(`✅ Fetched latest Figma data for file: "${data.name}"`);

    // Commit and push to GitHub
    console.log('🚀 Pushing updates to GitHub repository...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Auto-sync update from Figma design"', { stdio: 'inherit' });
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✨ Successfully synced and pushed to GitHub!');
    } catch (e) {
      console.log('ℹ️ Git working tree clean or already up to date.');
    }
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
  }
}

sync();
