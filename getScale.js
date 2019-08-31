const majorNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const minorNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const getMajorScale = endNote => {
  const newScale = [...majorNotes];
  if (endNote === 'F' || endNote.includes('b')) {
    // take flat route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addMajorAccent(newScale, true);
    }
  } else {
    // take sharp route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addMajorAccent(newScale, false);
    }
  }
  return newScale;
};

const getMinorScale = endNote => {
  const newScale = [...minorNotes];
  if (endNote === 'E' || endNote === 'B' || endNote.includes('#')) {
    // take sharp route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addMinorAccent(newScale, false);
    }
  } else {
    // take flat route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addMinorAccent(newScale, true);
    }
  }
  return newScale;
};

const shiftArray = (array, flatStatus) => {
  if (flatStatus === false) {
    for (i = 0; i < 3; i++) {
      x = array.pop();
      array.unshift(x);
    }
    return;
  }
  for (i = 0; i < 4; i++) {
    x = array.pop();
    array.unshift(x);
  }
};

// Adds flat or sharp symbol
const addMajorAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[3] += 'b';
    return;
  }
  scale[6] += '#';
};

const addMinorAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[5] += 'b';
    return;
  }
  scale[1] += '#';
};

module.exports = {
  getMajorScale, getMinorScale, majorNotes, minorNotes
};