const { spawnSync } = require('child_process');

function runSnek(...args) {
  const command = spawnSync('node', ['./bin/snek.js', ...args]);
  command.stdout = command.stdout && command.stdout.toString();
  command.stderr = command.stderr && command.stderr.toString();
  return command;
}

it('print help', () => {
  const { status, stdout, stderr } = runSnek('-h');

  expect(status).toBe(0);
  expect(stdout).toMatchSnapshot();
  expect(stderr).toBe('');
});
