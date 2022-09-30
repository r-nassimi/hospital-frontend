import { useContext } from "react";
import { Context } from "src";
import { doctorsList } from "src/constants";
import "./style.scss";

const Creator = ({ list, setList, reception, setReception }) => {
  const { name, doctor, date, complaint } = reception;
  const { store } = useContext(Context);

  const createAppointment = async () => {
    const response = await store.createAppointment(name, doctor, date, complaint);
    const updatedList = [...list, response.data];
    setList(updatedList);
    setReception({
      name: "",
      doctor: "",
      date: "",
      complaint: ""
    });
  };

  const checker = !reception.name || !reception.doctor || !reception.date || !reception.complaint;

  const handleChange = (value, type) => {
    setReception({ ...reception, [type]: value });
  };

  return (
    <div className="creator">
      <div className="creator__block">
        <label for="name">
          Имя
        </label>
        <input
          className="creator__block__input"
          type="text"
          value={name}
          id="name"
          onChange={(e) => handleChange(e.target.value, "name")}
        />
      </div>
      <div className="creator__block">
        <label for="doctor">
          Доктор
        </label>
        <select
          className="creator__block__input"
          type="text"
          value={doctor}
          id="doctor"
          onChange={(e) => handleChange(e.target.value, "doctor")}
        >
          <option></option>
          {
            doctorsList.map((doctor, index) =>
              <option value={doctor} key={`doctor-${index}`}>
                {doctor}
              </option>
            )
          }
        </select>
      </div>
      <div className="creator__block">
        <label for="date">
          Дата
        </label>
        <input
          className="creator__block__input"
          type="date"
          value={date}
          id="date"
          onChange={(e) => handleChange(e.target.value, "date")}
        />
      </div>
      <div className="creator__block">
        <label for="complaint">
          Жалоба
        </label>
        <input
          className="creator__block__input"
          type="text"
          value={complaint}
          id="complaint"
          onChange={(e) => handleChange(e.target.value, "complaint")}
        />
      </div>
      <div className="creator__block">
        <button
          className="creator__block__add"
          type="button"
          disabled={checker}
          onClick={createAppointment}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default Creator;