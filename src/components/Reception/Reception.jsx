import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "src";
import Creator from "src/components/Creator/Creator";
import List from "src/components/List/List";
import Sort from "src/components/Sort/Sort";
import Filter from "src/components/Filter/Filter";
import { sort } from "src/helper/helper-sorting"
import { fields, direction } from "src/constants";
import headerLogo from "src/logos/mainLogo.svg";
import filterOpen from "src/logos/plus.svg";
import "./style.scss";

const Reception = () => {
  const [reception, setReception] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: ""
  });
  const [list, setList] = useState([]);
  const [sortField, setSortField] = useState(fields[0].value);
  const [sortDirection, setSortDirection] = useState(direction[0].value);
  const [openFilter, setOpenFilter] = useState(false);
  const navigate = useNavigate();
  const { store } = useContext(Context);

  useEffect(() => {
    getAll();
  }, [sortField, sortDirection]);

  const getAll = async () => {
    const response = await store.getList();
    setList(sort(response.data, sortDirection, sortField));
  };

  const hideFilter = async () => {
    const response = await store.getList()
    setList(response.data);
    setOpenFilter(false)
  }

  const logout = async () => {
    await store.logout();
    navigate("/login");
    return;
  };

  return (
    <div className="reception">
      <div className="reception__header">
        <img className="reception__header__logo" src={headerLogo} alt="" />
        <div className="reception__header__title">Приемы</div>
        <div className="reception__header__button">
          <button
            className="reception__header__button__logout"
            onClick={logout}
          >
            Выход
          </button>
        </div>
      </div>
      <div className="reception__append">
        <Creator
          list={list}
          setList={setList}
          reception={reception}
          setReception={setReception}
        />
      </div>
      <div className="reception__sort">
        <Sort
          setSortDirection={setSortDirection}
          setSortField={setSortField}
          setOpenFilter={setOpenFilter}
        />
      </div>
      <div className="reception__button">
        <button type="button" onClick={() => setOpenFilter(true)}
        >
          <img
            src={filterOpen}
          />
        </button>
      </div>
      {openFilter && <Filter
        list={list}
        setList={setList}
        hideFilter={hideFilter}
      />}
      <div className="reception__table">
        <List
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
};

export default Reception;