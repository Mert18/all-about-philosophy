
function myFunction() {
    var date1 = new Date(document.querySelector('#dt').value);
    var date2 = new Date();
    var difference = date2 - date1;
    var days = Math.trunc(difference / (24 * 3600 * 1000));
    var percentage = (days / 27375) * 100;
    var per = parseFloat(percentage).toFixed(2);
    document.querySelector('.loader').classList.remove('hidden');
    if (days < 0) {
        alert('Please enter a valid birth day.');
    } else {
        document.querySelector('#card1id').innerHTML = `${per}%`
        document.querySelector('#card2id').innerHTML = `${days} Days`

        setTimeout(() => {
            document.querySelectorAll('.card').forEach(function (element) {
                element.style.display = 'block';
            });
            document.querySelector('.loader').classList.add('hidden');
        }, 3000);


    }
}

//Pagination

