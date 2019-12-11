import { getColors } from './apiCallsColors';


describe('apiCallsColors', () => {

  describe('getColors', () => {
    let mockResponse = {
      "results": []
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    })

    it('should fetch with correct url', () => {
      const mockUrl = 'http://www.colr.org/json/colors/random/5'

      getColors(mockUrl)

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

  })

})
