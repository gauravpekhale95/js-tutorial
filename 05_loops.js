// loop

/*
-
-
-
*/

// console.log("My name is Gaurav")
// 10
// -> 10000 times reapeat -> console.log("My name is Gaurav")
// -> 1 ch line 10000 times execute

// sequence  - line by line execution
// selection  - based on conditions we select statements/ lines
// iteration - execute particular lines certain no of times

// syntax
/*
variable declaration  : let no ; //undefined 
variable initilization : let no = 10 ; // 10 
return -> true / false 

10>5 // true
10>=5 // true


for(initilization ; condition ; increment  ){
    statemensts to be executed till condition is true
}

*/

let n = 5;
for (let index = 0; index < n; index++) {
	// statments to be executed n times
	console.log("My name is Gaurav   i :" + index); // 10
}

// dry run
/*
index  condition (t/f)    print
0           T               Yes
1           T               Yes
2           T       `       yes
3           T               yes
4           T               yes
5           T               yes
6           F               break
*/

// when we need to control the iterations of loop
// 1 - initilization change
// 2 - condinal operator
// 3 - limit ( n ) decrease/
