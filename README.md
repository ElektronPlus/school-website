
# Technologia

## 📃 WordPress: stabilny i rozszerzalny CMS

Przedyskutowaliśmy 3 główne rozwiązania systemu zarządzania stroną:
1. **👎 Własny system** oparty na PHP (czyli tak, jak stara wersja strony)
2. **👍 Nowoczesne rozwiązania** (np. Next.js, Strapi)
3. **⭐ WordPress**

<img src="https://edb-hosting.dk/resources/uploads/editor/ea716de858ae155715b5d7e754c7dd22.png" width="100%">

Wybraliśmy **WordPress** jako CMS ze względu na:
- **stabilność**: WordPress to dojrzałe narzędzie, zarządzane przez ogromną społeczność.
- **szybkość pracy**: ze względu na możliwość rozszerzalności dzięki gotowym szablonom, wtyczkom i innym rozwiązaniom.
- **powszechność**: 43% sieci jest zbudowane dzięki WordPressowi. To sprawia, że jest początkującym programistom łatwiej będzie wprowadzać zmiany na stronie (a musimy pamiętać, że twórcy strony w przeciągu kilku lat nie będą dostępni do pomocy).
- **rozszerzalność**: nic nie stoi na przeszkodzie, aby w przyszłości WordPress był użyty jedynie jako headless back-end z nowoczesniejszym frontem, np. przy użyciu [Frontity](https://frontity.org/).

### Workflow

## 🐱‍💻 GitHub
### Git
### GitHub Actions (CI)

## 🐳 Docker

## 🌳 Roots: nowoczesny development z WordPress
<img src="https://user-images.githubusercontent.com/61631665/165557020-af66e038-2b9b-46d3-85e7-481a247cbcfa.png" width="100%">

### [⚡ Trellis](https://docs.roots.io/trellis/master/installation/)
Trellis pozwala tworzyć i zarządzać serwerami, które są gotowe do produkcji, zoptymalizowane pod kątem wydajności i oparte na najlepszych praktykach, które są stale ulepszane.

### [🔧 Bedrock](https://docs.roots.io/bedrock/master/installation/)
Boilerplate do WordPressa z nowoczesnymi narzędziami programistycznymi, łatwiejszą konfiguracją i ulepszoną strukturą folderów. [Sprawdź różnice.](https://roots.io/bedrock-vs-regular-wordpress-install/)

- 📁 lepsza struktura folderów (na wzór aplikacji JSowych)
- 🔽 menadżer pakietów [**Composer**](https://getcomposer.org/) (zarządzaniem WP, szablonami i wtyczkami na wzór npm)
- ⚙ łatwa konfiguracja dla środowisk (`production/staging/development`)
- 🔐 zwiększone bezpieczeństwo (`wp-password-bcrypt` i plik `.env`)

### [🧙‍♂️ Sage](https://docs.roots.io/sage/10.x/installation/)
Motyw startowy WordPress z nowoczesnym workflowem programistycznym.

- 📦 wykorzystaj możliwości **[Laravela](https://laravel.com/)**  i jego pakietów
- ✨ czyste, wydajne template'y motywów wykorzystujące [**Laravel Blade**](https://laravel.com/docs/9.x/blade)
- ⚡ błyskawiczny workflow nad frontendem dzięki **[Bud](https://bud.js.org/)**
- 💨 bezpośrednie wsparcie dla [**Tailwind CSS**](https://tailwindcss.com/) (nowoczesny framework używany we frontendzie)

### Lokalny development

1. zainstaluj [Vagrant](https://www.vagrantup.com/downloads) i [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. **jeśli używasz Windowsa**, zainstaluj [WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
3. zainstaluj `trellis-cli`
	- `brew install roots/tap/trellis-cli`, wymaga [homebrew](https://brew.sh/)
