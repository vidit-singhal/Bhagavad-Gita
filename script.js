

var url = "https://bhagavadgitaapi.in/chapters/";
var link = new URL("https://bhagavadgitaapi.in/chapters/");

$.get(url, (response) => {
  console.log(response);
  for (i = 0; i < response.length; i++) {




    let html = `<div class="p-4 md:w-1/3 sm:mb-0 mb-6 ">
      <div class="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center h-full w-full"
          src="/images/chapters.jpg"
        />
      </div>
    
      <h2 class="text-xl font-medium title-font text-gray-900 mt-5 ">
      
        Chapter ${response[i].chapter_number}
        
      </h2>
      <p class="text-base leading-relaxed mt-2">
        ${response[i].summary.en}
      </p>
      <a href="./ChapterPage${response[i].chapter_number}.html"
        class="text-orange-500 inline-flex items-center mt-3"
        style="cursor: pointer"
        >Read More..
        <!-- <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> -->
      </a>
    </div>`;

    $(".posts").append(html);




  }
});


// https://bhagavadgitaapi.in/chapter/${response[i].chapter_number}