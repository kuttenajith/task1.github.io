var emp = [{
    name: "Sangami",
    age: 21,
    location: "dgl",
    vehicle: "dio",
    gender: "F",
    exp:"2 years",
    position: "Developer",
    doj:"2018-12-14",
    MS:"no",
},
{
    name: "karthiga",
    age: 24,
    domain: "js",
    location: "svg",
    vehicle: "dio",
    gender: "F",
    exp:"2 years",
    position: "Developer",
    doj:"2018-12-13",
    MS:"yes",
},
{
    name: "ajith",
    age: 20,
    domain: "js",
    location: "mdu",
    vehicle: "fz",
    gender: "M",
    exp:"2 years",
    position: "Developer",
    doj:"2018-12-12",
    MS:"no",
},
{
    name: "shanmugam",
    age: 22,
    domain: "php",
    location: "mdu",
    vehicle: "car",
    gender: "M",
    exp:" 5 years",
    position: "Teamlead",
    doj:"2018-12-11",
    MS:"yes",
},
{
    name: "yogesh",
    age: 22,
    domain: "js",
    location: "svg",
    vehicle: "fz",
    gender: "M",
    exp:"5 years",
    positon: "Teamlead",
    doj:"2018-12-10",
    MS:"yes",
},
{
    name: "bala",
    age: 21,
    domain: "php",
    location: "svg",
    vehicle: "car",
    gender: "M",
    exp:"10 years",
    position: "Projmanager",
    doj:"2018-12-09",
    MS:"no",
}, 
{
    name: "karthiga",
    age: 24,
    domain: "js",
    location: "svg",
    vehicle: "dio",
    gender: "F",
    exp:"2 years",
    position: "Developer",
    doj:"2018-12-06",
    MS:"yes",
}, 
{
    name: "akash",
    age: 20,
    domain: "js",
    location: "mdu",
    vehicle: "fz",
    gender: "M",
    exp:"2 years",
    position: "Developer",
    doj:"2018-12-05",
    MS:"yes",
}, 
{
    name: "shanmugam",
    age: 22,
    domain: "php",
    location: "mdu",
    vehicle: "car",
    gender: "M",
    exp:"5 years",
    position: "Teamlead",
    doj:"2018-12-04",
    MS:"no",
},
{
    name: "yogesh",
    age: 22,
    domain: "js",
    location: "svg",
    vehicle: "fz",
    gender: "M",
    exp:"5 years",
    position: "Teamlead",
    doj:"2018-12-03",
    MS:"yes",
}, 
{
    name: "bala",
    age: 21,
    domain: "php",
    location: "svg",
    vehicle: "car",
    gender: "M",
    exp:"10 years",
    position: "Projmanager",
    doj:"2018-12-02",
    MS:"yes",
}, 
{
    name: "venkat",
    age: 20,
    domain: "ios",
    location: "mdu",
    vehicle: "",
    gender: "M",
    exp:"10 years",
    position: "Projmanager",
    doj:"2018-12-01",
    MS:"yes",
}
];

var emp2 =  emp.filter(function(findlocation) {
    return findlocation.location == "svg";

});
console.log(emp2);
 

var emp2 =  emp.filter(function(findstatus) {
    return findstatus.MS == "yes";

});
console.log(emp2);


var emp3 = emp.filter(function(findvehicle){
    return findvehicle.vehicle == "fz";
   });
console.log(emp3);

var emp4=emp.filter(function(findposition){
return findposition.position=="Projmanager" 
});
console.log(emp4);

 var emp4=emp.filter(function(findposition){
 return findposition.position=="Teamlead" 
 });
 console.log(emp4);


var emp4=emp.filter(function(findposition){
    return findposition.position=="Developer" 
    });
    console.log(emp4);
   
var emp5=emp.filter(function(findmatching){
        return findmatching.name=="bala" 
        });
        console.log(emp5);
       

var i;
var d=emp.sort(function(a, b){
for(i=0;i<=emp.length;i++){
var nameA=new Name(a.name), nameB=new Name(b.name);
if(nameA==nameB)
})
console.log(d);
}

var emp3 = emp.filter(function(findvehicle){
    return findvehicle.vehicle == "";
   });
console.log(emp3);

