<script>

	let burger = document.querySelector('.burger');
	let close = document.querySelector('.close');
	let sidenav = document.querySelector('#sidenav');

	// Burger click function
	burger.addEventListener('click', function () {
		sidenav.classList.add('active');
	});
	// Close button click function
	close.addEventListener('click', function () {
		sidenav.classList.remove('active');
	});

</script>
