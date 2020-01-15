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

// const getPhrygianScale = endNote => {
//   const newScale = [...phrygianNotes];
//   if () {

//   } else {
    
//   }
//   return newScale;
// };

// const getLydianScale = endNote => {
//   const newScale = [...lydianNotes];
//   if () {

//   } else {
    
//   }
//   return newScale;
// };

// const getMixolydianScale = endNote => {
//   const newScale = [...mixolydianNotes];
//   if () {

//   } else {
    
//   }
//   return newScale;
// };

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

const addDorianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[2] += 'b';
    return
  }
  scale[5] += '#';
}

const addPhrygianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {

    return
  }
  
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

console.log(getDorianScale('E'));