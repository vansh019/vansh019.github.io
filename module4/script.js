var names=new Array();
names[0]="Brad";
names[1]="John";
names[2]="Jenny";
names[3]="jasy";
names[4]="param";
names[5]="frig";
names[6]="lara";
names[7]="vansh";
names[8]="lary";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}