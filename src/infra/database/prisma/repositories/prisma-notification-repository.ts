import { Notification } from "../../../../application/entities/notification";
import { NotificationRepository } from "../../../../application/repositories/notification-repositories";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationRepository implements NotificationRepository{
  constructor(private primasService: PrismaService){}

 async create(notification: Notification): Promise<void> {
    await this.primasService.notification.create({
      data:{
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        reatAt: notification.readAt,
        createAt: notification.createAt

      }
    })
  }
}