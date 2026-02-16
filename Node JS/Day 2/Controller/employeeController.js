const employees = [
    {id:1, name:"John", designation:"Frontend Developer"},
    {id:2, name:"Doe", designation:"Backend Developer"},
    {id:3, name:"kumar", designation:"Python Developer"},
    {id:4, name:"shankar", designation:"Fullstack Developer"},
]

// Get All Employee Details
export const getEmployeeDetails = (req, res) => {
    res.status(200).json(employees);
}

export const getEmployeeDetailsById = (req, res) => {
    const empId = req.params.id;
    console.log(empId);
    
    const empDetails = employees.find((emp) => emp.id == empId);
    if (!empDetails) {
        return res.status(404).json({message:"Employee Not Found"});
    }
    res.status(200).json({ message: "Employee Details Found", empDetails });
}