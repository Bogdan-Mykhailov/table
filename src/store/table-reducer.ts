import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ColumnsType = {
    key: ColumnNameType;
    isSelected: boolean;
}

type InitialSateType = {
  columns: ColumnsType[];
  isLoading: boolean;
  tables: IUser[] | null;
}

export type ColumnNameType = keyof IUser;

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

const initialState: InitialSateType = {tables: null, isLoading: false, columns: []};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    saveTables: (state, {payload}: PayloadAction<IUser[]>) => {
      const userKeys = Object.keys(payload[0]) as ColumnNameType[];
      const columnKeys = userKeys.map((key) => {
        if (key === 'name' || key === 'username' || key === 'phone' || key === 'company') {
          return {key, isSelected: true}
        }
        return {key, isSelected: false}
      });
      return {...state, tables: payload, columns: columnKeys}
    },
    setLoading: (state, {payload}: PayloadAction<boolean>) => {

      return {...state, isLoading: payload}
    },
    setSelected: (state, {payload}: PayloadAction<{key: ColumnNameType, isSelected: boolean}[]>) => {
      return {...state, columns: payload}
    }
  },
})

export const tableReducer = tableSlice.reducer
export const {saveTables, setLoading, setSelected} = tableSlice.actions
