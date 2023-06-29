import React from 'react';
import s from "../../components/Users/User/User.module.scss";

const Pagination = (props) => {

  let pageCurrent = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= 40; i++) {
    pages.push(i);
  }


  let page = pages.map(page => <span className={props.current === page && s.active} onClick={() => {
    props.currentPageData(page)
  }}>{page}</span>);

  return (
    <div>
      {page}
    </div>
  );
};

export default Pagination;