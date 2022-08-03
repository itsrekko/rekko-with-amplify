// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recommendations, Product, Filters, Brand, UserModel, ProductRecommendations, ProductFilters } = initSchema(schema);

export {
  Recommendations,
  Product,
  Filters,
  Brand,
  UserModel,
  ProductRecommendations,
  ProductFilters
};