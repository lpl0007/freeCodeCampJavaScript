const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop !== 'tracks') {
    records[id][prop] = value;
  } else if (!Object.prototype.hasOwnProperty.call(records[id], 'tracks')) {
    records[id][prop] = [value];
  } else {
    records[id][prop].push(value);
  }
  return records;
}