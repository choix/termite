function exec(cmd) {
  return { stdin: cmd };
}

function ls(path = null) {
  let cmd = "ls";
  if(path != null) cmd += ` ${path}`;
  return exec(cmd);
}

function pwd() {
  return exec("pwd");
}

function cd(path) {
  return exec(`cd ${path}`);
}

let git = {
  status: function() {
    return exec("git status");
  },

  commit: function(opts = {}) {
    let cmd = "git commit";

    if (opts.all == true) cmd += " -a";
    if (opts.message != undefined) cmd += ` -m "${opts.message}"`;

    return exec(cmd);
  },

  push: function(remote, branch, opts={}) {
    let cmd = "git push";
    if (opts.force == true) cmd += " -f";
    cmd += ` ${remote} ${branch}`;

    return exec(cmd);
  },

  checkout: function(branch) {
    let cmd = `git checkout ${branch}`;
    return exec(cmd);
  }
}

export function run(code) {
  let result = eval(code);

  if (result.stdin) {
    return result;
  } else {
    return { stdout: result };
  }
}
