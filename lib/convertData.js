export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map(item => {
    // Check if the item has a valid _id field
    if (!item || !item._id) {
      // If not, handle this case (you can skip it or set a default value)
      return item;
    }

    return {
      id: item._id.toString(),
      ...item
    };
  }).map(({_id, ...rest}) => rest);

  return mappedArray;
};


export const replaceMongoIdInObject = (obj) => {
  if (!obj || !obj._id) {
    // If obj or _id is missing, return the object as it is (or handle the case accordingly)
    return obj;
  }

  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};
