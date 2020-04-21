// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const deleteTransaction = await transactionRepository.findOne(id);

    if (!deleteTransaction) {
      throw new AppError('transaction does not exist');
    }

    await transactionRepository.remove(deleteTransaction);
  }
}

export default DeleteTransactionService;
