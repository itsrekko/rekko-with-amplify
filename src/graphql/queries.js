/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecommendations = /* GraphQL */ `
  query GetRecommendations($id: ID!) {
    getRecommendations(id: $id) {
      id
      text
      usermodelID
      products {
        nextToken
        startedAt
      }
      Image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRecommendations = /* GraphQL */ `
  query ListRecommendations(
    $filter: ModelRecommendationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        usermodelID
        Image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecommendations = /* GraphQL */ `
  query SyncRecommendations(
    $filter: ModelRecommendationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        usermodelID
        Image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFilters = /* GraphQL */ `
  query GetFilters($id: ID!) {
    getFilters(id: $id) {
      id
      name
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFilters = /* GraphQL */ `
  query ListFilters(
    $filter: ModelFiltersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFilters = /* GraphQL */ `
  query SyncFilters(
    $filter: ModelFiltersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFilters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      used
      Filters {
        nextToken
        startedAt
      }
      brandID
      usermodelID
      Reviews {
        nextToken
        startedAt
      }
      URL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        used
        brandID
        usermodelID
        URL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        used
        brandID
        usermodelID
        URL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      used
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        used
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBrands = /* GraphQL */ `
  query SyncBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBrands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        used
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
      id
      username
      createdAt
      profilePicture
      SavedProducts {
        nextToken
        startedAt
      }
      Recommendations {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        profilePicture
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserModels = /* GraphQL */ `
  query SyncUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        createdAt
        profilePicture
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductRecommendations = /* GraphQL */ `
  query GetProductRecommendations($id: ID!) {
    getProductRecommendations(id: $id) {
      id
      recommendationsID
      productID
      recommendations {
        id
        text
        usermodelID
        Image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        used
        brandID
        usermodelID
        URL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProductRecommendations = /* GraphQL */ `
  query ListProductRecommendations(
    $filter: ModelProductRecommendationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recommendationsID
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductRecommendations = /* GraphQL */ `
  query SyncProductRecommendations(
    $filter: ModelProductRecommendationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        recommendationsID
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductFilters = /* GraphQL */ `
  query GetProductFilters($id: ID!) {
    getProductFilters(id: $id) {
      id
      filtersID
      productID
      filters {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        used
        brandID
        usermodelID
        URL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProductFilters = /* GraphQL */ `
  query ListProductFilters(
    $filter: ModelProductFiltersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductFilters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        filtersID
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductFilters = /* GraphQL */ `
  query SyncProductFilters(
    $filter: ModelProductFiltersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductFilters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        filtersID
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
