// variable/huvisagch
//var name = "munkh";
// number, string, boolean, undefined, null
//console.log("Hi"+name)
// alert
// promt("") --> garaas utga avah
// +,-,/,*,% --> operator
// if,else --> hervee buyu nuhtsul shalgah
//var age=+prompt("Nasaa oruulna uu");
// >,<, <=, >=, ==;
//if(age>18 && age<30){
	//console.log("Ider nas");
	// alert("nasand hursen bna");
//}else if(age<=3 && age>=0){
	//console.log("Nylh huuhed");
//}else if(age<=18 && age>10){
	//console.log("Zaluu huuhed");
//}else{
	//console.log("nasand hureegui ban");
//}
// 1 Garaas too avaad tegsh esvel sondgoig shalgah
//var number = +prompt("Too oruulna uu");
//if(number%2==0){
	//console.log("tegsh too bna");
//}else{
	//console.log("Sondgoi ban");
//}
// 2 Garaas too avahad eyreg esvel surugiig shalga
//var number2 = +prompt("too oruulna uu");
//if(number2<0){
	//console.log("Surug too");
//}else{
	//console.log("Eyreg too")
//}

//switch - nuhtsul shalgana
var today = 6;
switch(today){
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Not found");
		break;
}
var lang = "English"
switch(lang){
	case "English":
		console.log("Hello");
		break;
	case "Mongolian":
		console.log("Сайн уу");
		break;
	case "Spanish":
		console.log("Hola");
		break;
	default:
		console.log("Not found")
		break;
}
// 1. too1 garaas too avna
var too1 = +prompt("Too oruulna uu");
// 2. garaas operator(+,-,*,/)
var oper = prompt("Operator oruulna uu (+,-,*,/)")
// 3. too2 = garaas too avna
var too2 = +prompt("Hoyrdh too oruulna uu");
switch(oper){
	case "+":
		alert(too1 + too2);
		break;
	case "-":
		alert(too1 - too2);
		break;
	case "*":
		alert(too1 * too2);
		break;
	case "/":
		alert(too1 / too2);
		break;
	default:
		alert("Not found")
		break;
}
// 4. alert deer bodoj gargaj irne
