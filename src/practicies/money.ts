// object doesn't have its identity

type Currency = 'EUR' | 'PLN';

class Money {
  private constructor(
    private value: number,
    private currency: Currency
  ) {}

  static from(value: number, currency: Currency) {
    return new Money(value, currency);
  }

  multiply(factor: number) {
    return new Money(this.value * factor, this.currency);
  }

  add(another: Money) {
    if (this.currency !== another.currency) {
      throw new Error('Cannot add different currencies');
    }
    return new Money(this.value + another.value, this.currency);
  }

  nominalValue() {
    return this.value;
  }
}

const m = Money.from(88, 'PLN');
// m + 4; // invalid

// const n: number = m; // invalid

const sum1 = m.add(Money.from(1.23, 'PLN'));
const sum2 = m.add(Money.from(1.23, 'EUR')); // kompiluje się, bo typy są zgodne
// ale będzie błąd w runtime

const product = m.multiply(2);