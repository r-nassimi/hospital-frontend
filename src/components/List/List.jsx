import Moment from "react-moment";
import { tableHeader } from "src/constants";
import deleteLogo from 'src/logos/delete.svg';
import editLogo from 'src/logos/edit.svg'
import './style.scss';

const List = ({ list }) => {
  return (
    <div className='list'>
      <table className='list__table'>
        <tbody>
          {
            tableHeader.map(th =>
              <th
                className='list__table__header'
                key={`header-${th.id}`}
              >
                {th.label}
              </th>
            )
          }
          {
            list.map(({ _id, name, doctor, date, complaint }, index) =>
              <tr
                className='list__table__line'
                key={`list-${_id}`}
              >
                <td className='list__table__line__data'
                >
                  {name}
                </td>
                <td className='list__table__line__data'
                >
                  {doctor}
                </td>
                <td className='list__table__line__data'
                >
                  <Moment format='DD-MM-YYYY'>
                    {date}
                  </Moment>
                </td>
                <td className='list__table__line__data'
                >
                  {complaint}
                </td>
                <td className='list__table__line__data'>
                  <button
                    type='button'
                    className='list__table__button'
                  >
                    <img
                      src={deleteLogo}
                      alt=''>
                    </img>
                  </button>
                  <button
                    type='button'
                    className='list__table__button'
                  >
                    <img
                      src={editLogo}
                      alt=''>
                    </img>
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default List;