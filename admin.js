function checkCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var loginForm = document.getElementById("card");
    var imgForm = document.getElementById("images");

    var error = document.getElementById('loginError');

    if(username == "taplesDH" && password == "7iqL2Pgu0") {
        loginForm.style.display = "none";
        imgForm.style.display = "block";
    }
    else {
        error.style.display = "block";
    }
}

const input = document.getElementById('img');
const names = document.getElementById('fileNames');
const drop  = document.getElementById('fileDrop');

input.addEventListener('change', () => {
    const files = Array.from(input.files);
    names.textContent = files.length
        ? files.map(f => f.name).join(', ')
        : '';
});

drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('dragover'); });
drop.addEventListener('dragleave', () => drop.classList.remove('dragover'));
drop.addEventListener('drop', e => {
    e.preventDefault();
    drop.classList.remove('dragover');
    input.files = e.dataTransfer.files;
    input.dispatchEvent(new Event('change'));
});

const selected = new Set();

document.querySelectorAll('.selectable').forEach(img => {
    img.addEventListener('click', () => {
        const name = img.dataset.name;

        if (selected.has(name)) {
            selected.delete(name);
            img.classList.remove('selected');
        } else {
            selected.add(name);
            img.classList.add('selected');
        }

        document.getElementById('selectedImages').value = [...selected].join(', ');
    });
});

function showImages() {
    const gallery = document.getElementById("gallery").value;

    document.querySelectorAll('.selectable').forEach(img => img.style.display = "none");

    if(gallery == "sedezneGarniture") {
        var imgs = document.getElementsByClassName("imgSedezne");

        for(var i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "block";
        }
    }
}