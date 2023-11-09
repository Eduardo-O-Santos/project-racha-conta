import { useState } from 'react';
import './App.css';

function App() {
  const [formAddToggle, setFormAddToggle] = useState(false);

  function handleClickAddToggle() {
    setFormAddToggle((prevState) => !prevState)
  }

  return (
    <>
      <header className="header">
        <img
          src="src/assets/imgs/logo-racha-conta.png"
          alt="Logo Racha conta"
        />
      </header>
      <main className="app">
        <section className="sidebar">
          <ul>
            <li>
              <img
                src="src/assets/imgs/friends/henrique-48.jpg"
                alt="Henrique"
              />
              <h3>Henrique</h3>
              <p className="red-debit">Você deve 7 reais</p>
              <button className="button">Selecionar</button>
            </li>
            <li>
              <img src="src/assets/imgs/friends/renata-48.jpg" alt="Renata" />
              <h3>Renata</h3>
              <p>Te deve 20 reais</p>
              <button className="button">Selecionar</button>
            </li>
            <li className="selected">
              <img src="src/assets/imgs/friends/antonio-48.jpg" alt="Antônio" />
              <h3>Antônio</h3>
              <p>Estão quites</p>
              <button className="button button-close">Fechar</button>
            </li>
          </ul>
          {formAddToggle && (
            <form className="form-add-friend">
              <label htmlFor="nome">
                🧍Nome
                <input type="text" name="nome" id="nome" />
              </label>
              <label htmlFor="foto">
                📷 Foto
                <input type="text" name="foto" id="foto" />
              </label>
              <button className="button">Adicionar</button>
            </form>
          )}
          <button className={`button ${formAddToggle ? 'button-close' : ''}`} onClick={handleClickAddToggle}>
            {formAddToggle ? 'Fechar' : 'Adicionar amigo(a)'}
          </button>
        </section>
        <form className="form-split-bill">
          <h2>Rache a conta com Antônio</h2>
          <label htmlFor="">
            💰 Valor total
            <input type="text" />
          </label>
          <label htmlFor="">
            🤸‍♂️ Seus gastos
            <input type="text" />
          </label>
          <label htmlFor="">
            🤑 Quem vai pagar
            <select name="" id="">
              <option value="">Você</option>
              <option value="">Antônio</option>
            </select>
          </label>
          <button className="button">Rachar conta</button>
        </form>
      </main>
    </>
  );
}

export { App };
