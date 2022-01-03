
console.log("miri");
function People(Name, Datebirthday, color, food1, trip, tachbiv, Charateristics, eye, drink) {
    this.Name = Name;
    this.Datebirthday = Datebirthday;
    this.color = color;
    this.food = food1;
    this.trip = trip;
    this.tachbiv = tachbiv;
    this.Charateristics = Charateristics;
    this.eye = eye;
    this.drink = drink;
}
p1 = new People("miri",8, "red", "piza", "Sea", "shoping", "neemanut", "honeyeye", "coffee");
p2 = new People("yehudit", 3, "red", "burger", "Sea", "cake", "neemanut", "browneye", "Tea");
p3 = new People("shira", 7, "pink", "burger", "Sea", "shoping", "neemanut", "greeneye", "coffee");
p4 = new People("talya", 10, "yellow", "burger", "Sea", "sleep", "neemanut", "browneye", "Tea");
 p = [p1, p2,p3,p4];
let j;
function checkName() {
    for (var i = 0; i < p.length; i++) {
        if (event != null)
        if (p[i].Name == event.target.innerHTML)
            j = i;
    }
   changeheading(); 
}

function changeheading() {
    let heading = document.querySelectorAll('h1');
        for (var i = 0; i < heading.length; i++) {
        let name = p[j].Name;
            heading[i].innerHTML = "?" + " " + name + " " + heading[i].innerHTML;
        }
}

let counter=0 ;
function checkfood() {
    if (event.target.id === p[j].food)
    {
        counter++;}
    alert(counter);
}
function checkDatebirthday() {
    if (event.target.id == p[j].Datebirthday)
        counter++;
    alert(counter);
}
function checkTrip() {
    if (event.target.id === p[j].trip)
        counter++;
    alert(counter);
}
function checkcolor() {
    if (event.target.id === p[j].color)
        counter++;
    alert(counter);
}
function checktachbiv() {
    if (event.target.id === p[j].tachbiv)
        counter++;
    alert(counter);
} 
function checkCharateristics() {
    if (event.target.id === p[j].Charateristics)
        counter++;
    alert(counter);
}
function checkeyes() {
    if (event.target.id === p[j].eye)
        counter++;
    alert(counter);
}
function checkdrink() {
    if (event.target.id === p[j].drink)
        counter++;
    alert(counter);
 
}
function getcounter() {
    let allcounter = document.querySelector('h5');
    //allcounter.innerHTML+= '<progress max="counter" value="18"></progress>';
    if (counter < 5)
        allcounter.innerHTML = "good your mark " + counter+"/8";
    else
        if (counter > 5)
            allcounter.innerHTML = "very good your mark "+ counter+ "/8" ;
}

