const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://Hiba:hiback@cluster0.ulxwv28.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Define the schema
const employeeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Define the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

// Create a new employee
const createEmployee = async () => {
  try {
    const newEmployee = new Employee({
      username: 'example_user',
      password: 'example_password'
    });

    const savedEmployee = await newEmployee.save();
    console.log('New employee created:', savedEmployee);
  } catch (error) {
    console.error('Error creating new employee:', error);
  }
};

// Call the function to create a new employee
createEmployee();
