1) я почисти node_modules від непотрібних покетів
2) додав файл gitignore,  котрий містить список файлів та папок, які можна не додавати в гіт
3) в package.json додав пакет live-server, для реалізації автоматичного оновлення сторінки в бряузері під час роботи. щоб його запустити необхідно в терміналі установити усі залежності із package.json( <pre><code>npm install</code></pre> ). Потім запустити команду <pre><code>npm run live-server</code></pre> в терміналі. в терміналі з*явиться лінк, по якому можна відкрити цей сайт
4) доданий компілятор для sass препроцесора. https://sass-lang.com/guide. Щоб його запустити необхідно установити компілятор глобально на копмі через команду <pre><code>npm install -g sass</code></pre>. потім в терміналі відкрити папку проекта і зіпустити команду <pre><code>npm run watch-scss</code></pre>  
