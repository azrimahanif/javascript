var nama='johan';
nama='Ali';

console.log(nama);


// Assignment 

// soalan 1


class Vehicle 
{
    constructor(model, year)
    {
        this.model = model;
        this.year = year;
    }

    LicenseType()
    {console.log("N/A");}

}

class Car extends Vehicle
{
    
    LicenseType()
    {
        console.log("D");
    }
}

class Motorcycle extends Vehicle
{
    LicenseType()
    {
        console.log("B2");
    }
}


let myvi = new Car("Myvi G3", 2020);
let y15 = new Motorcycle("Yamaha Y15zr", 2020);

console.log(myvi.model);
console.log(myvi.year);
myvi.LicenseType();


console.log(y15.model);
console.log(y15.year);
y15.LicenseType();



// soalan Tambahan

//soalan 1

var Haiwan = ["Ayam", "Itik" , "Arnab", "Ular" , "Monyet", "Gajah", "Harimau", "Singa", "Trex", "Dolphin"];

for (let x in Haiwan) {
    console.log(Haiwan[x])
    
}

//Soalan 2

for (let x = Haiwan.length-1 ; x >= 0; x--) 
{

    console.log(Haiwan[x])
}


//soalan 3
let hashtag = ""
for(x=0; x<5; x++)
{
    console.log(hashtag += "#");
}

//Soalan 4
for(x=0; x<5; x++)
{
    if (x==0)
       { console.log(hashtag);}
    else
    {
        console.log(hashtag.slice(0, -x));
    }
}



//soalan 5

let nama = "abu";
let total = 0;
nameValue("abu");
nameValue("siti");
function nameValue(nama)
    {
        
        let temp;
        for(let i in nama)
            {
                temp = nama.charCodeAt(i)-97;
                total += temp;;
            }
        console.log(total);
    }


// soalan 6


let year = 2023;

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function kira_hari_bulan (bulan_awal, bulan_akhir)
{
 console.log(daysInMonth(bulan_awal,year) + daysInMonth(bulan_akhir,year));
}

kira_hari_bulan(1,2);