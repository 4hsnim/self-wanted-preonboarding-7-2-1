export const formatDate = (date: string) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDay();

  const createdDate = `${year}년 ${month}월 ${day}일`;

  return createdDate;
};
