var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /* Do things after DOM has fully loaded */
  const section = document.querySelectorAll('.card--container');
  const container = document.querySelector('#about');
  const { length, 0: first } = cards;
  const rgx = /\.(com)/i, numSections = section.length;
  let iter = -1;


  Object.keys(cards).forEach((cat, index) => {
    iter += 1;
    for(let k of Object.keys(cards[cat])) {
      const ver = cards[cat];
      // console.log(ver[k]);     
      // console.log(k); 
      // console.log(index);
      const lala = ver[k].filter((arr, index) => index < 12).map(dothis).join('');
      section[index].innerHTML = lala;
    }
  })

  // for (let key in cards) {
  // }

  //console.log(numSections);
  // console.log(first);
  // for(let key of Object.keys(first)) {
  //  	console.log(key);
  //   console.log(first[key]);
  //  	const ins = first[key].filter((arr, index) => index < 12).map(dothis).join('');
  //   //const ins = first[key].filter((arr, index) => rgx.test(arr.url) === true).map(dothis).join('');
  // 	section[0].innerHTML = ins;
  // }
  
  function dothis(elem) {
  	const { 
      url, 
      title, 
    } = elem;
  	
    //const styleStr = `transform: scale(${scale}) translate(${xpos}px, ${ypos}px);`; // console.log(styleStr);
    //console.log(elem.url);
  	
      const box = `<div class="card--utils">        
        <h3><a href="${url}" target="_blank">${title}</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>`;

    return box;
  }

  // returns undefined
  //const { lead_performer: lead } = perfdata; console.log(lead);
  
  //const {feature_story: {theme}, guests } = perfdata[1];
  //const { length, 0: first, [length - 1]: last } = perfdata[1].guests;
  // Wes Bos alternative - const {theme} = perfdate[0].feature_story;

});
