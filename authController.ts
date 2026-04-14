import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const users: any[] = [];

function makeToken(user: any) {
  return jwt.sign({ id: user.id, email: user.email }, "secretkey", {
    expiresIn: "1h",
  });
}

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password: hashed,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: { id: newUser.id, name, email },
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = makeToken(user);

  res.json({ message: "Login successful", token });
};

export const getProfile = (req: any, res: Response) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
};
