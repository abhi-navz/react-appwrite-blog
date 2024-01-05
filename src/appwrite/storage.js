import { Client, ID, Storage } from "appwrite";

import conf from "../conf/conf";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Serice:: StorageService:: createFile::", error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileID);
      return true;
    } catch (error) {
      console.log("Appwrite Serice:: StorageService:: deleteFile::", error);
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileID);
  }
}

const storageService = new StorageService();
export default storageService;
