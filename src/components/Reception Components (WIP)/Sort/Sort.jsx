import { useState } from "react";

//
const Sort = ({ sort, setSort, setSortValue, setSortDirection }) => {
//   const sortReception = [...reception].sort((a,b) => {
//     if(!sort) {
//       return 0;
//     }
//     if(sortDirection === 'asc') {
//       if(sortValue) {
//         if(a[sortValue] === b[sortValue]) return 0;
//         return a[sortValue] > b[sortValue] ? 1 : -1  
//       }
//     } else {
//       if(a[sortValue] === b[sortValue]) return 0;
//       return a[sortValue] > b[sortValue] ? 1: -1
//     }
//   });


  return (
    <div className='sort-component'>
      <div className='sort-component__value'>
        <p>Сортировать по: </p>
        <select
          onChange={(e) => {
            setSort(e.target.value);
            setSortValue(e.target.value)
          }
          }>
          <option onClick={() => setSort(!sort)} />
          <option value={'name'}>Имени</option>
          <option value={'doctor'}>Доктору</option>
          <option value={'date'}>Дате</option>
          <option value={'complaint'}>Жалобе</option>
        </select>
      </div>
      {sort && (
        <div className="sort-component__direction">
          <p>Направление:</p>
          <select onClick={(e) => { setSortDirection(e.target.value) }}>
            <option value={'asc'}>По возрастанию</option>
            <option value={'des'}>По убыванию</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default Sort;