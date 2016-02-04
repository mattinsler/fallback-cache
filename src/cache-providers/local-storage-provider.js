import Html5StorageProvider from './html5-storage-provider';

class LocalStorageProvider extends Html5StorageProvider {
  constructor(options) {
    super('localStorage', options);
  }

  static isSupported() {
    return Html5StorageProvider.isSupported('localStorage');
  }
}

export default LocalStorageProvider;
