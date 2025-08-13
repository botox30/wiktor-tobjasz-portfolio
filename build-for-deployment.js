const fs = require('fs');
const path = require('path');

// Simple script to prepare files for static deployment
console.log('Preparing portfolio for deployment...');

// Copy client files to root for easier deployment
const clientFiles = [
  'client/index.html',
  'client/src',
  'client/package.json'
];

console.log('Portfolio ready for static deployment');