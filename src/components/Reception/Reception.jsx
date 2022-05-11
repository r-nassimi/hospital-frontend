import Reception from "src/components/Reception/Reception";

const Inputs = ({
  name, setName,
  doctor, setDoctor,
  date, setDate,
  appointment, setAppointmentt }) => {

  const addNewAppointment = () => {
    if (name && doctor && date && appointment) {
      setName('');
      setDoctor('');
      setDate('');
      setAppointmentt('');
      const updatedReception = [...Reception]
      setReception(updatedReception);
    } else {
      alert('Поля не могут быть пустыми!')
    }
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yy + '-' + mm + '-' + dd;

  return (
    <div className='inputs-block'>
      <div className='inputs-block__name-components'>
        <p>Имя: </p>
        <input
          className="input-block__name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
        />
      </div>
      <div className="inputs-block__doctor-components">
        <p>Врач: </p>
        <select
          className="input-block__doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}>
          {DoctorsList.map((doctors) => (
            <option>{doctors.name}</option>
          ))}
        </select>
      </div>
      <div className="inputs-block__date-components">
        <p>Дата: </p>
        <input
          className="input-block__date"
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type='date'
        />
      </div>
      <div className="inputs-block__appointment-components">
        <p>Жалоба: </p>
        <input
          className="input-block__appointment"
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
          type='text'
        />
      </div>
      <button
        className="input-block__add-button"
        onClick={() => addNewAppointment}
      />
    </div>
  )
}

export default Inputs