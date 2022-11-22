function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  console.log(tabMenu);
  console.log(tabContent);

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
    function activeTabLi(index) {
      tabMenu.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabMenu[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
        activeTabLi(index);
      });
    });
  }
}

initTabNav();

function mostra() {
  const escondido = document.querySelectorAll(".js-esconde");
  const botao = document.querySelector(".verMais");
  escondido.forEach((index) => {
    index.classList.toggle("escondido");
  });
  if (botao.textContent == "Ver mais") {
    botao.textContent = "Ver menos";
  } else {
    botao.textContent = "Ver mais";
  }
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const section = document.querySelectorAll(".js-scroll");

  if (section.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      section.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();

function typeWrite(elemento) {
  const textoArray = elemento.innerText.split("");
  elemento.innerText = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

const titulo = document.querySelector(".cont-home h1");

typeWrite(titulo);

/*
//TESTE PARA DEIXAR O BOTÃO 'SELECIONADO'

 const iHtml = document.getElementsByClassName('htmlIcon ativo')
 const htmlIcone = Array.from(iHtml)
 console.log(iHtml);

 
   const imgHtml = document.querySelector(".html img");
   imgHtml.setAttribute("src", "./img/css-3-re.png");
 
*/
