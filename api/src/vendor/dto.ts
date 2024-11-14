import {ApiProperty} from "@nestjs/swagger";


class CreateDto {
    @ApiProperty({
        description: "name of vendor",
        example: "Dien May Xanh"
    })
    name: string

    @ApiProperty({
        example: "Ha Noi"
    })
    location: string

    @ApiProperty()
    phone: string
}

class UpdateDto extends CreateDto {}

export {CreateDto, UpdateDto}