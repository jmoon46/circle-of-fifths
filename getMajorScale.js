const majorNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const getMajorScale = (endNote) => {
    const newScale = [...majorNotes];
    if (endNote === "F" || endNote.includes("b")) {
        // take flat route
        while (newScale[0] !== endNote) {
            shiftArrayFlat(newScale);
            addFlat(newScale);
        }
    } else {
        // take sharp route
        while (newScale[0] !== endNote) {
            shiftArraySharp(newScale);
            addSharp(newScale);
        }
    }
    return newScale;
}

const shiftArraySharp = (array) => {
    for (i = 0; i < 3; i++) {
        x = array.pop();
        array.unshift(x);
    }
}

const shiftArrayFlat = (array) => {
    for (i = 0; i < 4; i++) {
        x = array.pop();
        array.unshift(x);
    }
}

const addFlat = (scale) => {
    scale[3] += "b";
}

const addSharp = (scale) => {
    scale[6] += '#';
}

majorNotes.forEach(x => {
    // console.log("majorNotes", majorNotes);
    console.log(getMajorScale(x));
    // console.log("majorNotes", majorNotes);
});

// console.log(getMajorScale("E"))


const getMajorChord = (startNote) => {
    const majorScale = getMajorScale(startNote);
    const majorChord = [majorScale[0], majorScale[2], majorScale[4]];
    return majorChord;
}

// majorNotes.forEach(x => {
//     console.log(getMajorChord(x));
// });

console.log(getMajorChord("G#"));