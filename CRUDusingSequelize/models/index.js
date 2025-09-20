const Students=require('./students');
const IdentityCard=require('./identityCard');
const department=require('./department');
const courses=require('./courses');
const studentCourses=require('./studentCourses');
//one to one

Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);

//one to many

department.hasMany(Students);
Students.belongsTo(department);

//many to many
 Students.belongsToMany(courses,{through:studentCourses});
 courses.belongsToMany(Students,{through:studentCourses});


module.exports={
    Students,
    IdentityCard,
    department,
    courses,
    studentCourses
}