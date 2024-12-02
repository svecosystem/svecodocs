import { Collapsible as CollapsiblePrimitive } from "bits-ui";

const Root = CollapsiblePrimitive.Root as typeof CollapsiblePrimitive.Root;
const Trigger = CollapsiblePrimitive.Trigger as typeof CollapsiblePrimitive.Trigger;
const Content = CollapsiblePrimitive.Content as typeof CollapsiblePrimitive.Content;

export {
	Root,
	Content,
	Trigger,
	//
	Root as Collapsible,
	Content as CollapsibleContent,
	Trigger as CollapsibleTrigger,
};
