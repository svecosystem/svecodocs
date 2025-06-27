<script lang="ts">
	import type { ReleaseEntry } from "../releases.js";
	import CheckCircle from "phosphor-svelte/lib/CheckCircle";
	import Sparkle from "phosphor-svelte/lib/Sparkle";
	import Bug from "phosphor-svelte/lib/Bug";
	import Warning from "phosphor-svelte/lib/Warning";
	import Wrench from "phosphor-svelte/lib/Wrench";
	import Lightning from "phosphor-svelte/lib/Lightning";
	import GitBranch from "phosphor-svelte/lib/GitBranch";
	import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut";
	import GitCommit from "phosphor-svelte/lib/GitCommit";
	import Calendar from "phosphor-svelte/lib/Calendar";

	import type { Component } from "svelte";
	import PageHeader from "./layout/page-header/page-header.svelte";

	interface Props {
		releases: ReleaseEntry[];
		title?: string;
		description?: string;
	}

	let {
		releases,
		title = "Changelog",
		description = "Track all the latest updates, improvements, and fixes to the project",
	}: Props = $props();

	const prefixConfig = {
		feat: {
			color: "text-emerald-600 dark:text-emerald-400",
			bg: "bg-emerald-50 dark:bg-emerald-950/30",
			icon: Sparkle,
		},
		feature: {
			color: "text-emerald-600 dark:text-emerald-400",
			bg: "bg-emerald-50 dark:bg-emerald-950/30",
			icon: Sparkle,
		},
		fix: {
			color: "text-blue-600 dark:text-blue-400",
			bg: "bg-blue-50 dark:bg-blue-950/30",
			icon: Bug,
		},
		breaking: {
			color: "text-red-600 dark:text-red-400",
			bg: "bg-red-50 dark:bg-red-950/30",
			icon: Warning,
		},
		chore: {
			color: "text-gray-600 dark:text-gray-400",
			bg: "bg-gray-50 dark:bg-gray-950/30",
			icon: Wrench,
		},
		docs: {
			color: "text-purple-600 dark:text-purple-400",
			bg: "bg-purple-50 dark:bg-purple-950/30",
			icon: CheckCircle,
		},
		style: {
			color: "text-pink-600 dark:text-pink-400",
			bg: "bg-pink-50 dark:bg-pink-950/30",
			icon: Sparkle,
		},
		refactor: {
			color: "text-orange-600 dark:text-orange-400",
			bg: "bg-orange-50 dark:bg-orange-950/30",
			icon: Wrench,
		},
		test: {
			color: "text-yellow-600 dark:text-yellow-400",
			bg: "bg-yellow-50 dark:bg-yellow-950/30",
			icon: CheckCircle,
		},
		perf: {
			color: "text-indigo-600 dark:text-indigo-400",
			bg: "bg-indigo-50 dark:bg-indigo-950/30",
			icon: Lightning,
		},
		performance: {
			color: "text-indigo-600 dark:text-indigo-400",
			bg: "bg-indigo-50 dark:bg-indigo-950/30",
			icon: Lightning,
		},
		bump: {
			color: "text-cyan-600 dark:text-cyan-400",
			bg: "bg-cyan-50 dark:bg-cyan-950/30",
			icon: Wrench,
		},
	};

	function getPrefixConfig(prefix?: string): { color: string; bg: string; icon: Component } {
		if (!prefix) return { color: "text-muted-foreground", bg: "bg-muted", icon: CheckCircle };
		const prefixLower = prefix.toLowerCase();
		return (
			prefixConfig[prefixLower as keyof typeof prefixConfig] || {
				color: "text-muted-foreground",
				bg: "bg-muted",
				icon: CheckCircle,
			}
		);
	}

	function formatDate(date: Date): string {
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}

	const changeTypeConfig = {
		major: {
			label: "Breaking Changes",
			icon: Warning,
			badge: "bg-gradient-to-r from-red-50 to-red-100 text-red-800 border-red-200 dark:from-red-950/50 dark:to-red-900/50 dark:text-red-300 dark:border-red-800/50",
			accent: "border-l-red-500",
		},
		minor: {
			label: "New Features",
			icon: Sparkle,
			badge: "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 border-emerald-200 dark:from-emerald-950/50 dark:to-emerald-900/50 dark:text-emerald-300 dark:border-emerald-800/50",
			accent: "border-l-emerald-500",
		},
		patch: {
			label: "Bug Fixes & Improvements",
			icon: Bug,
			badge: "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-200 dark:from-blue-950/50 dark:to-blue-900/50 dark:text-blue-300 dark:border-blue-800/50",
			accent: "border-l-blue-500",
		},
	};

	function getChangeTypeConfig(type: keyof ReleaseEntry["changes"]) {
		return (
			changeTypeConfig[type as keyof typeof changeTypeConfig] || {
				label: "Changes",
				icon: CheckCircle,
				badge: "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-gray-200 dark:from-gray-950/50 dark:to-gray-900/50 dark:text-gray-300 dark:border-gray-800/50",
				accent: "border-l-gray-500",
			}
		);
	}
</script>

<main class="mx-auto w-full min-w-0 max-w-[640px] pb-12 2xl:max-w-[760px]" id="main-content">
	<PageHeader {title} {description} />
	<!-- Timeline container -->
	<div class="relative mt-12">
		<!-- Timeline line -->
		<div
			class="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-transparent dark:from-slate-700 dark:via-slate-600"
		></div>

		<div class="space-y-12">
			{#each releases as release (release.id)}
				<article class="relative">
					<!-- Timeline dot -->
					<div class="absolute left-6 flex h-4 w-4 items-center justify-center">
						<div
							class="h-4 w-4 rounded-full bg-white shadow-lg ring-4 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
						>
							<div
								class="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
							></div>
						</div>
					</div>

					<!-- Release card -->
					<div
						class="ml-16 overflow-hidden rounded-2xl bg-white/70 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-slate-800/70"
					>
						<!-- Release header -->
						<div
							class="border-b border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-white/50 p-8 dark:border-slate-700/50 dark:from-slate-800/50 dark:to-slate-700/50"
						>
							<div
								class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
							>
								<div>
									<h2
										class="mb-2 text-2xl font-bold text-slate-900 dark:text-white"
									>
										{release.version}
									</h2>
									<div
										class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
									>
										<Calendar class="h-4 w-4" />
										<time datetime={release.publishedAt.toISOString()}>
											{formatDate(release.publishedAt)}
										</time>
									</div>
								</div>
								<div class="flex items-center gap-2">
									<span
										class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
									>
										{release.tag}
									</span>
								</div>
							</div>
						</div>

						<!-- Changes content -->
						<div class="p-8">
							<div class="space-y-8">
								{#each ["major", "minor", "patch"] as const as changeType (changeType)}
									{@const changes = release.changes[changeType]}
									{@const config = getChangeTypeConfig(changeType)}
									{#if changes.length > 0}
										<section class="space-y-4">
											<!-- Section header -->
											<div class="flex items-center gap-4">
												<div
													class="flex items-center gap-3 rounded-xl border px-4 py-2.5 shadow-sm {config.badge}"
												>
													<config.icon class="h-4 w-4" />
													<span class="text-sm font-semibold"
														>{config.label}</span
													>
													<span
														class="rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium"
													>
														{changes.length}
													</span>
												</div>
											</div>

											<!-- Changes grid -->
											<div class="grid gap-4">
												{#each changes as change, changeIndex (changeIndex)}
													<div
														class="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white/50 p-6 transition-all duration-200 hover:border-slate-300/50 hover:bg-white/80 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/50 dark:hover:border-slate-600/50 dark:hover:bg-slate-800/80 {config.accent} border-l-4"
													>
														<div class="flex items-start gap-4">
															<div class="flex-1 space-y-4">
																<!-- Tags row -->
																<div
																	class="flex flex-wrap items-center gap-2"
																>
																	{#if change.prefix}
																		{@const prefixConfig =
																			getPrefixConfig(
																				change.prefix
																			)}
																		<div
																			class="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold {prefixConfig.color} {prefixConfig.bg}"
																		>
																			<prefixConfig.icon
																				class="h-3 w-3"
																			/>
																			{change.prefix}
																		</div>
																	{/if}

																	{#if change.scope}
																		<span
																			class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
																		>
																			{change.scope}
																		</span>
																	{/if}
																</div>

																<!-- Description -->
																<p
																	class="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300"
																>
																	{change.description}
																</p>

																<!-- Links -->
																<div
																	class="flex items-center gap-3"
																>
																	{#if change.prNumber && change.prUrl}
																		<a
																			href={change.prUrl}
																			target="_blank"
																			rel="noopener noreferrer"
																			class="group/link flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-200"
																		>
																			<GitBranch
																				class="h-3 w-3"
																			/>
																			#{change.prNumber}
																			<ArrowSquareOut
																				class="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100"
																			/>
																		</a>
																	{/if}

																	{#if change.commitHash && change.commitUrl}
																		<a
																			href={change.commitUrl}
																			target="_blank"
																			rel="noopener noreferrer"
																			class="group/link flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-200"
																		>
																			<GitCommit
																				class="h-3 w-3"
																			/>
																			{change.commitHash.slice(
																				0,
																				7
																			)}
																			<ArrowSquareOut
																				class="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100"
																			/>
																		</a>
																	{/if}
																</div>
															</div>
														</div>
													</div>
												{/each}
											</div>
										</section>
									{/if}
								{/each}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</main>
