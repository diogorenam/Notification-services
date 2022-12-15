
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification-repository";
import { SendNotification } from "./send-notification"


describe('Enviar notificação', () => {
  it('Dever enviar notificação com sucesso', async ()=> {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

   const {notification} = await sendNotification.execute({
      content:'Olá tudo bem com vocẽ?',
      recipientId: "example-send-notification",
      category: "social",
    })
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  })
})