console.log("Часть 1:")
console.log("Задание 1:");
let aa = Array();

aa[0] = 2;
aa[1] = 3;
aa[2] = 4;
aa[3] = 5;
aa[4] = 4;
aa[5] = 3;
aa[6] = 2;
aa[7] = 1;
aa[8] = 5;
aa[9] = 6;
console.log(aa[0] + " " + aa[1] + " " + aa[2] + " " + aa[3] + " " + aa[4]+ " " + aa[5]+ " " + aa[6]+ " " + aa[7]+ " " + aa[8]+ " " + aa[9]);

console.log("Задание 2:");
let bb=Array();

bb[0]=2;
bb[1]=2*2;
bb[2]=2*2*2;
bb[3]=2*2*2*2;
bb[4]=2*2*2*2*2;
bb[5]=2*2*2*2*2*2;
console.log(bb[0]+" "+bb[1]+" "+bb[2]+" "+bb[3]+" "+bb[4]+" "+bb[5]);

console.log("Задание 3:");
let nn=Array();

let res = "";
for(let i=0;i<6;i++){
    nn[i]=Math.pow(2, i+1);
    res+=nn[i]+" ";
}
console.log(res);

console.log("Задание 4:");
let mm = Array();

mm[0] = Math.floor(Math.random() * 10);
mm[1] = mm[0]*2;
mm[2] = mm[1]+1;
mm[3] = mm[0]*mm[1];
mm[4] = mm[1]*mm[3];
console.log(mm[0] + " " + mm[1] + " " + mm[2] + " " + mm[3] + " " + mm[4]);

console.log("Часть 2:");
/*Задание 1*/
let ss = Array();
//Задание массива
for (let i = 0; i <= 5; i++) {
    ss[i] = parseFloat((Math.random() * 50).toFixed(2));
}
//Вывод элементов массива в строку
let str = '';
for (let i = 0; i <= 5; i++) {
    str += ss[i] + ' ';
}
document.getElementById('result_multi_1_1').innerHTML = str;

let sum = 0;
let n = 0;
for (let i = 0; i < ss.length; i++) {
    sum += ss[i];
    n += 1;
}
let avg = sum / n;
document.getElementById('result_multi_1_2').innerHTML = avg;

/*Задание 2*/
let ll = Array();
let sum_2=0;
let str_2 = '';
pp=prompt("Введите количество значений в массиве (для задаиния 2)");
for (let i = 0; i < pp; i++) {
    ll[i] = prompt("Введите " + (i+1) + "-й элемент массива");
    str_2 += ll[i] + ' ';
    if(ll[i]=='a'){ /*На англиском языке*/
        sum_2+=1;
    } else if(ll[i]=='а'){ /*На русском языке*/
        sum_2+=1;
    }
}

document.getElementById('result_multi_2_1').innerHTML = str_2;
document.getElementById('result_multi_2_2').innerHTML = sum_2;

/*Задание 3*/
let xx = Array();
let str_3 = '';
let sum_3=0;

for (let i = 0; i < 10; i++) {
    xx[i] = Math.floor(Math.random() * 2);
    if(xx[i]==0){
        xx[i]="Ложь";
    }
    else{
        xx[i]="Истина";
        sum_3+=1;
    }
    str_3 += xx[i] + ' ';
}

document.getElementById('result_multi_3_1').innerHTML = str_3;

if(sum_3>5){
    result="Больше значений 'Истина'";
}
else if(sum_3<5){
    result="Больше значений 'Ложь'";
}
else{
    result="Количество значений 'Истина' и 'Ложь' равное";
}

document.getElementById('result_multi_3_2').innerHTML = result;


