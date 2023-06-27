import React from 'react';
import s from "../../components/Users/User/User.module.css";

const Pagination = (data) => {

  let pageCurrent = Math.ceil(data.totalUsersCount / data.pageSize);
  let pages = [];

  for (let i = 1; i <= 50; i++) { // вместо 50 используем pageCurrent (все пользователи с axios запроса) их там много по этому установил 50
    pages.push(i);
  }


  let page = pages.map(page => <span className={data.data.current === page && s.active} onClick={() => {
    data.currentPageData(page)
  }}>{page}</span>);

  return (
    <div>
      {page}
    </div>
  );
};

export default Pagination;