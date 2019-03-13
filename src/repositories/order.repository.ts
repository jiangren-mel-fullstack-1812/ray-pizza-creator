import {DefaultCrudRepository} from '@loopback/repository';
import {Order} from '../models';
import {MongoDBSDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id
> {
  constructor(
    @inject('datasources.MongoDBS') dataSource: MongoDBSDataSource,
  ) {
    super(Order, dataSource);
  }
}
