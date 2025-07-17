/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/configs/database/prisma.service';
import { Pet } from '@prisma/client';

@Injectable()
export class PetsService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const pet = await this.prismaService.pet.create({
      data: {
        ...createPetDto,
      },
    });

    return pet;
  }

  async findAll(): Promise<Pet[]> {
    const pets = await this.prismaService.pet.findMany();
    return pets;
  }

  async findOne(id: string): Promise<Pet> {
    const petFound = await this.prismaService.pet.findUnique({
      where: { id },
    });

    if (!petFound) {
      throw new NotFoundException('Pet not found by ID');
    }

    return petFound;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
