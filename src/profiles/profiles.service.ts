import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateprofileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at ligula a nunc efficitur fermentum. Nulla facilisi. Donec vel sapien eget nunc efficitur varius. Sed at ligula a nunc efficitur fermentum. Nulla facilisi.',
    },
    {
      id: randomUUID(),
      name: 'Chris Smith',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at ligula a nunc efficitur fermentum. Nulla facilisi. Donec vel sapien eget nunc efficitur varius. Sed at ligula a nunc efficitur fermentum. Nulla facilisi.',
    },
    {
      id: randomUUID(),
      name: 'Leo Das',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at ligula a nunc efficitur fermentum. Nulla facilisi. Donec vel sapien eget nunc efficitur varius. Sed at ligula a nunc efficitur fermentum. Nulla facilisi.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  createProfile(createProfileDto: CreateprofileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
  }
}
