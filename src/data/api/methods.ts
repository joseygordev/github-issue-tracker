const BASE = 'https://api.github.com';

export default {
  get: async function (endpoint: string) {
    const response = await fetch(/(http(s?)):\/\//i.test(endpoint) ? endpoint : `${BASE}/${endpoint}`);
    const parsedResponse = await response.json();

    if (!response.ok) {
      throw Error(parsedResponse.message || 'An error occured');
    }

    return parsedResponse;
  },
};
