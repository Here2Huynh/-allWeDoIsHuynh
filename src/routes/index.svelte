<script>
	// TODO: add  count timer
	// TODO: add nav bar

	const weddingDate = new Date('2023-04-01');

	const calculateDays = () => {
		let today = new Date();

		return Math.floor((weddingDate - today) / (1000 * 60 * 60 * 24));
	};
</script>

<div class="min-h-screen font-cormorant">
	<div class="w-fit">
		<img src="/static/lilac-top.webp" alt="lilac-top" />
	</div>

	<div class="hero">
		<div class="hero-content text-center mt-0">
			<div class="max-w-md">
				<h1 class="text-5xl ">JOHN & JADE</h1>
				<p class="pt-6">APRIL 1, 2023 • MANTECA, CA</p>
				<p class="">{calculateDays()} DAYS TO GO!</p>
			</div>
		</div>
	</div>

	<footer class="footer absolute inset-x-0 bottom-0">
		<img src="/static/lilac-bottom.webp" alt="lilac-top" />
	</footer>
</div>
