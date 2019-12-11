import { getProjects , getPalettes, postPalette, deletePalette, deleteProject } from './apiCalls';

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

    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: "Error"
        })
      })

      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/project'

      expect(getProjects(mockUrl)).rejects.toEqual(Error("Error"))
    })
  })

  describe('getPalettes', () => {
    let mockResponse = {
      "results": [
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
      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palettes'

      getPalettes(mockUrl)

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an array of palettes (HAPPY)', () => {
      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palettes'

      getPalettes(mockUrl)
      .then(results => expect(results).toEqual(mockResponse))
    })

    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: "Error"
        })
      })

      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palette'

      expect(getPalettes(mockUrl)).rejects.toEqual(Error("Error"))
    })
  })

  describe('postPalette', () => {
    let mockResponse = {
      name: "Fall",
      color1: "#FFFFFF",
      color2: "#000000",
      color3: "#688780",
      color4: "#BA3EH9",
      color5: "#008800"
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok:true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch with the correct arguments', () => {
      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palettes'
      const mockPalette = {
        name: "Fall",
        color1: "#FFFFFF",
        color2: "#000000",
        color3: "#688780",
        color4: "#BA3EH9",
        color5: "#008800"
      }
      const expected = [mockUrl, {
        method: 'POST',
        body: JSON.stringify(mockPalette),
        headers: {
          'Content-Type': 'application/json'
        }
      }]

      postPalette(mockPalette)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('should post a palette (HAPPY)', () => {
      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palettes'

      postPalette(mockUrl)
      .then(results => expect(results).toEqual(mockResponse))
    })

    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: "Error"
        })
      })

      const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palettes'

      expect(postPalette(mockUrl)).rejects.toEqual(Error("Error"))
    })
  })

  describe('deletePalette', () => {
    let mockResponse = "Palette with an id of 5 successfully deleted."

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true
        })
      })
    })

    it('should be called with the correct arguments', () => {
      const id = 1
      const expected = [`http://palette-pick-be.herokuapp.com/api/v1/palettes/${1}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }]

      deletePalette(id)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: "Error"
        })
      })

      const mockUrl = `http://palette-pick-be.herokuapp.com/api/v1/palette/${1}`

      expect(deletePalette(mockUrl)).rejects.toEqual(Error("Error"))
    })
  })

  describe('deleteProject', () => {
    let mockResponse = "Project with an id of 5 successfully deleted."

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true
        })
      })
    })

    it('should be called with the correct arguments', () => {
      const id = 1
      const expected = [`http://palette-pick-be.herokuapp.com/api/v1/projects/${1}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }]

      deleteProject(id)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('should return an error (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: "Error"
        })
      })

      const mockUrl = `http://palette-pick-be.herokuapp.com/api/v1/project/${1}`

      expect(deleteProject(mockUrl)).rejects.toEqual(Error("Error"))
    })
  })

})
