import {Entity, model, property} from '@loopback/repository';
import {OrderItem} from './order-item.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  items?: OrderItem[];

  constructor(data?: Partial<Order>) {
    super(data);
  }
}
