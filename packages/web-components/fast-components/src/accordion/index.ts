import { Accordion, accordionTemplate as template } from "@microsoft/fast-foundation";
import { accordionStyles as styles } from "./accordion.styles";

export * from "../accordion-item/index";

/**
 * A function that returns a {@link @microsoft/fast-foundation#Accordion} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#accordionTemplate}
 *
 *
 * @public
 * @remarks
 * Generates the HTML Element: \<fast-accordion\>
 */
export const fastAccordion = Accordion.compose({
    baseName: "accordion",
    template,
    styles,
});

/**
 * Base class for Accordion
 * @public
 */
export { Accordion };

export { styles as accordionStyles };
