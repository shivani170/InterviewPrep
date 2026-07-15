const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Mock Data
const users = [
  {
    id: 1,
    name: "Shivani",
    role: "Frontend Engineer",
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Engineer",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Mock Server is Running 🚀");
});

app.get("/users", (req, res) => {
  res.json(users);
});

//Get user by Id

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json(user);
});
// Create User

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  }

  users.push(newUser);

  res.status(201).json(newUser);
});

// Update user

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex(user.id === id);

  if (index === -1) {
    res.status(401).json({
      message: "User not found",
    });
  }

  users[index] = {
    ...users[index],
    ...req.body,
  };

  res.json(users[index]);
});

// Delete Users

app.delete("/users/:id", (req, res) => {
  //   Approach 1
  const id = Number(req.params.id);
  //   users = users.filter((u) => u.id !== id);

  //   Approach 2
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  users.splice(index, 1);

  res.json({
    message: "User deleted successfully",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
