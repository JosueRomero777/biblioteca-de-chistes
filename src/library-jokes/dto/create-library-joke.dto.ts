import { ApiProperty } from "@nestjs/swagger";

export class CreateLibraryJokeDto {
   
    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string;
   
    @ApiProperty()
    img:string;

}
