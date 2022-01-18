# Bitburner Scripts Collection

This repository contains all of my bitburner scripts.

## Setup

---

1. Create a script called `start.js`, with the following contents:

```javascript
Paste the following content:

export async function main(ns) {
  if (ns.getHostname() !== "home") {
    throw new Exception("Run the script from home");
  }

  let args = ns.flags([['branch', 'main']])

  await ns.wget(
    `https://raw.githubusercontent.com/jenheilemann/bitburner-scripts/${args.branch}/src/initStartup.js?ts=${new Date().getTime()}`,
    "initStartup.js"
  );
  ns.spawn("initStartup.js", 1, '--branch', args.branch);
}
```

2. Run `start.js`
