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

        const formattedDate = formatDate(anit.Date);


        let anitHTML = `
        <div class="card h-100">
            <div class="card-body">
            <h5 class="card-title">${anit.Name}</h5>
            <p class="card-text">Yaş: ${anit.Age}</p>
            <p class="card-text">Tarih: ${formattedDate}</p>
            <a href="${anit.Link}" class="btn btn-dark btn-sm btn-block" target="_blank">Detaylar</a>
            </div>
        </div>
        `;

        anitElement.innerHTML = anitHTML;
        return anitElement;
    };

    // Tarih formatlama fonksiyonu
    function formatDate(dateString) {
        const parts = dateString.split('.');
        if (parts.length === 3) {
            const day = parts[0];
            const month = parts[1];
            const year = parts[2];
            return `${day}.${month}.${year}`;
        }
        return dateString; // Eğer format uygun değilse olduğu gibi döndür
    }
});