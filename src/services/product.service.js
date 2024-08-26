import { User } from "../models/user.model.js";

export default class ProductService {
  #userModel;
  constructor(User) {
    this.#userModel = User;
  }

  async getProducts() {
    return [];
  }

  async getProduct() {
    return {};
  }

  async createProduct() {
    return {};
  }

  async updateProduct() {
    return {};
  }

  async deleteProduct() {
    return {};
  }
}

export const productService = new ProductService(User);
