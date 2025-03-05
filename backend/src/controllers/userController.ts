import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response) => {
    const { username, email, walletAddress, password } = req.body;

    try {
        const userRepository = AppDataSource.getRepository(User);

        // Check if user already exists
        const existingUser = await userRepository.findOne({ where: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = userRepository.create({
            username,
            email,
            walletAddress,
            password: hashedPassword,
        });

        await userRepository.save(user);

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};



export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const userRepository = AppDataSource.getRepository(User);

        // Find the user by username
        const user = await userRepository.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Generate a JWT
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "your_secret_key", {
            expiresIn: "1h",
        });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};