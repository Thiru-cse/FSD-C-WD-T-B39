const employees = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', designation: 'Project Manager' },
    { id: 3, name: 'Alice Johnson', designation: 'UX Designer' },
    { id: 4, name: 'Bob Brown', designation: 'QA Engineer' },
    { id: 5, name: 'Charlie Davis', designation: 'DevOps Engineer' }
]

// Get all the employee details
export const getEmployeeDetails = (req, res) => {
    res.status(200).json(employees);
}

// Get Employee Details By ID
export const getEmployeeDetailsById = (req, res) => {
    const empId = req.params.id;

    const empDetails = employees.find(emp => emp.id == empId)
    if (!empDetails) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({message:'Employee Details Found', empDetails})
}

// Create Employee Details
export const createEmpDetail = (req, res) => {
    const { name, designation } = req.body;
    const newEmployee = {
        id: employees.length + 1,
        name: name,
        designation: designation
    };
    employees.push(newEmployee);

    res.status(200).json({message:'Employee Added Successfully', newEmployee})
}

// Edit Employee Details
export const editEmployeeDetail = (req, res) => {
    const empId = req.params.id;
    const { name, designation } = req.body;
    const index = employees.findIndex(emp => emp.id == empId); // 5 - 0 1 2 3 4
    if (index === -1) {
        return res.status(404).json({ message: 'Employee not Found' });
    }
    employees[index].name = name;
    employees[index].designation = designation;

    res.status(200).json({message: 'Employee Updated Successfully', employees})
}

export const deleteEmpDetailById = (req, res) => {
    const empId = req.params.id;
    const index = employees.findIndex(emp => emp.id == empId);
    if (index === -1) {
        return res.status(404).json({ message: 'Employee Not Found' })
    }
    employees.splice(index, 1);
    res.status(200).json({message:'Employee deleted successfully', employees})
}