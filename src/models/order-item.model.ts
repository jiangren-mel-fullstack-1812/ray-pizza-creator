import {Model, model, property} from '@loopback/repository';

@model()
export class OrderItem extends Model {
  @property({
    type: 'string',
  })
  productId?: string;

  @property({
    type: 'number',
  })
  quantity?: number;

  constructor(data?: Partial<OrderItem>) {
    super(data);
  }
}
