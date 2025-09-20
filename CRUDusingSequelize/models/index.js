const Students=require('./students');
const IdentityCard=require('./identityCard');
const department=require('./department');
//onr to one
Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);
//onetomany
department.hasMany(Students);
Students.belongsTo(department);
module.exports={
    Students,
    IdentityCard,
    department
}