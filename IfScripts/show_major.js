var stuName = "Betty";
var stuMajor = "MKT";

//Computer Science major match
if (stuMajor == "CSCI") {
    console.log("Student: " + stuName + "\n" +
        "Major: Computer Science" + "\n" +
        "Advising Location: Sheppard Hall, Room 314");
}
//Biology major match
else if (stuMajor == "BIOL") {
    console.log("Student: " + stuName + "\n" +
        "Major: Biology" + "\n" +
        "Advising Location: Science Bldg, Room 310");
}
//English major match
else if (stuMajor == "ENG") {
    console.log("Student: " + stuName + "\n" +
        "Major: English" + "\n" +
        "Advising Location: Kerr Hall, Room 201");
}
//History major match
else if (stuMajor == "HIST") {
    console.log("Student: " + stuName + "\n" +
        "Major: History" + "\n" +
        "Advising Location: Kerr Hall, Room 201");
}
//Marketing major match
else if (stuMajor == "MKT") {
    console.log("Student: " + stuName + "\n" +
        "Major: Marketing" + "\n" +
        "Advising Location: Westly Hall, Room 310");
}
//If the major code doesnt match
else {
    console.log("Student: " + stuName + "\n" +
        "Major: Unknown" + "\n" +
        "Advising Location: ");

}