/* Palworld Server Management Utility */


const ResetInterval = 6 * 60 * 60 * 1000 // Every 6 hours
const BackupInterval = 1 * 1 * 10 * 1000 // Every Hour



const Backup = () => {
    console.log("Beginning Backup: " + Date.now())
    const { exec } = require('child_process');
    exec('sh backup.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
const Reset = () => {
    console.log("Beginning Reset: " + Date.now())
    const { exec } = require('child_process');
    exec('sh reset.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

setInterval(() => Backup(), BackupInterval)
setInterval(() => Reset(), ResetInterval)
