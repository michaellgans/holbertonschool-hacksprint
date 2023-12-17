document.addEventListener('DOMContentLoaded', function () {
  const snowfallContainer = document.getElementById('snowfall');

  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }

  function createSnowflake () {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 2 + 1 + 's';
    snowflake.style.animationDelay = Math.random() + 's';
    snowfallContainer.appendChild(snowflake);

    snowflake.addEventListener('animationiteration', function () {
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 2 + 1 + 's';
      snowflake.style.animationDelay = Math.random() + 's';
    });
  }
});
