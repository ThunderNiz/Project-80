name_of_the_guest_array=[];

function submit()
{
var name_1 = document.getElementById("name_of_the_guest_1").value;
var name_2 = document.getElementById("name_of_the_guest_2").value;
var name_3 = document.getElementById("name_of_the_guest_3").value;
var name_4 = document.getElementById("name_of_the_guest_4").value;

name_of_the_guest_array.push(name_1);
name_of_the_guest_array.push(name_2);
name_of_the_guest_array.push(name_3);
name_of_the_guest_array.push(name_4);

console.log(name_of_the_guest_array);

document.getElementById("display_name").innerHTML=name_of_the_guest_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sort()
{
name_of_the_guest_array.sort();
console.log(name_of_guest_array);
document.getElementById("display_name").innerHTML=name_of_the_guest_array;
}