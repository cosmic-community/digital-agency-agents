const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next', 'server', 'app');
const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('dashboard-console-capture.js')) {
    const modifiedContent = content.replace('</head>', `${scriptTag}</head>`);
    fs.writeFileSync(filePath, modifiedContent, 'utf8');
    console.log(`Injected console capture script into ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(buildDir)) {
  processDirectory(buildDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build directory not found. Skipping injection.');
}