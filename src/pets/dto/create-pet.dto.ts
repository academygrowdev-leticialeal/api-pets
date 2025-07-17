import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    species: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsInt()
    @IsPositive()
    age: number;
}
