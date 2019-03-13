import {Entity, model, property} from '@loopback/repository';

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
  items?: object[];


  constructor(data?: Partial<Order>) {
    super(data);
  }
}
