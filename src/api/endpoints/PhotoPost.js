import React from 'react';

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2NjA5NDg0OTUsIm5iZiI6MTY2MDk0ODQ5NSwiZXhwIjoxNjYxMDM0ODk1LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI5NTI4In19fQ.71Mfd0BVJWMfIKNjGgnXVZymy7PIUELU5ePcqiM827c

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    fetch(`https://dogsapi.origamid.dev/json/api/photo`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },

      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  function handleClick() {}

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />

      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />

      <input
        type="text"
        placeholder="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />

      <input
        type="text"
        placeholder="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />

      <input type="file" onChange={({ target }) => setImg(target.files[0])} />

      <button onClick={handleClick}>Enviar</button>
    </form>
  );
};

export default PhotoPost;
