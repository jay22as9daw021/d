const webhookUrl = 'https://discord.com/api/webhooks/1413009868364976218/FRWyak8eE5D6BdqXv5x3_bMiKexf5I8x1y1qJuMPHRMcirw3qxCZseR5qXdatlQrCntp';

const sendNameEmail = (name, email) => {
  const msg = {
    content: 'New sign-up received 📥',
    embeds: [{
      color: 3447003, // Blue
      fields: [
        { name: 'Name', value: name },
        { name: 'Email', value: email }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(msg)
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form1').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    sendNameEmail(name, email);
    setTimeout(() => window.location.href = "Sign Up Code.html", 750);
  });
});const webhookUrl = 'https://discord.com/api/webhooks/1413009868364976218/FRWyak8eE5D6BdqXv5x3_bMiKexf5I8x1y1qJuMPHRMcirw3qxCZseR5qXdatlQrCntp';

const sendNameEmail = (name, email) => {
  const msg = {
    content: 'New sign-up received 📥',
    embeds: [{
      color: 3447003, // Blue
      fields: [
        { name: 'Name', value: name },
        { name: 'Email', value: email }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(msg)
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form1').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    sendNameEmail(name, email);
    setTimeout(() => window.location.href = "Sign Up Code.html", 750);
  });
});
