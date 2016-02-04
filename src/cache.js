import LocalStorageProvider from './cache-providers/local-storage-provider';
import SessionStorageProvider from './cache-providers/session-storage-provider';
import MemoryStorageProvider from './cache-providers/memory-storage-provider';
import NullStorageProvider from './cache-providers/null-storage-provider';

/**
 * Common caching mechanism with fallback from localStorage -> sessionStorage -> memory
 *
 * options:
 *   - prefix           (default: --tpt-cache--)
 *   - prefixSeparator  (default: |)
 *   - expiration       (optional)
 *   - providers        (default: [LocalStorage, SessionStorage, Memory])
**/
class Cache {
  constructor(options = {}) {
    // if (options == null) { options = {}; }
    if (!options.prefix) { options.prefix = '--tpt-cache--'; }
    if (!options.prefixSeparator) { options.prefixSeparator = '|'; }

    const providers = options.providers || [
      LocalStorageProvider,
      SessionStorageProvider,
      MemoryStorageProvider
    ];

    this.options = options;
    this.init(providers);
  }

  // moved out so that decorators will work
  // static SECOND = 1000;
  // static MINUTE = Cache.SECOND * 60;
  // static HOUR = Cache.MINUTE * 60;
  // static DAY = Cache.HOUR * 24;
  // static WEEK = Cache.DAY * 7;

  static Providers = {
    LocalStorage: LocalStorageProvider,
    SessionStorage: SessionStorageProvider,
    Memory: MemoryStorageProvider
  };

  init(providers) {
    for (let x = 0; x < providers.length; ++x) {
      const provider = providers[x];
      if (provider.isSupported()) {
        /* eslint new-cap:0 */
        this.storage = new provider(this.options);
        return;
      }
    }

    this.storage = new NullStorageProvider(this.options);
  }

  createKey(key) {
    return this.options.prefix + this.options.prefixSeparator + key;
  }

  get(key) {
    const actualKey = this.createKey(key);

    const data = this.storage.get(actualKey);
    if (!data) { return undefined; }

    const match = /^([0-9]+)\|(.+)$/.exec(data);
    if (!match) {
      this.storage.remove(actualKey);
      return undefined;
    }

    if (typeof(this.options.expiration) === 'number') {
      const ts = parseInt(match[1], 10);
      const now = Date.now();
      if ((now - ts) > this.options.expiration) {
        this.storage.remove(actualKey);
        return undefined;
      }
    }

    return JSON.parse(match[2]);
  }

  set(key, value) {
    return this.storage.set(this.createKey(key), `${Date.now()}|${JSON.stringify(value)}`);
  }

  remove(key) {
    return this.storage.remove(this.createKey(key));
  }

  clear() {
    return this.storage.clear();
  }
}

Cache.SECOND = 1000;
Cache.MINUTE = Cache.SECOND * 60;
Cache.HOUR = Cache.MINUTE * 60;
Cache.DAY = Cache.HOUR * 24;
Cache.WEEK = Cache.DAY * 7;

export default Cache;
