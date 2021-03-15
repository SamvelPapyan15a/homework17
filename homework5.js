//5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js): Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt) և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:

const fs = require('fs');
const os = require('os');
const date = new Date();

let homeworkData = fs.readFileSync("homework1.js");
homeworkData += "\n" + fs.readFileSync("homework2.js");
homeworkData += "\n" + fs.readFileSync("homework3.js");
homeworkData += "\n" + fs.readFileSync("homework4.js");

const fileName = `${os.platform()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.txt`;

fs.writeFile(fileName,homeworkData,function(err,data){
    if(err){
        return err.message;
    }
});