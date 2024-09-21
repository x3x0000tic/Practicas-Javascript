document.addEventListener('DOMContentLoaded', () => {
    const si = document.querySelector('.dnicalculator__form');
  
    si.addEventListener('submit', (eve) => {
      eve.preventDefault(); 
  
      const dniin = document.getElementById('dni');
      const letrain = document.getElementById('letra');
      
      const dninum = parseInt(dniin.value, 10);
      const letrap = letrain.value.toUpperCase(); 
      
      const l = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      
      if (isNaN(dninum) || dninum < 0 || dninum > 99999999) {
        alert('Número de DNI no válido. Debe ser un número entre 0 y 99999999.');
        return;
      }
  
      const res = dninum % 23;
      const letrac= l[res];
      
      if (letrap!== letrac) {
        alert(`La letra indicada no es correcta. La letra correcta es ${letrac}.`);
      } else {
        alert('Número y letra del DNI son correctos.');
      }
    });
  });