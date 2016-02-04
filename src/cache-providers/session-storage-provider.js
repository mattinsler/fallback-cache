import Html5StorageProvider from './html5-storage-provider';

class SessionStorageProvider extends Html5StorageProvider {
  constructor(options) {
    super('sessionStorage', options);
  }

  static isSupported() {
    return Html5StorageProvider.isSupported('sessionStorage');
  }
}

export default SessionStorageProvider;
