/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDisplay = /* GraphQL */ `
  query GetDisplay($id: ID!) {
    getDisplay(id: $id) {
      id
      name
      project {
        items {
          id
          name
          display
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      createdAt
      updatedAt
    }
  }
`;
export const listDisplays = /* GraphQL */ `
  query ListDisplays(
    $filter: ModelDisplayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDisplays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        project {
          nextToken
        }
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      task {
        items {
          id
          title
          author
          project
          createdAt
          updatedAt
        }
        nextToken
      }
      display
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        task {
          nextToken
        }
        display
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
      author
      project
      assigned {
        items {
          id
          name
          task
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        author
        project
        assigned {
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
      task
      createdAt
      updatedAt
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
        task
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const displayByDate = /* GraphQL */ `
  query DisplayByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDisplayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    displayByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        project {
          nextToken
        }
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectsByDisplay = /* GraphQL */ `
  query ProjectsByDisplay(
    $display: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByDisplay(
      display: $display
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        task {
          nextToken
        }
        display
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tasksByProject = /* GraphQL */ `
  query TasksByProject(
    $project: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByProject(
      project: $project
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        author
        project
        assigned {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByTask = /* GraphQL */ `
  query UsersByTask(
    $task: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByTask(
      task: $task
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        task
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
