import { useEffect, useState, useCallback } from "react";
import request from "../../utils/api/axios";
import Molecules from "../molecules";
import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";
import Atoms from "../atoms";

type ResponseIssue = {
  id: string;
  number: string;
  comments: string;
  title: string;
  user: { login: string };
  created_at: string;
};

type Issue = {
  issueId: number;
  issueNumber: number;
  comments: number;
  issueTitle: string;
  user: string;
  createdDate: string;
};

const Issues = () => {
  const [firstIssue, setFirstIssues] = useState([]);
  const [issues, setIssues] = useState([]);
  const [pageindex, setPageIndex] = useState(1);
  const [isLoaded, setIsLoaded] = useState(true);

  const testFetch = (delay = 1000) =>
    new Promise((res) => setTimeout(res, delay));

  const getData = async () => {
    try {
      //   const data = await request.get("/issues?sort=comments&direction=desc");
      // 페이지 20개씩 받기를 원하지만 40개씩 받아오고있음 수정해야함..
      const response = await request.get("/issues", {
        params: {
          sort: "comments",
          direction: "desc",
          page: pageindex,
          per_page: "10",
        },
      });
      const data = response.data.map((issue: ResponseIssue): Issue => {
        return {
          issueId: Number(issue.id),
          issueNumber: Number(issue.number),
          comments: Number(issue.comments),
          issueTitle: issue.title,
          user: issue.user.login,
          createdDate: issue.created_at,
        };
      });
      if (data.length === 0) return null;
      console.log(data);

      await testFetch();

      // useState를 이용해서 페이지 인덱스 데이터를 관리하려고 했는데 page가 계속 1로 고정됨,,
      // setPageIndex((prevIndex)=>prevIndex++)
      setIssues((prevIssues) => [...prevIssues].concat(data));
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    //보통 교차여부만 확인하는 것 같다. 코드는 로딩상태까지 확인함.
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log("IO콜백함수 실행!");
      await getData();
      observer.observe(entry.target);
    }
  };

  //현재 대상 및 option을 props로 전달
  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: "20px",
    threshold: 0.5,
    onIntersect,
  });

  return (
    <>
      {issues.map((element: Issue, index: number) => {
        if (issues.length === index + 1) {
          console.log("ref 입니다.");
          return (
            <Atoms.InfiniteContainer ref={setTarget}>
              <Molecules.Issue
                key={index}
                issueNumber={element.issueNumber}
                comments={element.comments}
                issueTitle={element.issueTitle}
                user={element.user}
                createdDate={element.createdDate}
              />
            </Atoms.InfiniteContainer>
          );
        } else {
          console.log("일반 입니다.");
          return (
            <Molecules.Issue
              key={index}
              issueNumber={element.issueNumber}
              comments={element.comments}
              issueTitle={element.issueTitle}
              user={element.user}
              createdDate={element.createdDate}
            />
          );
        }
      })}
    </>
  );
};

export default Issues;
