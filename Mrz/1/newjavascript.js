var o = 0;
var massumma = [];
var massdwig = [];

var result = "Ответ:";
var schetotvet = 0;

var ras = 5;
var x = "";
var y = "";
var aello = 0 ;
var number = [];
var timber = [];
var firstElemString;
var secondElemString;
var timeString;
var schetgeneratetostring = 0;
var masss= [];
var massx= [];
var firstElemArr = [];
var secondElemArr = [];
var timeInt;

function schet (e,q) {

var s = "000000000000";
e = addZeroStart(e);

q = addZeroZero(q);
while (ras >= 0 )
{
if(Number(e[ras])==0)
{
x = "000000000000";
masss[o]=s;
massx[o]=x;
s = summa(s, x);
massumma[o] = s;
q = sdwig(q);

massdwig[o] = q;
ras--;
o++;;

}
if(Number(e[ras])==1)
{
x = addZeroZero(q);
masss[o]=s;
massx[o]=x;
s = summa (s,x);
massumma[o] = s;
q = sdwig(q);
massdwig[o] = q;
ras = ras - 1;
o++;

}

}
ras=5;
return s;

}
function readInput() {

firstElemString = document.getElementById('FirstElem').value;
secondElemString = document.getElementById('SecondElem').value;
timeString = document.getElementById('Time').value;

for (var i = 0; i<firstElemString.length; i++)
if (firstElemString[i]==' ') {
alert("запятая");
return;
}

firstElemArr = firstElemString.split(',');

secondElemArr = secondElemString.split(',');
while(schetotvet!= firstElemArr.length)
{
result = result + Number(firstElemArr[schetotvet])*Number(secondElemArr[schetotvet]);
if (schetotvet<(firstElemArr.length-1))
result= result + ","
schetotvet++;
}
generatetable();
}

if (firstElemArr.length != secondElemArr.length) {
alert("Количество первых и вторых элементов пар должно совпадать");
removeTable();
}
if (!firstElemString.length || !secondElemString.length || /*!numberString ||*/ !timeString.length)
{
alert("Одно или несколько полей пусты, либо сорержат только пробелы");
removeTable();
}

function generatetable() {

document.getElementById('Help').innerHTML = "<b>" + result + "<b>";

while(schetgeneratetostring!= firstElemArr.length) {
number[schetgeneratetostring] = (Number(firstElemArr[schetgeneratetostring])).toString(2);
timber[schetgeneratetostring] = (Number(secondElemArr[schetgeneratetostring])).toString(2);
schetgeneratetostring++;
}
while( aello !=number.length) {
schet(number[aello], timber[aello]);
aello++;
}
var nt=document.getElementById('Table');

for(var i=0; i<(12+number.length); i++) {
var row = document.createElement("tr");
row.setAttribute("id", "r" + i);
for (var j = 0; j < 14; j++) {
var cell = document.createElement("td");
cell.setAttribute("id", "h" + i + "w" + j);
row.appendChild(cell);
}
nt.appendChild(row);
}

var i = 1, j = 2, eq = 0, q = 0, rq = 0, time = 7, etap = 2, stroka = 1, schetchik = 0, schetperemennoi = (firstElemArr.length - 1), massiwgfornumbersecond = [],
massiwfornumberfirst = [],strfornumber = "" , strfornumnersecond ="" ;
for (schetperemennoi = (firstElemArr.length - 1); schetperemennoi > 0 ; schetperemennoi --
)
{
massiwfornumberfirst = firstElemArr.slice(schetperemennoi,(firstElemArr.length));
massiwgfornumbersecond = secondElemArr.slice(schetperemennoi,(secondElemArr.length));

strfornumnersecond = massiwgfornumbersecond.join(',')
strfornumber = massiwfornumberfirst.join(',');
var cell = document.getElementById("h" + schetperemennoi + "w" + 0);

cell.innerHTML = strfornumber + "</br>" + strfornumnersecond;
}

var cell = document.getElementById("h" + 0 + "w" + 0);
cell.innerHTML =
"Ожидается";
var cell = document.getElementById("h" + 0 + "w" + 1);
cell.innerHTML = "Пара/Действие";
while (stroka != (number.length + 1)) //набранные чиcла
{

var cell = document.getElementById("h" + stroka + "w" + 1);
cell.innerHTML = "A :" + number[schetchik] + "</br>" + "B :" + timber[schetchik];
stroka++;
schetchik++;
}
while (etap != 14) //названия колонок
{

var cell = document.getElementById("h" + 0 + "w" + etap);

if (etap == 13)
cell.innerHTML = "Результат" + "</br>" + "Этап" +(etap-1);	

else{
	
if (etap % 2)
cell.innerHTML = "Сдвиг" + "</br>" + "Этап" +(etap-1);

else
cell.innerHTML = "Произведение" + "</br>" + "Этап" + (etap-1);
}
etap++;
}
while (i != (13 + eq) && q < (massdwig.length)) //заполнение таблицы
{
var cell = document.getElementById("h" + i + "w" + j);

cell.innerHTML = "A:"+ masss[rq] + "</br>" +"B:" + massx[rq] + "</br>" + "Cумма:" + massumma[rq] + "</br>" + "Время :" + i * timeString;
if(i == 11+eq)
	var giii = rq;
rq++;
i++;
j++;
if (i == (12 + eq)) {

		var cell = document.getElementById("h" + i + "w" + j);
cell.innerHTML = "Ответ:" + massumma[giii] + "</br>" + "Время :" + i * timeString;
	
i++;
q++;
j++;
	} 
 else{
var cell = document.getElementById("h" + i + "w" + j);
cell.innerHTML = "Множимое:" + massdwig[q] + "</br>" + "Время :" + i * timeString;
i++;
q++;
j++;
 }
if (i == (13 + eq)) {
i = 1;
eq = eq + 1;
i = i + eq;
j = 2;
}

}

}

function sdwig (a) {
var s = "";
i=0;
j=1;

while (s.length != a.length - 1)
{
s = s + a[j];
j++;

}

s = s + "0";

return s;

}

function summa(a,b)
{

var ans = "";

var check = false;
for (var i = a.length - 1; i >= 0; i--){
if (Number(a[i]) + Number(b[i]) == 2)
if (check == true){
ans = "1" + ans;
check = true;
}
else{
ans = "0" + ans;
check = true;
}
else
if (Number(a[i]) + Number(b[i]) == 1)
if (check == true){
ans = '0' + ans;
check = true;
}
else{
ans = '1' + ans;
check = false;
}
else
if (Number(a[i]) + Number(b[i]) == 0)
if (check == true)
{
ans = '1' + ans;
check = false;
}
else
{
ans = '0' + ans;
check = false;
}

}
return ans;
}

f

function addZeroZero(a){
a=addZeroStart(a);
a=addZero(a);
return a;
}

function addZeroStart(a)
{
while (a.length<6){
a= "0" + a;

}
return a;
}

function addZero(a)
{
while (a.length<12){
a= "0" + a;
}
return a;

}
function removeTable(){
location.reload();
}
