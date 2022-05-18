<div align="center">
     <img alt="Components Preview (Chromatic)" src="https://github.com/ElektronPlus/school-website/actions/workflows/chromatic.yml/badge.svg?branch=main"/>
 </div>
<h1 align="center">✨ Strona Szkolna</h1>
  <p align="center">
    <a href="https://github.com/ElektronPlus/school-website/projects/1">🎯 Zadania</a> ·
  <a href="https://github.com/ElektronPlus/school-website/projects/2">💡 Pomysły</a>
</p>

### Struktura
- **`📁 apps`**
  - **`📁 backend`**: headless CMS (API) używający [Strapi](https://strapi.com/), które umożliwia dowolne typy contentu, np. artykuły, zastępstwa, nawigacje
  - **`📁 frontend`**: strona zbudowana za pomocą **Reactowego** frameworka [Next.js](https://nextjs.org/), pobiera dane z API (**Strapi**), działa na platformie **▲ Vercel**, wyświetla komponenty za pomocą **Storybook.**

### Technologia
- [**Next.js**](https://nextjs.org/): wygodny i nowoczesny framework front-endowy.
  - React
- [**Strapi**](https://strapi.io/): builder API z niestandardowymi typami danych - np. zastępstwa, alerty. [**Użyj API »**](https://github.com/ElektronPlus/school-website#api)
  - PostgreSQL
- [**Docker**](https://www.docker.com/): lekka konteneryzacja, żeby ułatwić instalacje na dev lub produkcji. [**Pobierz kontener »**]()
- [**Storybook**](https://storybook.js.org/): pogląd Reactowych komponentów. [**🖼 Przejrzyj komponenty »**](https://main--6284fb53d2efc2004a5d01dd.chromatic.com/)
- [**▲ Vercel**](https://vercel.com): platforma dla frameworków frontendowych i stron statycznych od twórcow Next.js. [**Przeczytaj więcej o Infrastrukturze »**](https://github.com/ElektronPlus/school-website#infrastruktura)

### Linki
- [🖼 Projekt graficzny](https://www.figma.com/file/q12uPmoO5j5LdxRQhHIIGe/Elektronik?node-id=0%3A1)
- [📰 Instancja Strapi](https://strapi.elektronplus.pl)

---


### API
API opiera się o [**Strapi**](https://strapi.io/) i jest publicznie dostępne, możesz użyć je we własnym projekcie.
- [**strapi.elektronplus.pl/api**](https://strapi.elektronplus.pl/api)
  - [/substitusions](https://strapi.elektronplus.pl/api/substitusions)
  - [/articles](https://strapi.elektronplus.pl/api/aritcles)
  - [/alerts](https://strapi.elektronplus.pl/api/alerts)
  - [/pages](https://strapi.elektronplus.pl/api/pages)


### Licencja & open-source

- Projekt jest otwartoźródłowy i dostępny na [**⚖ licencji MIT**](https://github.com/ElektronPlus/school-website/blob/main/LICENSE).
- Oferujemy bezpłatną pomoc z implementacją według potrzeb dla szkół i organizacji edukacyjnych. **Skontaktuj się z nami! »**
- Zauważyłeś błąd na stronie lub chcesz zasugerować zmianę? [**Stwórz Issue »**](https://github.com/ElektronPlus/school-website/issues) lub **Skontaktuj się z nami! »**


### Infrastruktura

<div align="center">

<a href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss"><img alt="Powered by Vercel" src="https://user-images.githubusercontent.com/61631665/169044158-83a61052-64a9-443d-8676-bddba0e45c7e.png"></a>
<br>
  

Ten projekt jest dumnie wspierany przez **▲ Vercel** - platforme łącząca w sobie najlepszy **Developer Experience** z obsesyjną **dbałością o wydajność użytkowników końcowych.**
  
  <a href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss"><h3>Sprawdź ▲ Vercel »</h3></a>
  

</div>

<br>
