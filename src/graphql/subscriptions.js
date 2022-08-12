/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecommendations = /* GraphQL */ `
  subscription OnCreateRecommendations(
    $filter: ModelSubscriptionRecommendationsFilterInput
  ) {
    onCreateRecommendations(filter: $filter) {
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
export const onUpdateRecommendations = /* GraphQL */ `
  subscription OnUpdateRecommendations(
    $filter: ModelSubscriptionRecommendationsFilterInput
  ) {
    onUpdateRecommendations(filter: $filter) {
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
export const onDeleteRecommendations = /* GraphQL */ `
  subscription OnDeleteRecommendations(
    $filter: ModelSubscriptionRecommendationsFilterInput
  ) {
    onDeleteRecommendations(filter: $filter) {
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
export const onCreateFilters = /* GraphQL */ `
  subscription OnCreateFilters($filter: ModelSubscriptionFiltersFilterInput) {
    onCreateFilters(filter: $filter) {
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
export const onUpdateFilters = /* GraphQL */ `
  subscription OnUpdateFilters($filter: ModelSubscriptionFiltersFilterInput) {
    onUpdateFilters(filter: $filter) {
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
export const onDeleteFilters = /* GraphQL */ `
  subscription OnDeleteFilters($filter: ModelSubscriptionFiltersFilterInput) {
    onDeleteFilters(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onCreateBrand(filter: $filter) {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onUpdateBrand(filter: $filter) {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
    onDeleteBrand(filter: $filter) {
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
export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onCreateUserModel(filter: $filter) {
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
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onUpdateUserModel(filter: $filter) {
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
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onDeleteUserModel(filter: $filter) {
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
export const onCreateProductRecommendations = /* GraphQL */ `
  subscription OnCreateProductRecommendations(
    $filter: ModelSubscriptionProductRecommendationsFilterInput
  ) {
    onCreateProductRecommendations(filter: $filter) {
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
export const onUpdateProductRecommendations = /* GraphQL */ `
  subscription OnUpdateProductRecommendations(
    $filter: ModelSubscriptionProductRecommendationsFilterInput
  ) {
    onUpdateProductRecommendations(filter: $filter) {
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
export const onDeleteProductRecommendations = /* GraphQL */ `
  subscription OnDeleteProductRecommendations(
    $filter: ModelSubscriptionProductRecommendationsFilterInput
  ) {
    onDeleteProductRecommendations(filter: $filter) {
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
export const onCreateProductFilters = /* GraphQL */ `
  subscription OnCreateProductFilters(
    $filter: ModelSubscriptionProductFiltersFilterInput
  ) {
    onCreateProductFilters(filter: $filter) {
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
export const onUpdateProductFilters = /* GraphQL */ `
  subscription OnUpdateProductFilters(
    $filter: ModelSubscriptionProductFiltersFilterInput
  ) {
    onUpdateProductFilters(filter: $filter) {
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
export const onDeleteProductFilters = /* GraphQL */ `
  subscription OnDeleteProductFilters(
    $filter: ModelSubscriptionProductFiltersFilterInput
  ) {
    onDeleteProductFilters(filter: $filter) {
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
