/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDisplay = /* GraphQL */ `
  mutation CreateDisplay(
    $input: CreateDisplayInput!
    $condition: ModelDisplayConditionInput
  ) {
    createDisplay(input: $input, condition: $condition) {
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
export const updateDisplay = /* GraphQL */ `
  mutation UpdateDisplay(
    $input: UpdateDisplayInput!
    $condition: ModelDisplayConditionInput
  ) {
    updateDisplay(input: $input, condition: $condition) {
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
export const deleteDisplay = /* GraphQL */ `
  mutation DeleteDisplay(
    $input: DeleteDisplayInput!
    $condition: ModelDisplayConditionInput
  ) {
    deleteDisplay(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      task
      createdAt
      updatedAt
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
      task
      createdAt
      updatedAt
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
      task
      createdAt
      updatedAt
    }
  }
`;
