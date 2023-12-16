import { XMLParser } from "fast-xml-parser";

export const parseFeed = (text) => {
  const options = {
    ignoreAttributes: false,
  };

  const parser = new XMLParser(options);
  const result = parser.parse(text);

  return result;
};
