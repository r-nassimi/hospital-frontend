import { useContext } from 'react';
import { Context } from 'src/index';
import deleteLogo from 'src/logos/Trash.svg';
import editLogo from 'src/logos/Edit.svg'
import 'src/components/Reception components/List/style.scss';

const List = ({ list, setList, reception, setReception }) => {
  const { store } = useContext(Context)
  const newReception = { ...reception };
  const build = (value, type) => {
    newReception[type] = value
  }

  return (
    <table className='list'>
      <thead>
        <tr className='list__header'>
          <th className='list__header__label'>Имя</th>
          <th className='list__header__label'>Доктор</th>
          <th className='list__header__label'>Дата</th>
          <th className='list__header__label'>Жалоба</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, index) =>
            <tr className='list__table' key={index}>
              <td className='list__table'>{item.name}</td>
              <td className='list__table'>{item.doctor}</td>
              <td className='list__table'>{item.date}</td>
              <td className='list__table'>{item.complaint}</td>
              <td className='list__table'>
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