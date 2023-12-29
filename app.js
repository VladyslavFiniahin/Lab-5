const Imgs = {
    'A': "./A.png",
    'B': "./B.png",
    'C': "./C.png",
    'D': "./D.png",
    'E': "./E.png",
    'F': "./F.png",
    'G': "./G.png",
    'H': "./H.png",
    'I': "./I.png",
    'J': "./J.png",
    'K': "./K.png",
    'L': "./L.png",
    'M': "./M.png",
    'N': "./N.png",
    'O': "./O.png",
    'P': "./P.png",
    'Q': "./Q.png",
    'R': "./R.png",
    'S': "./S.png",
    'T': "./T.png",
    'U': "./U.png",
    'V': "./V.png",
    'W': "./W.png",
    'X': "./X.png",
    'Y': "./Y.png",
    'Z': "./Z.png",
    'a': "./small_a.png",
    'b': "./small_b.png",
    'c': "./small_c.png",
    'd': "./small_d.png",
    'e': "./small_e.png",
    'f': "./small_f.png",
    'g': "./small_g.png",
    'h': "./small_h.png",
    'i': "./small_i.png",
    'j': "./small_j.png",
    'k': "./small_k.png",
    'l': "./small_l.png",
    'm': "./small_m.png",
    'n': "./small_n.png",
    'o': "./small_o.png",
    'p': "./small_p.png",
    'q': "./small_q.png",
    'r': "./small_r.png",
    's': "./small_s.png",
    't': "./small_t.png",
    'u': "./small_u.png",
    'v': "./small_v.png",
    'w': "./small_w.png",
    'x': "./small_x.png",
    'y': "./small_y.png",
    'z': "./small_z.png",
  };
  
  function convertText() {
    const textInput = document.getElementById('source-text').value;
    const resultText = document.getElementById('result-text');
    const spaceImage = './space.png';
    
    let outputHTML = '';
  
    for (let i = 0; i < textInput.length; i++) {
      let char = textInput.charAt(i);
      if (char === ' ') {
        outputHTML += `<img src="${spaceImage}">`;
      } else {
        const imgSrc = Imgs[char];
        if (imgSrc) {
          outputHTML += `<img src="${imgSrc}">`;
        }
      }
    }
  
    resultText.innerHTML = outputHTML;
  }
  
  const convertButton = document.getElementById('go');
  convertButton.addEventListener('click', convertText);