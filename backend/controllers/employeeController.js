const Employee = require('../models/Employee');

// Get all employees
exports.getEmployees = async (req, res) => {
    
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Create new employee
exports.createEmployee = async (req, res) => {
    const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;
    console.log(req.body);
    try{
        const employee = new Employee({ first_name, last_name, email, position, salary, date_of_joining, department });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', employee_id: employee._id });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ status: false, message: error.message });
    }
}

//Get employee by id
exports.getEmployeeById = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params.eid);
        if(!employee) return res.status(404).json({ status: false, message: 'Employee not found.' });
        res.status(200).json(employee);
    }
    catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

//Update employee by id
exports.updateEmployee = async (req, res) => {
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body);
        res.status(200).json({ status: true, message: 'Employee updated successfully' });
    }
    catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

//Delete employee by id
exports.deleteEmployee = async (req, res) => {
    try{
        await Employee.findByIdAndDelete(req.query.eid);
        res.status(204).json({ message: "Employee deleted successfully." });
    }
    catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

