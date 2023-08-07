import * as React from 'react';
import  s from "../../components/Users/User/User.module.scss";
import {UsersComponentType} from "../../types/types";

const Pagination:React.FC<UsersComponentType> = (props) => { // Paginator:React.FC<PropsType> это мы указываем тип нашей компоненты и указываем тип пропсов

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