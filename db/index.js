const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {logging: false});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Department = db.define('department', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.belongsTo(Department);
Department.hasMany(User);

const sync = () => {
    return db.sync({force: true});
}

const seed = () => {
    return Promise.all([
        Department.create({name: "Admin"}),
        Department.create({name: "HR"}),
        Department.create({name: "Engineering"}),
    ]).then(([admin, hr, engineering]) => {
        return Promise.all([
            User.create({name: "Moe", departmentId: admin.id}),
            User.create({name: "Larry", departmentId: admin.id}),
            User.create({name: "Curly", departmentId: hr.id}),
            User.create({name: "Shep"}),
        ])
    });
};

const getDepartments = () => {
    return Department.findAll({include: [User]});
};


const getDepartmentById = (id) => {
    return Department.findOne({ where: {id: id}, include: [User] });
}

const getUsers = () => {
    return User.findAll({include: [Department]});
}

module.exports = {
    sync,
    seed,
    getDepartments,
    getDepartmentById,
    getUsers,
    Models: {
        User,
        Department
    }
}