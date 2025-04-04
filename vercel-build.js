// Enhanced build script for Vercel deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Running enhanced Vercel build helper script...');

// Copy the output HTML file to index.html
try {
  const srcHtmlPath = path.join(__dirname, 'dist', 'vercel-index.html');
  const destHtmlPath = path.join(__dirname, 'dist', 'index.html');
  
  if (fs.existsSync(srcHtmlPath)) {
    fs.copyFileSync(srcHtmlPath, destHtmlPath);
    console.log('✅ Successfully copied vercel-index.html to index.html');
  } else {
    console.error('⚠️ vercel-index.html not found in dist folder');
  }
} catch (error) {
  console.error('Error copying HTML file:', error);
}

// Try to copy compiled JS files if they exist
try {
  const srcPath = path.join(__dirname, 'src');
  console.log(`Checking for compiled files in ${srcPath}...`);
  
  // Check if App.js exists (compiled from App.tsx)
  const appTsxPath = path.join(srcPath, 'App.tsx');
  const appJsPath = path.join(srcPath, 'App.js');
  
  if (fs.existsSync(appTsxPath) && !fs.existsSync(appJsPath)) {
    console.log('⚠️ App.js not found. This might cause issues with the dynamic import.');
    console.log('   This is normal if TypeScript has not compiled the files yet.');
  }
} catch (error) {
  console.error('Error checking compiled files:', error);
}

// Create a 404.html file for client-side routing
try {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  const notFoundPath = path.join(__dirname, 'dist', '404.html');
  
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('✅ Successfully created 404.html for client-side routing');
  } else {
    console.error('⚠️ index.html not found in dist folder');
  }
} catch (error) {
  console.error('Error creating 404.html:', error);
}

// List files in the dist directory to verify the build
try {
  const distPath = path.join(__dirname, 'dist');
  if (fs.existsSync(distPath)) {
    console.log('📁 Contents of dist directory:');
    const files = fs.readdirSync(distPath);
    files.forEach(file => {
      console.log(`- ${file}`);
      
      // If it's the assets directory, list its contents too
      if (file === 'assets' && fs.statSync(path.join(distPath, file)).isDirectory()) {
        const assetFiles = fs.readdirSync(path.join(distPath, file));
        assetFiles.forEach(assetFile => {
          console.log(`  └─ ${assetFile}`);
        });
      }
    });
  } else {
    console.error('⚠️ dist directory does not exist');
  }
} catch (error) {
  console.error('Error listing dist directory:', error);
} 