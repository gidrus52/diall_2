/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
