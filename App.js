/* Palworld Server Management Utility */
const { exec } = require('child_process');

const ResetInterval = 128 * 60 * 60 * 1000 // Every 6 hours
const BackupInterval = 1 * 60 * 60 * 1000 // Every Hour

let Server;

const Backup = () => {
    console.log("Beginning Backup: " + Date.now())
    exec('sh backup.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
const Start = () => {
    console.log("Starting Server: " + Date.now());
    Server = exec('sh Start.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
const Reset = () => {
    console.log("Resetting Server: " + Date.now());
    if (Server) {
        Server.kill();
    }
    Start();
}

Start();
setInterval(() => Backup(), BackupInterval)
setInterval(() => Reset(), ResetInterval)
