import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateprofileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}
  //GET /profiles
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  //GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  //Post
  @Post()
  create(@Body() CreateprofileDto: CreateprofileDto) {
    return this.profileService.createProfile(CreateprofileDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.updateProfile(id, updateProfileDto);
  }

  //DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.profileService.deleteProfile(id);
  }
}
