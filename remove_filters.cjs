const fs = require('fs');
const path = require('path');
const dirs = [
  'd:/aatmaya/Aatmaya-Website/components',
  'd:/aatmaya/Aatmaya-Website'
];

let count = 0;

for (const dir of dirs) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Removes grayscale filters and associated transitions/hovers
      content = content.replace(/\bgrayscale\b/g, '');
      content = content.replace(/\bgroup-hover:grayscale-0\b/g, '');
      content = content.replace(/\bsepia-\[[^\]]+\]\b/g, '');
      content = content.replace(/\bcontrast-\d+\b/g, '');
      
      // Cleanup extra spaces in className attributes correctly including template literals
      content = content.replace(/className=(["`])(.*?)\1/g, (match, quote, p1) => {
          let cleanClasses = p1.replace(/\s+/g, ' ').trim();
          return `className=${quote}${cleanClasses}${quote}`;
      });

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        count++;
        console.log('Updated ' + fullPath);
      }
    }
  });
}

console.log('Total files updated: ' + count);
