document.addEventListener('DOMContentLoaded', () => {
    const anitlarContainer = document.getElementById('anitlar-container');
    const sayacDeger = document.getElementById('sayac-deger');
    let anitSayisi = 0;

    fetch('/public/data/anitlar.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((anit, index) => {
                const anitElement = createAnitCard(anit, index);
                anitlarContainer.appendChild(anitElement);
                anitSayisi++;
            });
            sayacDeger.textContent = anitSayisi;
        })
        .catch(error => console.error('Veri çekme hatası:', error));

    // Anıt kartlarını oluşturma fonksiyonu
    const createAnitCard = (anit, index) => {
        const anitElement = document.createElement('div');
        anitElement.classList.add('col-md-2', 'mb-4'); // Sütun genişliği ayarlandı

        let anitHTML = `
                <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${anit.isim}</h5>
                    <p class="card-text">${anit.aciklama}</p>
                    <p class="card-text">Yaş: ${anit.yas}</p>
                    `;

        if (anit.tarih) {
            const formattedDate = formatDate(anit.tarih);
            anitHTML += `<p class="card-text">Tarih: ${formattedDate}</p>`;
        }
        anitHTML += `
                        </div>
                        </div>
                    `;
        anitElement.innerHTML = anitHTML;
        return anitElement;
    };
    // Tarih formatlama fonksiyonu
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
});