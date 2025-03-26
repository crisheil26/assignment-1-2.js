//1.students information
const studentFirstName = "Althea Crisheil";
console.log(studentFirstName);

const studentMiddleName = "Collado";
console.log(studentMiddleName);

const studentLastName = "Duran";
console.log(studentLastName);

const studentBirthdate = "October 20, 2004";
console.log(studentBirthdate);

const studentBirthplace = "Baguio City, Benguet, Philippines 2600";
console.log(studentBirthplace);

const studentAddress = "Candon City, Ilocos Sur, Philippines 2710";
console.log(studentAddress);

const studentCourse = "Bachelor of Science in Computer Science";
console.log(studentCourse);

const studentDreamJob = "Software Engineer";
console.log(studentDreamJob);

// 2. String Concatenation & Formatting Methods
const studentInfo = `[${studentFirstName.toUpperCase()} ${studentMiddleName.toUpperCase()} ${studentLastName.toUpperCase()}] was born [${studentBirthdate}] at [${studentBirthplace}], and currently living at [${studentAddress}]. [${studentFirstName.toLowerCase()} ${studentMiddleName.toLowerCase()} ${studentLastName.toLowerCase()}] is taking up [${studentCourse.toLowerCase()}] and dreams to be [${studentDreamJob}] after graduation.`;

// 3. Print output to the console
console.log(studentInfo);
