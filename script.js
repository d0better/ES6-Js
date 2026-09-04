const student = {
    name : "knomic",
    age : 20 ,
    course: "javascript"
};

function introduce({name, course}) {
    console.log(name);
    console.log(course);
}

introduce(student);