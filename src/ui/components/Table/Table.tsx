import React, { useEffect } from 'react';
import { useFetchTables } from "../../../hooks/use-fetch-tables";
import { useAppSelector } from "../../../store/store";
import { useModifyTable } from "../../../hooks/use-modify-table";
import s from './Table.module.css'
import style from "../../CommonStyles/Button.module.css";

interface ITAble {
  closeModal: () => void;
}

export const Table = ({closeModal}: ITAble) => {
  const tables = useAppSelector(store => store.table.tables)
  const columns = useAppSelector(store => store.table.columns)
  const {modifiedUserData} = useModifyTable(tables, columns)
  useFetchTables()

  useEffect(() => {

  }, [tables])

  const openModalHandler = () => {
    closeModal();
  }

  return (
    <div className={s.tableWrapper}>
      <button className={`${s.button} ${style.button}`} onClick={openModalHandler}>Select Columns</button>


        <table className={s.table}>
          <thead className={s.head}>
          <tr>
            {columns.map(c => c.isSelected && <th key={c.key}>{c.key.toUpperCase()}</th>)}
          </tr>
          </thead>

          <tbody className={s.body}>
          {
            modifiedUserData && modifiedUserData.map((user) => {
              return user && <tr key={user.id}>{
                columns && columns.map(c => {
                  return c.isSelected && <td key={c.key}>{user && user[c.key]}</td>
                })
              }
              </tr>
            })
          }
          </tbody>
        </table>

    </div>
  );
};
