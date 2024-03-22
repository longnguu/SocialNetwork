<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1.0"
        name="viewport">
  <meta content="ie=edge"
        http-equiv="X-UA-Compatible">
  <title>REDIS REALTIME APPLICATION</title>
</head>

<body>
  <h1 id="text"
      style="text-align: center">Hello Gio</h1>

  @vite('resources/js/app.js')
  <script type="module">
    window.Echo.channel('laravel_database_test-channel')
      .listen('.test-event', (e) => {
        console.log(e);

        const text = document.getElementById('text');
        text.innerHTML = e["message"];
      });
  </script>
</body>

</html>
