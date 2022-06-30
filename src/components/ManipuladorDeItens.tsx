import { useState } from "react";

const ManipuladorDeItens = () => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  return (
    <div>
      <select value={value} onChange={event => setValue(event.target.value)}>
        <option value="">Selecione uma opção</option>
        {items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <form
        onSubmit={event => {
          event.preventDefault();
          setItems(
            [...items, value].filter((item, index, self) => self.indexOf(item) === index)
          );
        }}
      >
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <div>
          <button type="submit">Adicionar</button>
          <button type="button" onClick={() => setItems(items.filter(item => item !== value))}>Remover</button>
          <button type="button" onClick={() => setValue("")}>Limpar caixa</button>
        </div>
      </form >

      <p>{value ? items.filter(item => item === value) : "Selectione uma opção"}</p>
    </div >
  );
}

export default ManipuladorDeItens;
