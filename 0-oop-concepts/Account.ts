// Encapsulation

class Account {
  private balance: number = 33;

  public deposit = (amount: number): void => {
    if (amount > 0) this.balance += amount;
  };

  public withdraw = (amount: number): void => {
    if (amount > 0) this.balance -= amount;
  };

  public getBalance = (): number => {
    return this.balance;
  };
}
