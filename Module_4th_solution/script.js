var person_name=new Array();
person_name[0]="Yachika";
person_name[1]="Johnny";
person_name[2]="Jenshi";
person_name[3]="jason";
person_name[4]="paul";
person_name[5]="franky";
person_name[6]="larrow";
person_name[7]="paul";
person_name[8]="laura";
person_name[9]="jimmy";


for (var i = 0; i < person_name.length; i++) {
	if(person_name[i].charAt(0)==='J'|| person_name[i].charAt(0)==='j'){
        console.log("Goodbye "+ person_name[i])
	}
	else{
		console.log("Hello "+ person_name[i])
	}
}