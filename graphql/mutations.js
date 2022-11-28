/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      member {
        items {
          id
          name
          tel
          email
          jobTitle
          companyID
          companyName
          createdAt
          updatedAt
          companyMemberId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      member {
        items {
          id
          name
          tel
          email
          jobTitle
          companyID
          companyName
          createdAt
          updatedAt
          companyMemberId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      member {
        items {
          id
          name
          tel
          email
          jobTitle
          companyID
          companyName
          createdAt
          updatedAt
          companyMemberId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      tel
      email
      jobTitle
      task {
        items {
          id
          title
          text
          author
          assigned
          category
          createdAt
          updatedAt
          userTaskId
        }
        nextToken
      }
      comment {
        items {
          id
          parent
          name
          text
          userID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      companyID
      companyName
      createdAt
      updatedAt
      companyMemberId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      tel
      email
      jobTitle
      task {
        items {
          id
          title
          text
          author
          assigned
          category
          createdAt
          updatedAt
          userTaskId
        }
        nextToken
      }
      comment {
        items {
          id
          parent
          name
          text
          userID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      companyID
      companyName
      createdAt
      updatedAt
      companyMemberId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      tel
      email
      jobTitle
      task {
        items {
          id
          title
          text
          author
          assigned
          category
          createdAt
          updatedAt
          userTaskId
        }
        nextToken
      }
      comment {
        items {
          id
          parent
          name
          text
          userID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      companyID
      companyName
      createdAt
      updatedAt
      companyMemberId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      tasks {
        items {
          id
          title
          text
          author
          assigned
          category
          createdAt
          updatedAt
          userTaskId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      tasks {
        items {
          id
          title
          text
          author
          assigned
          category
          createdAt
          updatedAt
          userTaskId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      tasks {
        items {
          id
          title
          text
          author
          assigned
          category
          createdAt
          updatedAt
          userTaskId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      text
      author
      assigned
      category
      comment {
        items {
          id
          parent
          name
          text
          userID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userTaskId
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      text
      author
      assigned
      category
      comment {
        items {
          id
          parent
          name
          text
          userID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userTaskId
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      text
      author
      assigned
      category
      comment {
        items {
          id
          parent
          name
          text
          userID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userTaskId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      parent
      name
      text
      userID
      taskID
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      parent
      name
      text
      userID
      taskID
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      parent
      name
      text
      userID
      taskID
      createdAt
      updatedAt
    }
  }
`;
