import { Controller, Get } from '@nestjs/common';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }
}
