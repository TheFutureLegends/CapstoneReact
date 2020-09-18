const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const string_to_slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_:;";
  var to = "aaaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/,/g, "-") // remove comma in string and replace by -
    .replace(/,/, "") // remove comma in number
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-+/, "") // trim - from start of text
    .replace(/-+$/, ""); // trim - from end of text

  return str;
};

const strip_tags = (input, allowed) => {
  if (input != null) {
    allowed = (
      ((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join("");
    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    return input.replace(tags, ($0, $1) =>
      allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
    );
  }
  return input;
};

const substring_text = (str = null, limit = 10, slug = null) => {
  if (str != null) {
    var splitstr = str.split(" ");

    var result = "";

    if (splitstr.length > limit) {
      for (let index = 0; index < limit; index++) {
        result += splitstr[index] + " ";
      }
    } else {
      for (let index = 0; index < splitstr.length; index++) {
        result += splitstr[index] + " ";
      }
    }

    if (slug != null) {
      return (
        result.trim() +
        "... " +
        '<a href="/study-guide/' +
        slug +
        '">Read More</a>'
      );
    }

    return result.trim() + "...";
  }

  return "";
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

export {
  isEmpty,
  string_to_slug,
  strip_tags,
  substring_text,
  getRandomInt,
  getRandomElementFromArray,
};
