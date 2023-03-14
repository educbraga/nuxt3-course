<template>
	<div class="main">
		<Header/>
		<Alert/>
		<ProfileHeader/>

		  <div>
		    {{ $hello('world') }}
		  </div>
		<!-- <img src="@/assets/images/photo1.jpg"> -->
		<!-- <img src="@/public/photo2.jpg"> -->
	</div>
</template>

<script setup lang='ts'>
	const { $hello } = useNuxtApp()

	const { helloWorld } = useUtils();
	helloWorld();
</script>