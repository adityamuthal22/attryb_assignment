
const User = require('../model/user.model');

async function register(req, res) {
    try {
      // Extract registration data from the request body
      const { name, username, password } = req.body;

      if (!name || !username || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Create a new user object
      const newUser = new User({ name, username, password });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      // Respond with success message
      res.status(201).json({ message: 'Registration successful', user: savedUser });
    } catch (error) {
      // Handle registration error
      res.status(500).json({ message: 'Registration failed', error: error.message });
    }
  }

async function login(req, res) {
  try {
    // Extract login data from the request body
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }

    if (password !== user.password) {
      // Incorrect password
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // User authenticated successfully
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    // Handle login error
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
}

module.exports = {
  register,
  login,
};
