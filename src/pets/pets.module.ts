import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaModule } from 'src/configs/database/prisma.module';
import { PrismaService } from 'src/configs/database/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [PetsController],
  providers: [PrismaService, PetsService],
})
export class PetsModule {}
