import { ColumnNameType, IUser } from "../store/table-reducer";
import { useEffect, useState } from "react";

export const useModifyTable = (
  defaultUserData: IUser[] | null,
  columns: {
    key: ColumnNameType;
    isSelected: boolean;
  }[]) => {
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
