import { useState, useCallback } from "react";
import { Button } from "antd";
import { collection, addDoc } from "firebase/firestore";

import Modal from "../Modal";

import { db } from "../../firebase-config";

const collecaoUsuariosRef = collection(db, "DadosUsuario");

const Header = () => {
  const [modalState, setModalState] = useState(false);

  const handleCancel = useCallback(() => {
    setModalState(false);
  }, [modalState]);

  const handleOk = async (inputData) => {
    // Create an user
    await addDoc(collecaoUsuariosRef, {
      Nome: inputData?.name,
      Idade: inputData?.age,
      EstadoCivil: inputData?.civel_state,
      CPF: inputData?.cpf,
      Cidade: inputData?.city,
      Estado: inputData?.country,
    });

    setModalState(false);
  };

  const modalPorps = {
    handleCancel,
    isVisible: modalState,
    handleOk,
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          setModalState(!modalState);
        }}
      >
        Cadastrar Dados
      </Button>

      <Modal {...modalPorps} />
    </>
  );
};

export default Header;
