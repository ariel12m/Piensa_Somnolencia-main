import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        events: {
            id: number;
            createdAt: Date;
            title: string;
            description: string | null;
            date: Date | null;
            sensorData: import("@prisma/client/runtime/client").JsonValue | null;
            userId: number;
        }[];
    } & {
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        events: {
            id: number;
            createdAt: Date;
            title: string;
            description: string | null;
            date: Date | null;
            sensorData: import("@prisma/client/runtime/client").JsonValue | null;
            userId: number;
        }[];
    } & {
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<({
        events: {
            id: number;
            createdAt: Date;
            title: string;
            description: string | null;
            date: Date | null;
            sensorData: import("@prisma/client/runtime/client").JsonValue | null;
            userId: number;
        }[];
    } & {
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateUserDto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
