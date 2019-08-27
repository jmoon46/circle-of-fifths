const minorNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const getMinorScale = (endNote) => {
    const newScale = [...minorNotes];
    if (endNote === "E" || endNote === "B" || endNote.includes("#")) {
        // take sharp route
        while (newScale[0] !== endNote) {
            shiftArraySharp(newScale);
            addMinorSharp(newScale);
        }
    } else {
        // take flat route
        while (newScale[0] !== endNote) {
            shiftArrayFlat(newScale);
            addMinorFlat(newScale);
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

const addMinorFlat = (scale) => {
    scale[5] += "b";
}

const addMinorSharp = (scale) => {
    scale[1] += "#";
}

// minorNotes.forEach(x => {
//     console.log(getMinorScale(x))
// });

console.log(getMinorScale("Db"))