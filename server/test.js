var axios = require('axios');
var expect = require('chai').expect;

describe('API Calls', () => {
  it('should return games with similar tags when a tag id is passed in', (done) => {
    axios.get('http://localhost:3003/api/getGamesByTags/19')
    .then((res) => {
      expect(res).to.exist;
      expect(res.status).to.equal(200);
      expect(res.data).to.exist;
      var record = res.data[0];
      expect(record.id).to.exist;
      expect(record.date).to.exist;
      expect(record.price).to.exist;
      expect(record.tagList).to.exist;
      expect(record.images).to.exist;
      done();
    })
    .catch((err) => {
      expect(err).to.not.exist;
    });
  });

  it('should return games from series when a game series is passed in', (done) => {
    axios.get('http://localhost:3003/api/getGamesBySeries/12')
    .then((res) => {
      expect(res).to.exist;
      expect(res.status).to.equal(200);
      expect(res.data).to.exist;
      var record = res.data[0];
      expect(record.id).to.exist;
      expect(record.date).to.exist;
      expect(record.price).to.exist;
      expect(record.tagList).to.exist;
      expect(record.series).to.exist;
      expect(record.images).to.exist;
      expect(record.series).to.equal(12);

    })  })
})