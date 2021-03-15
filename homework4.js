//4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:

const fs = require('fs');

fs.readFile('input.txt',function(err, data){
    let input = "";
    if(err){
        return err.message;
    }
    for(let i = 0; i < data.length; i++) {
        input += (String.fromCodePoint(data[i]) == " ") ? "-" : String.fromCodePoint(data[i]);
    }
    fs.writeFile("write.txt", input, function(err,data){
        if(err){
            return err.message;
        }
    });
});
