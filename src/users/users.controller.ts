import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserRequest } from "./dto/create-user-request";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  async register(@Body() dto: CreateUserRequest) {
    return {
      status: "success",
      statusCode: 201,
      data: await this.userService.register(dto),
    };
  }
}
