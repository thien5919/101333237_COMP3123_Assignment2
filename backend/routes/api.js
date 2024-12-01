const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userController');
const { getEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

//User routes
router.post('/user/signup',  signup);
router.post('/user/login', login);

//Employee routes
router.get('/emp/employees', getEmployees);
router.post('/emp/employees', createEmployee);
router.get('/emp/employees/:eid', getEmployeeById);
router.put('/emp/employees/:eid', updateEmployee);
router.delete('/emp/employees', deleteEmployee);

module.exports = router;