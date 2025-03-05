import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@Entity()
@Unique(["username", "email"]) // Ensure username and email are unique
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 }) // Specify type and length
    username!: string;

    @Column({ type: 'varchar', length: 255 }) // Specify type and length
    email!: string;

    @Column({ type: 'varchar', length: 255, nullable: true }) // Allow null values
    walletAddress!: string;

    @Column({ type: 'varchar', length: 255 }) // Specify type and length
    password!: string; // Store hashed passwords only
}