const { getMajorScale, getMinorScale, majorNotes, minorNotes } = require('./getScale');

const getMajorChord = startNote => {
  const majorScale = getMajorScale(startNote);
  const majorChord = [majorScale[0], majorScale[2], majorScale[4]];
  return majorChord;
};

const getMinorChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const minorChord = [minorScale[0], minorScale[2], minorScale[4]];
  return minorChord;
}

const getSusTwoChord = startNote => {
  const majorScale = getMajorScale(startNote);
  const twoChord = [majorScale[0], majorScale[1], majorScale[4]];
  return twoChord;
}

const getSusFourChord = startNote => {
  const majorScale = getMajorScale(startNote);
  const fourChord = [majorScale[0], majorScale[3], majorScale[4]];
  return fourChord;
}

const getDiminishedChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const diminishedChord = [minorScale[0], minorScale[2]];
  const nextMinorScale = getMinorScale(minorScale[2]);
  diminishedChord.push(nextMinorScale[2]);
  return diminishedChord;
}

const getAugmentedChord = startNote => {
  const majorScale = getMajorScale(startNote);
  const augmentedChord = [majorScale[0], majorScale[2]];
  const nextMajorScale = getMajorScale(majorScale[2]);
  augmentedChord.push(nextMajorScale[2]);
  return augmentedChord;
}

const getSixChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const sixChord = getMajorChord(startNote);
  sixChord.push(minorScale[5]);
  return sixChord;
}

const getMinorSixChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const sixChord = getMinorChord(startNote);
  sixChord.push(minorScale[5]);
  return sixChord;
}

const getMajorSixChord = startNote => {
  const majorScale = getMajorScale(startNote);
  const sixChord = getMajorChord(startNote);
  sixChord.push(majorScale[5]);
  return sixChord;
}

const getSevenChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const sevenChord = getMajorChord(startNote);
  sevenChord.push(minorScale[6]);
  return sevenChord;
}

const getMinorSevenChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const sevenChord = getMinorChord(startNote);
  sevenChord.push(minorScale[6]);
  return sevenChord;
}

const getMajorSevenChord = startNote => {
  const majorScale = getMajorScale(startNote);
  const sevenChord = getMajorChord(startNote);
  sevenChord.push(majorScale[6]);
  return sevenChord;
}


majorNotes.forEach(x => {
  console.log(getMajorSevenChord(x));
});