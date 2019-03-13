import {DefaultCrudRepository} from '@loopback/repository';
import {Product} from '../models';
import {MongoDBSDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor(
    @inject('datasources.MongoDBS') dataSource: MongoDBSDataSource,
  ) {
    super(Product, dataSource);
  }
}
