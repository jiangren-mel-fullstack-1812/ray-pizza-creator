import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongo-dbs.datasource.json';

export class MongoDBSDataSource extends juggler.DataSource {
  static dataSourceName = 'MongoDBS';

  constructor(
    @inject('datasources.config.MongoDBS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
