const baseUrl = 'https://raw.githubusercontent.com/Rocksus/bitburner-scripts/'
const filesToDownload = [
  'config.js',
  'grow.js',
  'hack.js',
  'weaken.js',
  'killAll.js',
  'utils/find.js',
]

function localeHHMMSS(ms = 0) {
  if (!ms) {
    ms = new Date().getTime()
  }

  return new Date(ms).toLocaleTimeString()
}

export async function download(ns, filename, branch) {
    const path = baseUrl + branch + '/src/' + filename
    ns.tprint(`[${localeHHMMSS()}] Trying to download ${path}`)
    await ns.wget(path + '?ts=' + new Date().getTime(), filename)
}

/**
 * @param {NS} ns
 **/
export async function main(ns) {
    ns.disableLog("sleep")
    const args = ns.flags([['branch', 'main']])

    for ( let filename of filesToDownload ) {
        ns.scriptKill(filename, 'home')
        ns.rm(filename)
        await ns.sleep(50)
        await download(ns, filename, args.branch)
    }
    await ns.sleep(50)
    ns.tprint(`[${localeHHMMSS()}] Killed and deleted old scripts.`)
    await ns.sleep(50)
    ns.tprint(`[${localeHHMMSS()}] Files downloaded.`)

    await ns.sleep(50)
    ns.tprint(`[${localeHHMMSS()}] Starting startup/run.js`)
    ns.spawn('/startup/run.js', 1)
}