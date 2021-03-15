//4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:

const fs = require('fs');

let input = fs.readFileSync('input.txt','utf-8');
fs.writeFile("write.txt", input.replace(" ", "-"), function(err,data){
    if(err){
        return err.message;
    }
});