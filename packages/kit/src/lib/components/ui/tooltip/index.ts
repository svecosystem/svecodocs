import { Tooltip as TooltipPrimitive } from "bits-ui";
import Content from "./tooltip-content.svelte";

const Root = TooltipPrimitive.Root as typeof TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger as typeof TooltipPrimitive.Trigger;
const Provider = TooltipPrimitive.Provider as typeof TooltipPrimitive.Provider;

export {
	Root,
	Trigger,
	Content,
	Provider,
	//
	Root as Tooltip,
	Content as TooltipContent,
	Trigger as TooltipTrigger,
	Provider as TooltipProvider,
};
