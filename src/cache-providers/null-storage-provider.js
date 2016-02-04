class NullStorageProvider {
  constructor() {
    this.type = 'null';
  }

  static isSupported() {
    return true;
  }

  get() {
    return;
  }

  set() {

  }

  remove() {

  }

  clear() {

  }
}

export default NullStorageProvider;
