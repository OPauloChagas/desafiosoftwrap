import { useState, useEffect, useCallback } from "react";
import { Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import ModalContainer from "../Modal";

import { db } from "../../firebase-config";

import "antd/dist/antd.css";
import "./style.css";

const collecaoUsuariosRef = collection(db, "DadosUsuario");

const App = () => {
  const [users, setUsers] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [selectUserForUpdate, setSelectUserForUpdate] = useState(false);

  const getUsers = useCallback(async () => {
    const data = await getDocs(collecaoUsuariosRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const handleCancel = useCallback(() => {
    setModalState(false);
  }, [modalState]);

  const handleOk = async ({ id, ...restProps }) => {
    setModalState(false);

    const userDoc = doc(db, "DadosUsuario", id);

    await updateDoc(userDoc, { ...restProps, id });

    getUsers();
  };

  const columns = [
    {
      key: "1",
      title: "Id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Nome",
      dataIndex: "Nome",
    },
    {
      key: "3",
      title: "Idade",
      dataIndex: "Idade",
    },
    {
      key: "4",
      title: "Estado Civil",
      dataIndex: "EstadoCivil",
    },
    {
      key: "5",
      title: "CPF",
      dataIndex: "CPF",
    },
    {
      key: "6",
      title: "Cidade",
      dataIndex: "Cidade",
    },
    {
      key: "7",
      title: "Estado",
      dataIndex: "Estado",
    },
    {
      key: "8",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                setSelectUserForUpdate(record);

                setModalState(!modalState);
              }}
            />

            <DeleteOutlined
              onClick={() => {
                Modal.confirm({
                  title: "Gostaria realmente de excluir este registro?",
                  okText: "Yes",
                  okType: "danger",
                  onOk: () => {
                    // remove of state
                    setUsers((pre) =>
                      pre.filter((users) => users.id !== record.id)
                    );

                    // delete from database
                    deleteDoc(doc(db, "DadosUsuario", record.id));
                  },
                });
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="App">
      <Table columns={columns} dataSource={users}></Table>

      {selectUserForUpdate && (
        <ModalContainer
          isVisible={modalState}
          handleCancel={handleCancel}
          handleOk={handleOk}
          userData={selectUserForUpdate}
        />
      )}
    </div>
  );
};

export default App;
