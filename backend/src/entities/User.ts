import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
@Unique(["username", "email"]) // Ensure username and email are unique
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    walletAddress: string;

    @Column()
    password: string; // Store hashed passwords only
}