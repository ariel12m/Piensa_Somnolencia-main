import { ArrayNotEmpty, IsArray, IsEmail, IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
    
    @IsString()
    email: string; 

    @IsString()
    password: string

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @IsOptional()
    events?: number[]
}