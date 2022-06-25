
function hideloading() {
  $(window).on('load', function () {
    $('.loader-wrapper').fadeOut("slow");
  })

}




async function getData() {
  let windowURL = window.location.href;
  let urlIndex =
    windowURL.split("/")[4].split(".html")[0].split("ChapterPage")[1] - 1;
  const slokcount = [
    47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
  ];




  const chapter = urlIndex + 1;
  res = [];


  for (i = 1; i <= slokcount[urlIndex]; i++) {
    url = "https://bhagavadgitaapi.in/slok/" + `${chapter}/${i}/`;
    console.log(url)
    await fetch(url).then(async (r) => res.push(await r.json()));

  }



  res.sort((p, n) => p.verse > n.verse);
  console.log(res);

  res.forEach((slok) => {
    console.log(slok.verse);
    let html = `

          <h2 class="sm:text-3xl font-medium  title-font mb-1 text-gray-900 my-3 " style= "text-align: center">
            VERSE ${slok.verse}

          </h2>



      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          
          <div class="flex flex-wrap -m-4">
            
              
            <div class="xl:w-1/2 md:w-1/2 p-4">
              <div class="border border-gray-200 p-10 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">SLOK</h2>
                <p class="leading-relaxed text-base text-gray-900"> ${slok.slok}</p>
              </div>
            </div>
            <div class="xl:w-2/2 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">TRANSLATION IN ENGLISH</h2>
                <p class="leading-relaxed text-base text-gray-900 "> ${slok.purohit.et}</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>








      `
      ;
    $(".verse").append(html);
    // hideloading()

  });

}

getData();

// <h2 class="sm:text-3xl font-medium  title-font mb-1 text-gray-900 my-3 " style= "text-align: center">
//         Verse ${slok.verse}
//         </h2>
//         <p class="container px-0 py-5 mx-auto items-center">
//         <strong class="text-gray-900"> SLOK :- </strong> ${slok.slok}
//         </p>

//         <p>
//         <strong class="text-gray-900"> TRANSLATION IN ENGLISH    :- </strong> ${slok.transliteration}
//         </p>`