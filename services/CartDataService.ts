class CartDataService {
  async getAll(): Promise<any> {
    const response = await fetch("http://demo0915487.mockable.io/cart");
    const data = await response.json();
    return data;
  }
}
export default new CartDataService();
