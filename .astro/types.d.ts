declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"blog": {
"a-gentle-introduction-to-vitest.mdx": {
  id: "a-gentle-introduction-to-vitest.mdx",
  slug: "a-gentle-introduction-to-vitest",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"first-post.md": {
  id: "first-post.md",
  slug: "first-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"markdown-style-guide.md": {
  id: "markdown-style-guide.md",
  slug: "markdown-style-guide",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"second-post.md": {
  id: "second-post.md",
  slug: "second-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"third-post.md": {
  id: "third-post.md",
  slug: "third-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-mdx.mdx": {
  id: "using-mdx.mdx",
  slug: "using-mdx",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
},
"notes": {
"deep-js-notes.mdx": {
  id: "deep-js-notes.mdx",
  slug: "deep-js-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".mdx"] },
"first-note.md": {
  id: "first-note.md",
  slug: "first-note",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] },
"fullstack-authentication-notes.mdx": {
  id: "fullstack-authentication-notes.mdx",
  slug: "fullstack-authentication-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".mdx"] },
"intermediate-css-notes.md": {
  id: "intermediate-css-notes.md",
  slug: "intermediate-css-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] },
"intermediate-html-css-notes.mdx": {
  id: "intermediate-html-css-notes.mdx",
  slug: "intermediate-html-css-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".mdx"] },
"intro-to-vue-notes.mdx": {
  id: "intro-to-vue-notes.mdx",
  slug: "intro-to-vue-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".mdx"] },
"react-performance-notes.mdx": {
  id: "react-performance-notes.mdx",
  slug: "react-performance-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".mdx"] },
"second-note.md": {
  id: "second-note.md",
  slug: "second-note",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] },
"solidjs-notes.mdx": {
  id: "solidjs-notes.mdx",
  slug: "solidjs-notes",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".mdx"] },
"third-note.md": {
  id: "third-note.md",
  slug: "third-note",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
