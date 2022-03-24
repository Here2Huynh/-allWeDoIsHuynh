<script>
	// TODO: add  count timer
	// TODO: add nav bar

	let countDown = true;

	const weddingDate = new Date('2023-04-01');

	const calculateDays = () => {
		let today = new Date();

		const daysLeft = Math.floor((weddingDate - today) / (1000 * 60 * 60 * 24));

		if (daysLeft > 0) return daysLeft;
		else return (countDown = false);
	};
</script>

<div class="min-h-screen font-cormorant">
	<div class="w-fit">
		<img src="/static/lilac-top.webp" alt="lilac-top" />
	</div>

	<div class="hero">
		<div class="hero-content text-center uppercase">
			<div class="max-w-md">
				<h1 class="text-5xl">John & Jade</h1>
				<p class="pt-6">April 1, 2023 • Manteca, CA</p>
				<p class="">
					{countDown ? `${calculateDays()} days to go!` : 'We are on our honeymoon now!'}
				</p>
			</div>
		</div>
	</div>

	<div class="navbar bg-base-100">
		<div class="navbar-start" />
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				<li><a>Our Story</a></li>
				<li><a>Photos</a></li>
				<li><a>Itinerary</a></li>
				<li><a>Seating Map</a></li>
			</ul>
		</div>
		<div class="navbar-end" />
	</div>

	<footer class="footer absolute inset-x-0 bottom-0">
		<img src="/static/lilac-bottom.webp" alt="lilac-top" />
	</footer>
</div>
