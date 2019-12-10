import { getProjects , getPalettes, postPalette, deletePalette } from './apiCalls';

describe('apiCalls.js', () => {
  describe('getProjects', () => {

    let mockResponse = {
      "results": [
        {
          "id": 1,
          "name": "Neature",
          "created_at": "2019-12-03T22:17:16.382Z",
          "updated_at": "2019-12-03T22:17:16.382Z"
        },
        {
          "id": 2,
          "name": "Fall Stuff",
          "created_at": "2019-12-03T22:17:16.387Z",
          "updated_at": "2019-12-03T22:17:16.387Z"
        },
        {
          "id": 3,
          "name": "Animal Coats",
          "created_at": "2019-12-03T22:17:16.388Z",
          "updated_at": "2019-12-03T22:17:16.388Z"
        }
      ]
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should fetch with correct url', () => {
      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/projects'

      getProjects(mockUrl)

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an array of projects (HAPPY)', () => {
      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/projects'

      getProjects(mockUrl)
      .then(results => expect(results).toEqual(mockResponse))
    })

  })
})
