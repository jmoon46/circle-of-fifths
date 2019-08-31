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
  
const getMinorSixChord = startNote => {
  
}
  
const getMajorSixChord = startNote => {
    
}
  
const getSevenChord = startNote => {
  const minorScale = getMinorScale(startNote);
  const sevenChord = getMajorChord(startNote);
  sevenChord.push(minorScale[6]);
  return sevenChord;
}
  
const getMajorSevenChord = startNote => {
    
}
  
console.log(getSusTwoChord('F'));
console.log(getSusFourChord('F'));
majorNotes.forEach(x => {
  console.log(getAugmentedChord(x));
});
  