const notes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'Cb']

const sharpNotes = ['C', 'C#', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const flatNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'Cb']

// (in major) if C G D A E B F# (then use sharpNotes) || if F Bb Eb Ab Db Gb (then use flatNotes)
// majorPattern 2212221

// (in minor) if E B F# C# G# D# A# (then use sharpNotes) || if 

const majorPattern = [3, 3, 2, 3, 3, 3, 2];  // 2212221
const minorPattern = [3, 2, 3, 3, 2, 3, 3];

const getScale = (startNote, pattern) => {
  const noteIndex = notes.indexOf(startNote);
  const scaleArray = [notes[noteIndex]];
  for (let i = 0, x = noteIndex; i < 6; i++) {
    x += pattern[i];
    if (x >= notes.length) {
      x %= notes.length;
    }
    scaleArray.push(notes[x]);
  }
  return scaleArray;
};

console.log(getScale('C', majorPattern));

const getMajorChord = (startNote) => {
  const majorScale = getScale(startNote, majorPattern);
  const majorChord = [majorScale[0], majorScale[2], majorScale[4]];
  return majorChord;
}

const getMinorChord = (startNote) => {
  const minorScale = getScale(startNote, minorPattern);
  const minorChord = [minorScale[0], minorScale[2], minorScale[4]];
  return minorChord;
}

// notes.forEach(x => {
//   console.log(getMinorChord(x));
// });
// console.log("------------------")
notes.forEach(x => {
  console.log(getMajorChord(x));
});



// problem major chords:
// G# D# A#