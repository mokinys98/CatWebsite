document.getElementById('contact-form')
  .addEventListener('submit', async e => {
    e.preventDefault();

    // Sukuriame objektą iš formos laukų
    const form = e.target;
    const data = {
      vardas: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const resp = await fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await resp.json();
      if (resp.ok) {
        document.getElementById('rezultatas')
                .textContent = `Sėkmingai įrašyta, ID: ${json.insertedId}`;
        form.reset();
      } else {
        document.getElementById('rezultatas')
                .textContent = `Klaida: ${json.error}`;
      }
    } catch (err) {
      document.getElementById('rezultatas')
              .textContent = `Tinklo klaida: ${err.message}`;
    }
  });
