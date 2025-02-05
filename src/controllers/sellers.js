const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const { sellerId } = req.params;
    const result = await sellerService.blockSeller(sellerId);
    res.status(httpStatus.OK).send(result);
  }
  async searchSeller(req, res) {
    const { seller, product, page, limit, sort, sortBy } = req.query;
    const result = await sellerService.searchSeller(seller, product, parseInt(page), parseInt(limit), sort, parseInt(sortBy));
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;