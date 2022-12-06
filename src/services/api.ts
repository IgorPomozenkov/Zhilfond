/* eslint-disable no-console */
export default class API {
  baseUrl = 'https://jsonplaceholder.typicode.com/users?';
  token = '';

  async getUserId(id: number) {
    try {
      const response = await fetch(this.baseUrl + 'id=' + id);
      return await response.json();
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async getUserName(name: string) {
    try {
      const response = await fetch(this.baseUrl + 'username=' + name);
      return await response.json();
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
