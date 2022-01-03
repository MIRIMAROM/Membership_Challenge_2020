// JavaScript source code
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
let p1 = new People("miri", 8, "red", "piza", "Sea", "shoping", "neemanut", "honeyeye", "coffee");
let p2 = new People("yehudit", 3, "red", "burger", "Sea", "cake", "neemanut", "browneye", "Tea");
let p3 = new People("shira", 7, "pink", "burger", "Sea", "shoping", "neemanut", "greeneye", "coffee");
let p4 = new People("talya", 10, "yellow", "burger", "Sea", "sleep", "neemanut", "browneye", "Tea");
let p = [p1, p2, p3,p4];
namepeople();
function namepeople() {
    let name = document.querySelectorAll('button');
    for (var i = 0; i < p.length && name != null; i++) {
        name[i + 1].innerText += p[i].Name;
    }
}