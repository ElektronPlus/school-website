<img src="https://cdn.discordapp.com/attachments/896508539244281866/972774461629677589/mock.png" alt="Projekt graficzny strony" width="100%"/>

<div align="center">
     <img alt="Components Preview (Chromatic)" src="https://github.com/ElektronPlus/school-website/actions/workflows/chromatic.yml/badge.svg?branch=main"/>
     <img alt="Vercel status" src="https://img.shields.io/github/deployments/ElektronPlus/school-website/production?label=vercel&logo=vercel&logoColor=white">
 </div>
<h1 align="center">✨ Strona Szkolna</h1>
  <p align="center">
    <a href="https://github.com/ElektronPlus/school-website/projects/1">🎯 Zadania</a> ·
  <a href="https://github.com/ElektronPlus/school-website/projects/2">💡 Pomysły</a>
</p>

## Struktura
- **`📁 apps`**
  - **`📁 backend`**: headless CMS (API) używający [Strapi](https://strapi.com/), które umożliwia dowolne typy contentu, np. artykuły, zastępstwa, nawigacje
  - **`📁 frontend`**
    - **`📁 queries`**: GraphQL queries. Just create a `.graphql` that you will want to use.
    - **`📁 generated`**: Generated GraphQL queries with [GraphQL Code Generator](https://www.graphql-code-generator.com/). Runs automatically while developing. You import types and queries from there (not from `📁 queries`!)
    - **`📁 stories`**: [Storybook stories.](https://storybook.js.org/docs/react/writing-stories/introduction/)
    - **`📁 pages`**: [Next.js pages](https://nextjs.org/docs/basic-features/pages).
    - **`📁 public`**: [Next.js static file serving](https://nextjs.org/docs/basic-features/static-file-serving).
    - **`📁 styles`**: Global CSS Styles. It's better to use CSS modules (`component.module.css` in `📁 components`
    - **`📁 lib`**: Libraries wrappers (such as for Apollo Client) and configs.
    - **`📁 components`**: React components and their styles. There's also a [Next.js Layout](https://nextjs.org/docs/basic-features/layouts)

## Technologia

### Front-end
| Technology | Description |
|------------|-------------|
| [**Next.js**](https://nextjs.org/) | The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. |
| [**React**](https://reactjs.org/) | The most popular JavaScript library for building user interfaces. |
| [**TypeScript**](https://www.typescriptlang.org/) | TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
| [**Storybook**](https://storybook.js.org/) | Tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation. |

#### Fetching
| Technology | Description |
|------------|-------------|
| [**GraphQL**](https://graphql.org/) | Main way to fetch data from the Strapi API. Gives us automatic TypeScript support thanks to [**GraphQL Code Generator**](https://www.graphql-code-generator.com/). We use [**Apollo Client**](https://www.apollographql.com/docs/) |
| **REST API** | REST is rarely used, but sometimes it works out better with Strapi plugins, for example Navigation. External developers also might want to prefer use it in their projects. [**See documentation »**](https://github.com/ElektronPlus/school-website#api) |

### Back-end
| Technology | Description |
|------------|-------------|
| [**Strapi**](https://strapi.io) | Design APIs fast, manage content easily. Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first. |
| [**MySQL**](https://www.mysql.com/) | Database with PhpMyAdmin. Might be changed to PostgreSQL. |

## Linki
- [🖼 Projekt graficzny](https://www.figma.com/file/q12uPmoO5j5LdxRQhHIIGe/Elektronik?node-id=0%3A1)
- [📰 Instancja Strapi](https://strapi.elektronplus.pl)

---


## API
API opiera się o [**Strapi**](https://strapi.io/) i jest publicznie dostępne, możesz użyć je we własnym projekcie.
- [**strapi.elektronplus.pl/api**](https://strapi.elektronplus.pl/api)
  - [/substitusions](https://strapi.elektronplus.pl/api/substitusions)
  - [/articles](https://strapi.elektronplus.pl/api/aritcles)
  - [/alerts](https://strapi.elektronplus.pl/api/alerts)
  - [/pages](https://strapi.elektronplus.pl/api/pages)


## Licencja & open-source

- Projekt jest otwartoźródłowy i dostępny na [**⚖ licencji MIT**](https://github.com/ElektronPlus/school-website/blob/main/LICENSE).
- Oferujemy bezpłatną pomoc z implementacją według potrzeb dla szkół i organizacji edukacyjnych. **Skontaktuj się z nami! »**
- Zauważyłeś błąd na stronie lub chcesz zasugerować zmianę? [**Stwórz Issue »**](https://github.com/ElektronPlus/school-website/issues) lub **Skontaktuj się z nami! »**


## Infrastruktura

This section explains this specific instance infrastructure. You're free to use anything you want.

| Type | Infrastructure | Instance | Description |
|-------|-----------------|----------|------------
| Frontend | [**▲ Vercel**](https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss) | [dev.elektronplus.pl](https://dev.elektronplus.pl) | Website |
| Backend | **Self-hosted VPS** | [strapi.elektronplus.pl](https://strapi.elektronplus.pl/) | Strapi (Headless CMS), MySQL Database |
| Developer-only | [**Chromatic**](https://www.chromatic.com/) | [**See components »**](https://main--6284fb53d2efc2004a5d01dd.chromatic.com/) | Storybook |

<div align="center">

<a href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss"><img alt="Powered by Vercel" src="https://user-images.githubusercontent.com/61631665/169044158-83a61052-64a9-443d-8676-bddba0e45c7e.png"></a>
<br>
  

Ten projekt jest dumnie wspierany przez **▲ Vercel** - platforme łącząca w sobie najlepszy **Developer Experience** z obsesyjną **dbałością o wydajność użytkowników końcowych.**
  
  <a href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss"><h3>Sprawdź ▲ Vercel »</h3></a>
  

</div>

<br>
