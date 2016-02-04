class MemoryStorageProvider {
  constructor() {
    this.type = 'memory';
    this.cache = {};
  }

  static isSupported() {
    return true;
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  remove(key) {
    delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }
}

export default MemoryStorageProvider;
