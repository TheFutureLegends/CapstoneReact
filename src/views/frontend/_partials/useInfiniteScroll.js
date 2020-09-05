import { useState, useEffect } from "react";

export const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  const [offSet, setOffSet] = useState(1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  function handleScroll() {
    if (window.pageYOffset > offSet || isFetching) return;
    setOffSet(offSet + 10000);
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

// export default useInfiniteScroll;
