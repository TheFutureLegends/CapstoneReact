import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
// import cardProfile1 from "assets/img/examples/card-profile1.jpg";
// import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
// import avatar from "assets/img/faces/avatar.jpg";
// import christian from "assets/img/faces/christian.jpg";
// import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

export const image = [
  cardBlog1,
  cardBlog2,
  cardBlog3,
  cardBlog5,
  cardBlog6,
  blog1,
  blog5,
  blog6,
  blog8,
  office1,
  color1,
  color2,
  color3,
];

export const string_to_slug = (str) => {
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

export const strip_tags = (input, allowed) => {
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

export const substring_description = (str = null, limit = 10, slug = null) => {
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
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
