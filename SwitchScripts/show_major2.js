var stuName = "Betty";
var stuMajor = "CSCI";

//Computer Science major match
switch (stuMajor) {
    //Computer Science major match
    case "CSCI":
        console.log("Student: " + stuName + "\n" +
            "Major: Computer Science" + "\n" +
            "Advising Location: Sheppard Hall, Room 314");
        break;
    //Biology major match
    case "BIOL":
        console.log("Student: " + stuName + "\n" +
            "Major: Biology" + "\n" +
            "Advising Location: Science Bldg, Room 310");
        break;
    //English major match
    case "ENG":
        console.log("Student: " + stuName + "\n" +
            "Major: English" + "\n" +
            "Advising Location: Kerr Hall, Room 201");
        break;
    //History major match
    case "History":
        console.log("Student: " + stuName + "\n" +
            "Major: History" + "\n" +
            "Advising Location: Kerr Hall, Room 201");
        break;
    //Marketing major match
    case "MKT":
        console.log("Student: " + stuName + "\n" +
            "Major: Marketing" + "\n" +
            "Advising Location: Westly Hall, Room 310");
        break;
    //If the major code doesnt match
    default:
        console.log("Student: " + stuName + "\n" +
            "Major: Unknown" + "\n" +
            "Advising Location: ");
        break;
}