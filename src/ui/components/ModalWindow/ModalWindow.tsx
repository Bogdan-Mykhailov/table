import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from "../../../store/store";
import { ColumnNameType, setSelected } from "../../../store/table-reducer";
import s from './ModalWindow.module.css'
import style from '../../CommonStyles/Button.module.css'
import { ModalEdited } from "./ModalEdited/ModalEdited";
import crossIcon from '../../../assets/xmark-solid.svg'

export type ColumnArgumentsType = {
  key: ColumnNameType;
  isSelected: boolean;
}

type ModalType = {
  closeModal: () => void;
  modalMode: boolean;
  columns: ColumnArgumentsType[];
}

export const ModalWindow = ({
                              columns,
                              closeModal,
                              modalMode
                            }: ModalType) => {
  const [localColumnsState, setLocalColumnsState] = useState(columns)
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    setLocalColumnsState(columns)
  }, [columns])

  const clickHandler = () => {
    closeModal();
    dispatch(setSelected(localColumnsState))
    setText('')
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const onColumnChangeHandler = (c: {
    key: ColumnNameType;
    isSelected: boolean;
  }) => {
    setLocalColumnsState((prevState) => {
      return prevState.map((column) => {
        if (column.key === c.key) {
          return {...column, isSelected: !column.isSelected}
        }
        return column;
      })
    })
  }

  return (
    <ModalEdited
      closeModal={closeModal}
      modalMode={modalMode}
    >
      <div className={s.modal}>
        <input
          className={s.input}
          placeholder='Search Available columns...'
          type="text"
          onChange={onChangeHandler}
          value={text}
        />
        <div className={s.columnsWrapper}>
          <div className={s.available}>
            <p className={s.title}>Available Columns</p>
            {
              localColumnsState.filter((f) => {
                return f.key.match(text)
              }).map(c => !c.isSelected && <div
                onClick={() => onColumnChangeHandler(c)}
                className={s.columnItems}
                key={c.key}
              >
                {c.key.toUpperCase()}
              </div>)
            }
          </div>

          <div className={s.selected}>
            <p className={s.title}>Selected Columns</p>
            {
              localColumnsState.map(c => c.isSelected && <div
                className={s.columnItems}
                key={c.key}
              >
                {c.key.toUpperCase()}
                <img
                  className={s.cross}
                  src={crossIcon}
                  onClick={() => onColumnChangeHandler(c)}
                />
              </div>)
            }
          </div>
        </div>

        <button
          className={`${s.button} ${style.button}`}
          onClick={clickHandler}
        >
          Apply
        </button>
      </div>
    </ModalEdited>
  );
};
