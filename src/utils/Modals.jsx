import Swal from 'sweetalert2';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

export const openAddCardModalWeb = (cards, setCards, handleAddCard) => {
  Swal.fire({
    title: '<span style="color: #3867D6">Nova Task</span>',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Título">
      <input id="swal-input2" class="swal2-input" placeholder="Descrição">
    `,
    showCloseButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Criar Task',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const title = document.getElementById('swal-input1').value;
      const description = document.getElementById('swal-input2').value;
      return { title, description };
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      const { title, description } = result.value;
      handleAddCard(title, description, cards, setCards);
    }
  });
};

export const handleAddCard = async (title, description, cards, setCards) => {
  if (!title.trim() && !description.trim()) return;

  try {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      window.location.href = '/';
      return;
    }
    const result = await axios.post(
      `${apiUrl}/home`,
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);
  } catch (error) {
    console.error('Erro ao validar o token:', error);
    window.location.href = '/';
  }

  const newCard = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    description,
  };

  setCards((prevCards) => [...prevCards, newCard]);
};

export const openAddCardModal = async (handleAddCard, cards, setCards) => {
  try {
    const result = await Swal.fire({
      title: '<span style="color: #3867D6">Nova Task</span>',
      html: `
          <input id="swal-input1" class="swal2-input" placeholder="Título">
          <input id="swal-input2" class="swal2-input" placeholder="Descrição">
        `,
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Criar Task',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const title = document.getElementById('swal-input1').value;
        const description = document.getElementById('swal-input2').value;
        return { title, description };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (result.isConfirmed) {
      const { title, description } = result.value;
      handleAddCard(title, description, cards, setCards);
    }
  } catch (error) {
    console.error('Erro ao abrir o modal de adicionar card:', error);
  }
};
