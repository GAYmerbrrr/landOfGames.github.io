let pnh = document.getElementById('pnh')
        let body = document.body;

        // mengatur variable untuk menyimpan posisi mouse saat ditekan
        let offsetX, offsetY;

        // menambahkan event listener untuk event 'mousedown' pada tombol
        pnh.addEventListener('mousedown', function(event) {
            // mengambil posisi mouse saat tombol di tekan
            offsetX = event.clientX - pnh.getBoundingClientRect().left;
            offsetY = event.clientY - pnh.getBoundingClientRect().top;

            // menambah event listener untuk event 'mousemove' pada dokumen
            document.addEventListener('mousemove', onMouseMove);
        });

        // menambah event listener untuk event 'mouseup' pada dokumen
        document.addEventListener('mouseup', function() {
            // menghapus event listener 'mousemove' saat tombol di lepas
            document.removeEventListener('mousemove', onMouseMove);
        });

        // fungsi untuk mengatur posisi tombol saat mouse di gerakan
        function onMouseMove(event) {
            // mengatur posisi tombol berdasarkan posisi mouse saat di gerakan
            pnh.style.left = (event.clientX - offsetX) + 'px';
            pnh.style.top = (event.clientY - offsetY) + 'px';
        }

        pnh.addEventListener('click', function(){
            if(pnh.textContent == 'DARK MODE'){
                pnh.textContent = 'BRIGHT MODE'
                pnh.style.backgroundColor = 'white';
                pnh.style.color = 'black';
            }else{
                pnh.style.backgroundColor = 'black';
                pnh.style.color = 'white';
                pnh.textContent = 'DARK MODE'
            }
        })

        pnh.addEventListener('click', () => {
            body.classList.toggle('dark')
        })