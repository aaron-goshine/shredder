import path from 'path';
import replace from 'replace';
import Promise from 'bluebird';

async function copy () {
  const ncp = Promise.promisify(require('ncp'));
  await Promise.all([
    ncp('src/public', 'build/'),
    ncp('package.json', 'build/package.json')
  ]);
  replace({
    regex: '"start".*',
    replacement: '"start": "node server.js"',
    paths: ['build/package.json'],
    recursive: false,
    silent: false
  });
}

export default copy;
