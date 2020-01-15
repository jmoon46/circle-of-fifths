const majorNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const dorianNotes = ['D', 'E', 'F', 'G', 'A', 'B', 'C'];
const phrygianNotes = ['E', 'F', 'G', 'A', 'B', 'C', 'D'];
const lydianNotes = ['F', 'G', 'A', 'B', 'C', 'D', 'E'];
const mixolydianNotes = ['G', 'A', 'B', 'C', 'D', 'E', 'F'];
const minorNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const locrianNotes = ['B', 'C', 'D', 'E', 'F', 'G', 'A'];

// maybe put mode names in an array and use index to shift the array properly
// const Modes = { "Major": "1", "Dorian": "2" }
// example: shiftForMode("dorian") => { array.unshift(Modes["dorian"]) }


const Modes = { 
  "Major": 0,
  "Dorian": 6,
  "Phrygian": 5,
  "Lydian": 4,
  "Mixolydian": 3,
  "Minor": 2,
  "Locrian": 1
};
// vvv dynamically shifting the above scales instead of writing them all vvv
const shiftForMode = ((startScale, mode) => {
  for (i = 0; i < Modes[mode]; i++) {
    let x = startScale.pop();
    startScale.unshift(x);
  }
  console.log(startScale)
});


// shiftForMode(majorNotes, "Dorian");

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

const getDorianScale = endNote => {
  const newScale = [...dorianNotes];
  if (endNote === 'G' || endNote === 'C' || endNote === 'F' || endNote.includes('b')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addDorianAccent(newScale, true);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addDorianAccent(newScale, false);
    }
  }
  return newScale;
};

const getPhrygianScale = endNote => {
  const newScale = [...phrygianNotes];
  if (endNote === 'B' || endNote.includes('#')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addPhrygianAccent(newScale, false);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addPhrygianAccent(newScale, true);
    }
  }
  return newScale;
};

const getLydianScale = endNote => {
  const newScale = [...lydianNotes];
  if (endNote.includes('b')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addLydianAccent(newScale, true);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addLydianAccent(newScale, false);
    }
  }
  return newScale;
};

const getMixolydianScale = endNote => {
  const newScale = [...mixolydianNotes];
  if (endNote === 'C' || endNote === 'F' || endNote.includes('b')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addMixolydianAccent(newScale, true);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addMixolydianAccent(newScale, false);
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

// const getLocrianScale = endNote => {
//   const newScale = [...locrianNotes];
//   if () {

//   } else {
    
//   }
//   return newScale;
// };

// C D E F G A B        C D E F G A B
// G A B C D E F#       F G A Bb C D E
// D E F# G A B C#      Bb C D Eb F G A

// D E F G A B C        D E F G A B C
// A B C D E F# G       G A Bb C D E F
// E F# G A B C# D

// const Key = {
//  "C": "C",
//  "C#/Db": ["C#", "Db"]
// }

const shiftArray = (array, flatStatus) => {
  if (flatStatus === false) {
    // changes the notes to start from the fifth
    for (i = 0; i < 3; i++) {
      x = array.pop();
      array.unshift(x);
    }
    return;
  }
  for (i = 0; i < 4; i++) {
    // changes notes to start from the fourth
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

const addDorianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[2] += 'b';
    return
  }
  scale[5] += '#';
}

const addPhrygianAccent = (scale, flatStatus) => {
  if (flatStatus === false) {
    scale[4] += '#';
    return
  }
  scale[1] += 'b';
}

const addLydianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[0] += 'b';
    return
  }
  scale[3] += '#';
}

const addMixolydianAccent = (scale, flatStatus) => {
  if(flatStatus === true) {
    scale[6] += 'b';
    return
  }
  scale[2] += '#';
}

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

console.log(getMixolydianScale('G'));
console.log(getMixolydianScale('D'));
console.log(getMixolydianScale('Bb'));
console.log(getMixolydianScale('F#'));