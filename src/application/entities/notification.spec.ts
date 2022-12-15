import { Content } from './content'
import { Notification } from './notification'
describe('Notification', () => {
  it('Deve criar uma nova notificação', () =>{
    const notification = new Notification({
      content: new Content('Vocẽ recebeu uma nova solicitação de amizade'),
      category:'social',
      recipientId:"example-de-recipiente"
    });
    expect(notification).toBeTruthy()
  })
})
