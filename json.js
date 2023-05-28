//JSON Data
var education = [
    {
      "institution": "Kongu Arts and Science College",
      "course": "M.C.A.",
      "department": "Computer Science",
      "studyLevel": "Masters",
      "studyType": "fulltime",
      "batch start year": 2021,
      "batch end year": 2023,
      "gpa": "9.2",
    },
    {
      "institution": "A.V.P. College of Arts and Science",
      "course": "B.Sc.(C.S)",
      "department": "Computer Science",
      "studyLevel": "Bachelors",
      "studyType": "fulltime",
      "batch start year": 2018,
      "batch end year": 2021,
      "gpa": "8.9",
    }
  ];

//for loop
for (let i = 0; i < education.length; i++) {
    console.log(education[i]);
}

for(var i = 0; i < education.length; i++) {
    var obj = education[i];

    console.log(obj.institution);
    console.log(obj.course);
    console.log(obj.department);
    console.log(obj.studyType);

}
//for Each
education.forEach(function(obj) 
{ console.log(obj.studyLevel); });

//for In
for (var key in education) {
if (education.hasOwnProperty(key)) {
  console.log(education[key].course);
}
}
//for Of
 for (const item of education) {
    console.log(item);
  }