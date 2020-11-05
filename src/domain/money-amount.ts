export class MoneyAmount {
  constructor(private value: number) { }
  
  toNumber() {
    return this.value
  }

  static fromNumber(value: number) {
    return new MoneyAmount(value)
  }

  static checkValidity() {
    return true
  }
}
