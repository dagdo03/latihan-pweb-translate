const srcText = document.getElementById('srctext');
const destText = document.getElementById('desttext');
const srcLang = document.getElementById('srclang');
const destLang = document.getElementById('destlang');
const btn = document.getElementById('submitinput')


const displayResult = async () => {
    textSrc = srcText.value;
    textDest = destText.value;
    console.log(textSrc);
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '76f08d6af4mshf25b541d9842175p120d89jsn50099816dfa1',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: 'auto',
            target_language: 'id',
            text: `${textSrc}`
        })
    };
    fetch(url, options)
        .then(response => response.text())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
btn.addEventListener('click', displayResult);

const showResult = async ()=>{
    let output = '';
    
}


const getLanguage = async () => {
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '76f08d6af4mshf25b541d9842175p120d89jsn50099816dfa1',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

