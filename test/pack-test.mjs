import api from '../';
import assert from 'assert';
import { unpackSession } from '../src/pack/mapshaper-unpack';

describe('mapshaper-pack.mjs', function () {
  it('simple round trip', async function () {
    var data = [{foo: 'bar'}];
    var out = await api.applyCommands('-i data.json -o out.msx', {'data.json': data});
    var obj = unpackSession(out['out.msx']);
    var timestamp = Date.parse(obj.created); // NaN if not a parsable ISO date
    assert(timestamp > 0);
    assert.equal(obj.version, 1);
    assert.deepEqual(obj.datasets[0].layers[0].data.getRecords(), [{foo: 'bar'}]);
  });

  it('read from a .msx snapshot file', async function() {
    var cmd = '-i test/data/msx/mapshaper_snapshot.msx -o format=geojson';
    var out = await api.applyCommands(cmd);
    var rectangle = JSON.parse(out['rectangle.json']);
    var points = JSON.parse(out['points.json']);
    var polygons = JSON.parse(out['polygons.json']);
    assert.equal(rectangle.geometries.length, 1);
    assert.equal(points.features.length, 6);
    assert.equal(polygons.features.length, 6);
  })
})
