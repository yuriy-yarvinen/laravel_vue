<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=1300, initial-scale=0">

        <title>Laravel bnb</title>

        <!-- Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
		<script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>
		<div id="app">
			<index></index>
		</div>
    </body>
</html>
