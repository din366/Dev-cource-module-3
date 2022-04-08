const typograph = () => {
  const form = document.querySelector('.search_form');
  const resultSpan = document.querySelector('.result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = form.querySelector('.search_form_input').value;
    let resultText = null;

    const regExpPretext = /(?<!\S)(?:в\s|без\s|до\s|во\s|для\s|за\s|через\s|над\s|по\s|из\s|у\s|около\s|под\s|о\s|про\s|на\s|к\s|перед\s|при\s|с\s|между\s)/gi;

    resultText = text.replace(regExpPretext, str => { // replace pretext in &nbsp;
      const strArr = str.split('');
      strArr[strArr.length - 1] = '&nbsp;';
      return strArr.join('');
    });

    resultText = resultText.replace(/(#|№)/g, '&#8470;'); // replace #|№ in &#8470;

    resultText = resultText.replace(/©/g, '&#169;'); // replace © in &#169;

    resultText = resultText.replace(/".+"/g, str => { // replace quotes
      const strArr = str.split('');
      strArr[strArr.length - 1] = '&raquo;';
      strArr[0] = '&laquo;';
      return strArr.join('');
    });
    
    resultSpan.textContent = resultText;
  })
};

typograph();


