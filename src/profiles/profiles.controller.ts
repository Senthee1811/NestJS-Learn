import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateprofileDto  } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
    //GET /profiles
    @Get()
    findAll(@Query('location') location:string) {
        return [{ location }];
    } 

    //GET /profiles/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        return { id };
    } 

    //Post 
    @Post()
    create(@Body() CreateprofileDto: CreateprofileDto) {
        return { 
            name: CreateprofileDto.name,
            description: CreateprofileDto.description
        }
    }

    
}
