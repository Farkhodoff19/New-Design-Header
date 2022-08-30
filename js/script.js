const btn = document.querySelector('#btn'),
        light = document.querySelector('.light');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            light.classList.toggle('on')
        })
