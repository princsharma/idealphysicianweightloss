export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type WithClassName<T = object> = T & {
  className?: string;
};

export type Slug = string;

export type ISODateString = string;
