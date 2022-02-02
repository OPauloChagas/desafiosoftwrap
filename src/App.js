import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

function App() {

  const [nwNome, setNwNome] = useState("");
  const [nwIdade, setNwIdade] = useState(0);
  const [nwEstadoCivil, setNwEstadoCivil] = useState("");
  const [nwCPF, setNwCPF] = useState("");
  const [nwCidade, setNwCidade] = useState("");
  const [nwEstado, setNwEstado] = useState("");


  const [users, setUsers] = useState([]);
  const collecaoUsuariosRef = collection(db, "DadosUsuario");

  const createUser = async () => {
    await addDoc(collecaoUsuariosRef, { Nome: nwNome, Idade: nwIdade, EstadoCivil: nwEstadoCivil, CPF: nwCPF, Cidade: nwCidade, Estado: nwEstado });
  };

  // const updateUser = async (id, nome, idade, estadocivil, cpf, cidade, estado) => {
  //   const userDoc = doc(db, "DadosUsuario", id);
  //   const newFields = { Nome: nome, Idade: idade, EstadoCivil: estadocivil, CPF: cpf, Cidade: cidade, Estado: estado }
  //   await updateDoc(userDoc, newFields)

  // };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collecaoUsuariosRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [collecaoUsuariosRef]);

  return (
    <div className="App">

      <input
        placeholder="Nome"
        onChange={(event) => {
          setNwNome(event.target.value);
        }} />
      <input type="number"
        placeholder="Idade"
        onChange={(event) => {
          setNwIdade(event.target.value)
        }} />

      <input
        placeholder="Estado Civil"
        onChange={(event) => {
          setNwEstadoCivil(event.target.value)
        }} />

      <input
        placeholder="CPF"
        onChange={(event) => {
          setNwCPF(event.target.value)
        }} />

      <input
        placeholder="Cidade"
        onChange={(event) => {
          setNwCidade(event.target.value)
        }} />

      <input
        placeholder="Estado"
        onChange={(event) => {
          setNwEstado(event.target.value)
        }} />

      <button onClick={createUser}>Cadastrar Dados</button>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Idade
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado Civil
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CPF
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cidade
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>

                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.Nome}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            {/* <img className="h-10 w-10 rounded-full" src={user.image} alt="" /> */}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.Nome}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.Idade}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.EstadoCivil}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.CPF}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.Cidade}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.Estado}</div>
                      </td>

                      {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
