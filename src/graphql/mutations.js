/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecommendations = /* GraphQL */ `
  mutation CreateRecommendations(
    $input: CreateRecommendationsInput!
    $condition: ModelRecommendationsConditionInput
  ) {
    createRecommendations(input: $input, condition: $condition) {
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
export const updateRecommendations = /* GraphQL */ `
  mutation UpdateRecommendations(
    $input: UpdateRecommendationsInput!
    $condition: ModelRecommendationsConditionInput
  ) {
    updateRecommendations(input: $input, condition: $condition) {
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
export const deleteRecommendations = /* GraphQL */ `
  mutation DeleteRecommendations(
    $input: DeleteRecommendationsInput!
    $condition: ModelRecommendationsConditionInput
  ) {
    deleteRecommendations(input: $input, condition: $condition) {
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
export const createFilters = /* GraphQL */ `
  mutation CreateFilters(
    $input: CreateFiltersInput!
    $condition: ModelFiltersConditionInput
  ) {
    createFilters(input: $input, condition: $condition) {
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
export const updateFilters = /* GraphQL */ `
  mutation UpdateFilters(
    $input: UpdateFiltersInput!
    $condition: ModelFiltersConditionInput
  ) {
    updateFilters(input: $input, condition: $condition) {
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
export const deleteFilters = /* GraphQL */ `
  mutation DeleteFilters(
    $input: DeleteFiltersInput!
    $condition: ModelFiltersConditionInput
  ) {
    deleteFilters(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
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
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
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
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
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
export const createProductRecommendations = /* GraphQL */ `
  mutation CreateProductRecommendations(
    $input: CreateProductRecommendationsInput!
    $condition: ModelProductRecommendationsConditionInput
  ) {
    createProductRecommendations(input: $input, condition: $condition) {
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
export const updateProductRecommendations = /* GraphQL */ `
  mutation UpdateProductRecommendations(
    $input: UpdateProductRecommendationsInput!
    $condition: ModelProductRecommendationsConditionInput
  ) {
    updateProductRecommendations(input: $input, condition: $condition) {
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
export const deleteProductRecommendations = /* GraphQL */ `
  mutation DeleteProductRecommendations(
    $input: DeleteProductRecommendationsInput!
    $condition: ModelProductRecommendationsConditionInput
  ) {
    deleteProductRecommendations(input: $input, condition: $condition) {
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
export const createProductFilters = /* GraphQL */ `
  mutation CreateProductFilters(
    $input: CreateProductFiltersInput!
    $condition: ModelProductFiltersConditionInput
  ) {
    createProductFilters(input: $input, condition: $condition) {
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
export const updateProductFilters = /* GraphQL */ `
  mutation UpdateProductFilters(
    $input: UpdateProductFiltersInput!
    $condition: ModelProductFiltersConditionInput
  ) {
    updateProductFilters(input: $input, condition: $condition) {
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
export const deleteProductFilters = /* GraphQL */ `
  mutation DeleteProductFilters(
    $input: DeleteProductFiltersInput!
    $condition: ModelProductFiltersConditionInput
  ) {
    deleteProductFilters(input: $input, condition: $condition) {
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
