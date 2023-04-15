const addElem = () => {
  const createInput = () => {
    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    const paragraph = document.createElement('p');

    wrapper.classList.add('wrapper');
    input.classList.add('input');
    paragraph.classList.add('maintext');

    wrapper.append(input, paragraph);

    document.body.append(wrapper);
    console.log(1);
  }

  createInput();

  document.addEventListener('change', (e) => {
    const inputData = document.querySelector('.input').value;
    setTimeout(() => {
      console.log(inputData);
      document.querySelector('.maintext').textContent = inputData;
      
    }, 300, inputData);
  })
}

addElem();