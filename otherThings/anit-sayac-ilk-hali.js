document.addEventListener('DOMContentLoaded', () => {
    const anitlarContainer = document.getElementById('anitlar-container');
    const sayacDeger = document.getElementById('sayac-deger');
    let anitSayisi = 0;

    fetch('/public/data/anitlar.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((anit, index) => {
                if (anit.isim) {
                    const anitElement = createAnitCard(anit, index);
                    anitlarContainer.appendChild(anitElement);
                    anitSayisi++;
                } else if (anit.name) {
                    const anitElement = createAnitCard2(anit, index);
                    anitlarContainer.appendChild(anitElement);
                    anitSayisi++;
                }
            });
            sayacDeger.textContent = anitSayisi;
        })
        .catch(error => console.error('Veri çekme hatası:', error));


    // Anıt kartlarını oluşturma fonksiyonu (ilk json yapısı için kullanılacak)
    const createAnitCard = (anit, index) => {
        const anitElement = document.createElement('div');
        anitElement.classList.add('col-md-6', 'mb-4');

        //<img src="${anit.resim}" class="card-img-top" alt="${anit.isim}"> !Resim kısmını kaldırdık.

        anitElement.innerHTML = `
            <div class="card h-100">

            <alt="${anit.isim}">

            <div class="card-body">
                <h5 class="card-title">${anit.isim}</h5>
                <p class="card-text">${anit.aciklama}</p>
                <p class="card-text">
                <small class="text-muted" id="timer-${index}"></small>
                </p>
            </div>
            </div>
        `;
        // startTimer(anit.tarih, `timer-${index}`);
        return anitElement;
    };
    // Anıt kartlarını oluşturma fonksiyonu (ikinci json yapısı için kullanılacak)
    const createAnitCard2 = (anit, index) => {
        const anitElement = document.createElement('div');
        anitElement.classList.add('col-md-6', 'mb-4');
        anitElement.innerHTML = `
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${anit.name}</h5>
                <p class="card-text">
                Yaş: ${anit.age}<br>
                Şehir: ${anit.city}<br>
                Tarih: ${anit.date}
                </p>
                <p class="card-text">
                <small class="text-muted" id="timer-${index}"></small>
                </p>
            </div>
            </div>
        `;
        //startTimer(anit.date,`timer-${index}`);
        return anitElement;
    }



    // Zamanlayıcıyı başlatma fonksiyonu (Bu kısmı genel bir zamanlayıcı için daha sonra düzenlenecek)
    const startTimer = (targetDate, elementId) => {
        const target = new Date(targetDate).getTime();
        const timerElement = document.getElementById(elementId);

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                timerElement.textContent = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
            } else {
                timerElement.textContent = "Süre Doldu";
            }
        };
        updateTimer();
        setInterval(updateTimer, 1000);
    };
});
