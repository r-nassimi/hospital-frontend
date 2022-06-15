import { useContext } from 'react';
import { Context } from 'src/index';
import { tableHeader } from "src/constants";
import deleteLogo from 'src/logos/Trash.svg';
import editLogo from 'src/logos/Edit.svg'
import 'src/components/List/style.scss';

const List = ({ list, setList, reception, setReception }) => {
  const { store } = useContext(Context);

  return (
    <table className='list'>
      <thead>
        <tr>
          {
            tableHeader.map(th =>
              <th className='list__header' key={`header-${th.id}`}>{th.label}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          list.map(({ _id, name, doctor, date, complaint }, index) =>
            <tr className='list__table__line' key={`list-${_id}`}>
              <td className='list__table__data'>{name}</td>
              <td className='list__table__data'>{doctor}</td>
              <td className='list__table__data'>{date}</td>
              <td className='list__table__data'>{complaint}</td>
              <td className='list__table__data'>
                <button type='button'><img src={editLogo} alt=''></img></button>
                <button type='button'><img src={deleteLogo} alt=''></img></button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default List;