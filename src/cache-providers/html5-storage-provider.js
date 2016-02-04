class Html5StorageProvider {
  constructor(type, options = {}) {
    if (!options.prefix) {
      throw new Error('Html5StorageProvider requires prefix option.');
    }
    if (!options.prefixSeparator) {
      throw new Error('Html5StorageProvider requires prefixSeparator option.');
    }

    this.storage = window[type];
    this.type = type;
    this.options = options;
  }

  static isSupported(type) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    try {
      const storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (err) {
      return false;
    }
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    this.storage.setItem(key, value);
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    const keys = Object.keys(this.storage);
    const prefix = this.options.prefix + this.options.prefixSeparator;

    keys.forEach((key) => {
      if (prefix === key.slice(0, prefix.length)) {
        this.remove(key);
      }
    });
  }
}

export default Html5StorageProvider;
