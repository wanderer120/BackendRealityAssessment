import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './customer.dto';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  @InjectRepository(Customer)
  private readonly repository: Repository<Customer>;

  public getAllCustomer(): Promise<Customer[]> {
    return this.repository.find();
  }
  public getCustomer(id: number): Promise<Customer> {
    return this.repository.findOneBy({id:id});
  }

  public createCustomer(body: CreateCustomerDto): Promise<Customer> {
    const customer: Customer = new Customer();

    customer.name = body.name;

    return this.repository.save(customer);
  }
}