import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';


@Controller('notifications')
export class NotificationController {

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
   
  }
}
