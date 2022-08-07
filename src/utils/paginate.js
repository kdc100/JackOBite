import _ from "lodash";
// RETURNS THE ITEMS ON THE CURRENT PAGE
// THIS HAS BEEN TESTED, NO PROBLEMS

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
