import { db } from "../config/db.js";
import { users } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const result = await db.select().from(users);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await db.insert(users).values({ name, email });
    res.json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
};
