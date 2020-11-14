
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const params = (new URL(window.location)).searchParams;
    const idparam = params.get('id');

    // console.log(params);
    console.log(idparam);
    // params.forEach((param) => { console.log(param); });

    let myElement = document.createElement('p');
    myElement.innerHTML = `x = ${idparam}`;

    document.querySelector('main').appendChild(myElement);

  } catch (e) {
    console.log(e);
  }

});

