import { ColumnNameType, IUser } from "../store/table-reducer";
import { useEffect, useState } from "react";
import { ColumnArgumentsType } from "../ui/components/ModalWindow/ModalWindow";

export const useModifyTable = (
  defaultUserData: IUser[] | null,
  columns: ColumnArgumentsType[]) => {
  const [modifiedUserData, setModifiedUserData] = useState<Partial<IUser[]>>()

  useEffect(() => {
    if (defaultUserData && columns.length) {
      const updatedUsers = defaultUserData.map(user => {
        let newUser = {} as IUser;
        columns.map(column => {
          if (column.isSelected) {
            newUser = {...newUser, [column.key]: user[column.key]}
          }
        })
        return newUser;
      })
      setModifiedUserData(updatedUsers)
    }
  }, [columns])

  return {modifiedUserData}
}
