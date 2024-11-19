import { exec } from 'node:child_process';

function googleClosureCompiler() {
  return new Promise((resolve, reject) => {
    const command = [
      'npx', 'google-closure-compiler',
      '--compilation_level', 'ADVANCED',
      '--dependency_mode', 'PRUNE',
      '--entry_point', 'src/test/index.js',
      '--js', 'src/test/**.js',
      '--js_output_file', 'dist/index.js'
    ].join(' ');

    console.log(command);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      stdout && console.log(stdout);
      stderr && console.error(stderr);
      resolve({ stdout, stderr });
    });
  });
}

await googleClosureCompiler();
