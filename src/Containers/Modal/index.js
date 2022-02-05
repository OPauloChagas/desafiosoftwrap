import { Modal, Input, Row, Col } from "antd";
import { useState } from "react";

const ModalContainer = ({
  isVisible,
  handleCancel,
  handleOk,
  userData = {},
}) => {
  const [inputData, setInputData] = useState(userData);

  const handleChange = (key, { target: { value } }) => {
    setInputData({
      ...inputData,
      [key]: value,
    });
  };

  return (
    <Modal
      title={inputData ? "Atualizar " : "New User"}
      visible={isVisible}
      onText="Save"
      onCancel={() => {
        setInputData({});

        handleCancel();
      }}
      onOk={() => {
        setInputData({});

        handleOk(inputData);
      }}
    >
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Input
            value={inputData?.Nome ?? ""}
            placeholder="Nome"
            onChange={(event) => handleChange("Nome", event)}
          />
        </Col>
        <Col span={12}>
          <Input
            value={inputData?.Idade ?? ""}
            placeholder="Idade"
            onChange={(event) => handleChange("Idade", event)}
          />
        </Col>
        <Col span={12}>
          <Input
            value={inputData?.EstadoCivil ?? ""}
            placeholder="Estado Civil"
            onChange={(event) => handleChange("EstadoCivil", event)}
          />
        </Col>
        <Col span={12}>
          <Input
            value={inputData?.CPF ?? ""}
            placeholder="CPF"
            onChange={(event) => handleChange("CPF", event)}
          />
        </Col>

        <Col span={12}>
          <Input
            value={inputData?.Cidade ?? ""}
            placeholder="Cidade"
            onChange={(event) => handleChange("Cidade", event)}
          />
        </Col>

        <Col span={12}>
          <Input
            value={inputData?.Estado ?? ""}
            placeholder="Estado"
            onChange={(event) => handleChange("Estado", event)}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalContainer;
