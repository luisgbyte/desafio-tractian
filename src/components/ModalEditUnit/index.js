import React, { useState } from "react";

import Modal from "../Modal";
import { Form } from "./styles";

import api from "../../services/api";

function ModalEditUnit({ isOpen, setIsOpen, data }) {
  const [nome, setNome] = useState(data.name);

  function handleSubmit(event) {
    event.preventDefault();

    api
      .put(`/units/${data.id}`, { name: nome })
      .then(function (response) {
        setIsOpen(!isOpen);
        alert("Edição concluída com sucesso!");
      })
      .catch(function (error) {
        alert("Ops! Ocorreu um erro, tente novamente!");
      });
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h3 style={{ marginBottom: "2rem" }}>Unidade</h3>

      <Form onSubmit={handleSubmit} initialData={data}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <button type="submit">Editar</button>
      </Form>
    </Modal>
  );
}

export default ModalEditUnit;
