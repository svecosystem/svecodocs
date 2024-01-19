<script lang="ts">
	import { SvecosystemDark, SvecosystemLight } from "$lib/components/logos";
</script>

<a href="/" class="mr-3 w-[2rem] flex-none overflow-hidden md:w-auto">
	<SvecosystemLight class="block h-5 w-auto dark:hidden" />
	<SvecosystemDark class="hidden h-5 w-auto dark:block" />
	<span class="sr-only"> Current Page Here </span>
</a>
