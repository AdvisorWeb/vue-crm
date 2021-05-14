<template>
	<div>
		<Loader v-if="loading"/>
		<div class="app-main-layout" v-else>

			<Sidebar :key="locale" v-model="isOpen"/>

			<Navbar @click="isOpen = !isOpen"/>

			<main class="app-content" :class="{full: !isOpen}">
				<div class="app-page">
					<router-view/>
				</div>
			</main>

			<div class="fixed-action-btn">
				<RouterLink class="btn-floating btn-large blue" to="/record" v-tooltip="'Создать запись'" data-position="left">
					<i class="large material-icons">add</i>
				</RouterLink>
			</div>
		</div>
	</div>

</template>

<script>

import Sidebar from "@/components/app/Sidebar";
import Navbar from "@/components/app/Navbar";
import messages from "../utils/messages";

export default {
	name: "MainLayout",
	data: () => ({
		isOpen: true,
		loading: true
	}),
	async mounted() {
		if (!Object.keys(this.$store.getters.info).length) {
			await this.$store.dispatch('fetchInfo');
		}
		this.loading = false
	},
	computed: {
		error(){
			return this.$store.getters.error
		},
		locale(){
			return this.$store.getters.info.locale
		}
	},
	watch: {
		error(fbError){
			this.$error(messages[fbError.code] || 'Что-то пошло не так')
		}
	},
	components: {
		Sidebar, Navbar
	}
}
</script>

<style scoped>

</style>