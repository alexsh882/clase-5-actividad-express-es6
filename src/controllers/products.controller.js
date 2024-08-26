export default class ProductController {


    #productService;

    constructor(productService) {
        this.#productService = productService   

    }

    async getProducts(req, res){
        res.json({message: 'Get products'});
    }

    async getProduct(req, res){
        res.json({message: 'Get product'});
    }

    async createProduct(req, res){
        res.json({message: 'Create product'});
    }

    async updateProduct(req, res){
        res.json({message: 'Update product'});
    }

    async deleteProduct(req, res){
        res.json({message: 'Delete product'});
    }

}