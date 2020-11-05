export class Month {

  constructor(private value: string) { }
  
  toString() {
    return this.value
  }

  static fromString(value: string) {
    this.checkValidity(value)
    return new Month(value)
  }

  static checkValidity(value: string) {
    if (!/^\d{4}-\d{2}$/i.test(value)) {
      throw new Error(`Malformed month value: ${value}`)
    }
  }
}
