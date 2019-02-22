const axios = require('axios');

const port = process.env.PORT || 3003;

describe('server', () => {
  let response;

  beforeAll(() => {
    return axios
      .get(`http://localhost:${port}/recommends/10`)
      .then(res => {
        response = res;
      })
      .catch(() => console.log('>>>>>>>>>> beforeAll FAILED <<<<<<<<<<'));
  });

  it('should handle get requests', () => {
    expect(response.status).toBe(200);
  });

  it('should return an array with length of 10', () => {
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(10);
  });
});