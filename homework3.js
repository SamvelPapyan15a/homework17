//3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):

const fs = require('fs');
const os = require('os');
const random = require('random');
let randomNumberString = "";
for(let i = 0; i < 8; i++){
    randomNumberString += random.int(0,9);
}

fs.writeFile(`${randomNumberString}.txt`, `${os.cpus().length}`, function(err, data){
    if(err){
        return err.message;
    }
});
