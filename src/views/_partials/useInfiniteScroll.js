import { useState, useEffect } from "react";

export const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  const [offSet, setOffSet] = useState(1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  function handleScroll() {
    if (window.pageYOffset > offSet || isFetching) return;
    setOffSet(offSet + 1000);
    // console.log(document.documentElement.scrollTop);
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

// export default useInfiniteScroll;
