import { Entity, PrimaryGeneratedColumn, Column, Unique, Index } from "typeorm";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@Entity()
@Unique(["username", "email"]) // Ensure username and email are unique
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty() // Ensure username is not empty
    username: string;

    @Column({ type: 'varchar', length: 255 })
    @IsEmail() // Ensure the email is valid
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: true }) // Allow walletAddress to be optional
    walletAddress: string | null;

    @Column({ type: 'varchar', length: 255 })
    @MinLength(8) // Ensure password is at least 8 characters long
    hashedPassword: string; // Renamed to make it clear this stores hashed passwords
}