const axios = require('axios');

describe('server', () => {
  let response;

  beforeAll(() => {
    return axios
      .get('http://127.0.0.1:3003/recommends/10')
      .then(res => {
        response = res;
      })
      .catch(err => console.log('>>>>>>>>>> beforeAll FAILED <<<<<<<<<<'));
  });

  it('should handle get requests', () => {
    expect(response.status).toBe(200);
  });

  it('should return an array with length of 10', () => {
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(10);
  });
});