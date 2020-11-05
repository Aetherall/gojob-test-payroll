
export class GojobberId {

  constructor(private value: string) { }
  
  toString() {
    return this.value
  }

  static fromString(value: string) {
    this.checkValidity(value)
    return new GojobberId(value)
  }

  static checkValidity(value: string) {
    const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidV4Pattern.test(value)) {
      throw new Error(`Malformed GojobberId value: ${value}`)
    }
  }

}
