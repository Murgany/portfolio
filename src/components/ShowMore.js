import React, { useState } from "react";
// import "../App.css";
  
// const ShowMore = ({ children }) => {
//   const text = children;
//   const [isShowMore, setIsShowMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsShowMore(!isShowMore);
//   };
//   return (
//     <p className="text">
//       {isShowMore ? text.slice(0, 3) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isShowMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

// export default ShowMore;

 export const ShowMore = (array, start, end) => {
    let length = array == null ? 0 : array.length
    if (!length) {
      return []
    }
    start = start == null ? 0 : start
    end = end === undefined ? length : end
  
    if (start < 0) {
      start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
      end += length
    }
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0
  
    let index = -1
    const result = new Array(length)
    while (++index < length) {
      result[index] = array[index + start]
    }
    return result
  }
  
  export default ShowMore;