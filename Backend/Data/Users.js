import bcrypt from "bcryptjs";
export const UsersList = [
  {
    name: "Akshay",
    email: "akshay@gmail.com",
    password: bcrypt.hashSync("Akshay98#", 10),
  },
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("Admin98#", 10),
    isAdmin: true,
  },
  {
    name: "Test",
    email: "test@gmail.com",
    password: bcrypt.hashSync("Test98#", 10),
  },
];
