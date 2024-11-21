import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Store} from "./entity";
import {StoreController} from "./controller";
import {StoreService} from "./service";

@Module({
    imports: [TypeOrmModule.forFeature([Store])],
    controllers: [StoreController],
    providers: [StoreService]
})
export class StoreModule {}