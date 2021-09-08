import React, { useState } from "react";

import Modal from "../Modal";
import { Form } from "./styles";

import api from "../../services/api";

function ModalEditUser({ isOpen, setIsOpen, data }) {
  const [nome, setNome] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  function handleSubmit(event) {
    event.preventDefault();

    api
      .put(`/users/${data.id}`, { name: nome, email: email })
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
      <h3 style={{ marginBottom: "2rem" }}>Usuário</h3>

      <Form onSubmit={handleSubmit} initialData={data}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Editar</button>
      </Form>
    </Modal>
  );
}

export default ModalEditUser;
