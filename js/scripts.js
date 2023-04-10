const hexagons = document.querySelectorAll('.hexagon');

// add span to each hexagon in the start

hexagons.forEach(hexagon => {
  const immidiateChild = hexagon.firstElementChild;



  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg',);
  svg.setAttribute('viewBox', '0 0 300 300');
  svg.innerHTML = `
  <g>
    <path d="M280 225 150 300 20 225V75L150 0 280 75V225Z" />
    </g>
    `;

  // check if immidiate child is not null
  if (immidiateChild && immidiateChild.tagName === 'A') {
    immidiateChild.insertAdjacentElement('afterbegin', svg);
  } else {
    hexagon.insertAdjacentElement('afterbegin', svg);
  }
});