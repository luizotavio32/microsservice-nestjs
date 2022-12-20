import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['moral-kit-9224-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bW9yYWwta2l0LTkyMjQk90cwOHTSHk1fB6-wjhaj11C1DYVng-3CpSrpLmBtArs',
          password:
            'vovHoAUwzWf7iKmulxRuC-g9bPWovHSHYhs589Am9Rkbubqea_gb2F_xx3CjZJkaTS6gQw==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
