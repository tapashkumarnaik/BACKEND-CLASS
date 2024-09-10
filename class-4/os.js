const os = require("os");

console.log(os.platform()); // win32
console.log(os.arch()); // x64
console.log(os.type()); // Windows_NT
console.log(os.release()); // 10.0.22631
console.log(os.version()); // Windows 11 Home Single Language
console.log(os.homedir()); // C:\Users\naikt
console.log(os.hostname()); // DESKTOP-V90RC2P
console.log(os.userInfo()); // naikt
console.log(os.userInfo().username); // naikt
console.log(os.freemem(`${911233024 / 1024 / 1024 / 1024}`)); //1177620480
const totalMemory = os.totalmem();
console.log(os.totalmem(`${totalMemory / 1024 / 1024 / 1024}`)); //7968411648

console.log(os.tmpdir()); // C:\Users\naikt\AppData\Local\Temp
