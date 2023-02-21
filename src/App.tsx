import React from 'react';
import s from './App.module.css';
import { useFetchTables } from "./hooks/use-fetch-tables";
import { useAppSelector } from "./store/store";
import { ModalWindow } from "./ui/components/ModalWindow/ModalWindow";
import { Table } from "./ui/components/Table/Table";
import { useModalHandler } from "./hooks/use-modal-handler";

function App() {
  useFetchTables()
  const columns = useAppSelector(store => store.table.columns)
  const isLoading = useAppSelector(store => store.table.isLoading)
  const {modal: inCreationModal, toggleModal: toggleInCreationModal} = useModalHandler()

  return (
    <div className={s.app}>

      {isLoading && <div className={s.preloader}>Loading...</div>}
      <Table closeModal={toggleInCreationModal}/>
      <ModalWindow
        modalMode={inCreationModal}
        closeModal={toggleInCreationModal}
        columns={columns}
      />
    </div>
  );
}

export default App;
