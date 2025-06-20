<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Песняры - Легенды белорусской эстрады</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #1a6dcc;
            --secondary: #e63946;
            --dark: #2b2d42;
            --light: #f8f9fa;
            --accent: #ffd166;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }

        header {
            background: rgba(0, 0, 0, 0.7);
            background-size: cover;
            background-position: center;
            color: white;
            padding: 75px 20px;
            text-align: center;
        }

        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .subtitle {
            font-size: 1.5rem;
            opacity: 0.9;
            margin-bottom: 30px;
        }

        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        section {
            margin-bottom: 60px;
            padding: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        h2 {
            font-family: 'Playfair Display', serif;
            color: black;
            text-align: center;
            margin-bottom: 25px;
            font-size: 2.2rem;
            position: relative;
            display: inline-block;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: var(--accent);
        }

        .song-list {
            list-style-type: none;
            columns: 2;
            column-gap: 40px;
        }

        .song-list li {
            padding: 12px 0;
            border-bottom: 1px dashed #eee;
            font-size: 1.1rem;
            position: relative;
            padding-left: 25px;
        }

        .song-list li::before {
            content: '♫';
            position: absolute;
            left: 0;
            color: var(--secondary);
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .song-list {
                columns: 1;
            }
            
            .gallery {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>ПЕСНЯРЫ</h1>
        <p class="subtitle">Легендарный вокально-инструментальный ансамбль</p>
    </header>

    <div class="container">
        <img src="https://phil-nsk.ru/upload/resize_cache/iblock/c3c/921_442_2/c3c91eb356c4a5e96efab7bedca8e526.jpg">
        <section id="about">
            <h2>Бывай, абуджаная
                Сэрцам, дарагая!
                Чаму так горка,
                Не магу я зразумець...
            </h2>
        </section>
    </div>
</body>
</html>