import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateprofileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

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
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new Error(`Profile with id ${id} not found`);
    }
    return matchingProfile;
  }

  createProfile(createProfileDto: CreateprofileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
  }

  updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }

    matchingProfile.name = updateProfileDto.name;
    matchingProfile.description = updateProfileDto.description;

    return matchingProfile;
  }

  deleteProfile(id: string) {
    const exisitingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (exisitingProfileIndex > -1) {
      this.profiles.splice(exisitingProfileIndex, 1);
    }

    if (exisitingProfileIndex === -1) {
      throw new NotFoundException(`Profile with ${id} not found`);
    }
  }
}
