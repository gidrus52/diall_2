/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        member {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tel
        email
        jobTitle
        task {
          nextToken
        }
        comment {
          nextToken
        }
        companyID
        companyName
        createdAt
        updatedAt
        companyMemberId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text
        author
        assigned
        category
        comment {
          nextToken
        }
        createdAt
        updatedAt
        userTaskId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
