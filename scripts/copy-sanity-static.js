const fs = require('fs-extra');
const path = require('path');

// Ensure the public/static directory exists
fs.ensureDirSync(path.join(process.cwd(), 'public', 'static'));

// Copy Sanity Studio static files
fs.copySync(
  path.join(process.cwd(), 'studio', 'static'),
  path.join(process.cwd(), 'public', 'static'),
  { overwrite: true }
);

console.log('Copied Sanity Studio static files to public/static'); 