/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDisplay = /* GraphQL */ `
  subscription OnCreateDisplay($filter: ModelSubscriptionDisplayFilterInput) {
    onCreateDisplay(filter: $filter) {
      id
      name
      type
      createdAt
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
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateDisplay = /* GraphQL */ `
  subscription OnUpdateDisplay($filter: ModelSubscriptionDisplayFilterInput) {
    onUpdateDisplay(filter: $filter) {
      id
      name
      type
      createdAt
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
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteDisplay = /* GraphQL */ `
  subscription OnDeleteDisplay($filter: ModelSubscriptionDisplayFilterInput) {
    onDeleteDisplay(filter: $filter) {
      id
      name
      type
      createdAt
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
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      title
      author
      project
      display
      assigned
      priority
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      id
      title
      author
      project
      display
      assigned
      priority
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      id
      title
      author
      project
      display
      assigned
      priority
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      avatar
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      avatar
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      avatar
      task {
        items {
          id
          title
          author
          project
          display
          assigned
          priority
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
