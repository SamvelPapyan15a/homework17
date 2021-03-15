//2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):
let address;
const os = require('os');
const nets = os.networkInterfaces();
for (let net in nets) {
    let iface = nets[net].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });
    if(iface.length > 0) address = iface[0].address;
}
console.log(address);