/**
 * This node program reads text from input file and computes the frequency of
 * each character in that text and displays a histogram of the most frequently used
 * character, require node 12 or higher version
 *
 * In Unix type environment you can invoke the program like
 *      node 01-charFreq.js < textFileName.txt
 */

/**
 *  This class extends Map so that get() method returns the specified
 *  value of null when the key is not in the map
 */

class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}

/**
 * This class computes and displays letter freq histograms
 */

class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }

  /**
   * This function updates the histogram with the letters of text
   */
  add(text) {
    // Remove whitespace from the text and convert to uppercase
    text = text.replace(/\s/g, "").toUpperCase();

    // Now loop through characters of the text
    for (let character of text) {
      let count = this.letterCounts.get(character);
      this.letterCounts.set(character, count+1);
      this.totalLetters += 1;
    }
  }

  // Convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the Map to an array of [key, value] arrays
    let entries = [...this.letterCounts];

    // sort the array by count, then alphabetically
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    // Convert the count to percentages
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    // Drop any entries less then 1%
    entries = entries.filter((entry) => entry[1] >= 1);

    // Now convert each entry to lines of text
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // And return the concatenated lines, separated by newlines characters
    return lines.join("\n");
  }
}

/**
 * This async (Promise-returning) function creates a histogram object,
 * asynchronously reads the chunk of text from standard input, and adds those chunk to
 * the histogram. When it reaches the end of the stream, it returns this histogram
 */

async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  let histogram = new Histogram();

  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

/**
 * This one final line of code is the main  of the program
 *
 * It makes a histogram object from standard input, then prints the histogram.
 */

histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});