import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RecommendationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FiltersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BrandMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserModelMetaData = {
  readOnlyFields: 'updatedAt';
}

type ProductRecommendationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductFiltersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recommendations {
  readonly id: string;
  readonly text?: string | null;
  readonly usermodelID: string;
  readonly products?: (ProductRecommendations | null)[] | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recommendations, RecommendationsMetaData>);
  static copyOf(source: Recommendations, mutator: (draft: MutableModel<Recommendations, RecommendationsMetaData>) => MutableModel<Recommendations, RecommendationsMetaData> | void): Recommendations;
}

export declare class Product {
  readonly id: string;
  readonly name?: string | null;
  readonly used?: boolean | null;
  readonly Filters?: (ProductFilters | null)[] | null;
  readonly brandID: string;
  readonly usermodelID: string;
  readonly Reviews?: (ProductRecommendations | null)[] | null;
  readonly URL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Filters {
  readonly id: string;
  readonly name?: string | null;
  readonly products?: (ProductFilters | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Filters, FiltersMetaData>);
  static copyOf(source: Filters, mutator: (draft: MutableModel<Filters, FiltersMetaData>) => MutableModel<Filters, FiltersMetaData> | void): Filters;
}

export declare class Brand {
  readonly id: string;
  readonly name?: string | null;
  readonly used?: boolean | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Brand, BrandMetaData>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand, BrandMetaData>) => MutableModel<Brand, BrandMetaData> | void): Brand;
}

export declare class UserModel {
  readonly id: string;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly profilePicture?: string | null;
  readonly SavedProducts?: (Recommendations | null)[] | null;
  readonly Recommendations?: (Recommendations | null)[] | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserModel, UserModelMetaData>);
  static copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}

export declare class ProductRecommendations {
  readonly id: string;
  readonly recommendations: Recommendations;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductRecommendations, ProductRecommendationsMetaData>);
  static copyOf(source: ProductRecommendations, mutator: (draft: MutableModel<ProductRecommendations, ProductRecommendationsMetaData>) => MutableModel<ProductRecommendations, ProductRecommendationsMetaData> | void): ProductRecommendations;
}

export declare class ProductFilters {
  readonly id: string;
  readonly product: Product;
  readonly filters: Filters;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductFilters, ProductFiltersMetaData>);
  static copyOf(source: ProductFilters, mutator: (draft: MutableModel<ProductFilters, ProductFiltersMetaData>) => MutableModel<ProductFilters, ProductFiltersMetaData> | void): ProductFilters;
}