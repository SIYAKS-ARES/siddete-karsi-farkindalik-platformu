document.addEventListener('DOMContentLoaded', () => {
    const anitlarContainer = document.getElementById('anitlar-container');

    const anitlar = [
    {
        baslik: 'Şiddete Karşı Direniş Anıtı',
        aciklama: 'Şiddetin her türlüsüne karşı duranlara adanmıştır.',
        hedefTarih: '2024-12-31T23:59:59',
        foto: 'anit1.jpg'
      },
      {
        baslik: 'Kadın Cinayetlerine Son Anıtı',
        aciklama: 'Kadın cinayetlerinde kaybettiğimiz tüm kadınlar için.',
        hedefTarih: '2025-05-15T00:00:00',
        foto: 'anit2.jpg'
      }
    ];
  
    anitlar.forEach((anit, index) => {
      const anitElement = document.createElement('div');
      anitElement.classList.add('col-md-6', 'mb-4');
      anitElement.innerHTML = `
        <div class="card">
          <img src="${anit.foto}" class="card-img-top" alt="${anit.baslik}">
          <div class="card-body">
            <h5 class="card-title">${anit.baslik}</h5>
            <p class="card-text">${anit.aciklama}</p>
            <p class="card-text">
            <small class="text-muted" id="timer-${index}">
           </small></p>
           </div>
        </div>
      `;
  
      anitlarContainer.appendChild(anitElement);
      startTimer(anit.hedefTarih,`timer-${index}`);
    });
    function startTimer(targetDate,elementId){
      const target = new Date(targetDate).getTime();
      const timerElement = document.getElementById(elementId);
      
      function updateTimer(){
        const now = new Date().getTime();
        const difference = target - now;
        if(difference > 0){
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            timerElement.textContent = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
           
        }else{
          timerElement.textContent="Süre Doldu";
        }
  
      }
       updateTimer();
      setInterval(updateTimer, 1000);
    }
  });