/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
  subscription OnUpdateCompany {
    onUpdateCompany {
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
  subscription OnDeleteCompany {
    onDeleteCompany {
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
  subscription OnCreateUser {
    onCreateUser {
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
  subscription OnUpdateUser {
    onUpdateUser {
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
  subscription OnDeleteUser {
    onDeleteUser {
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
  subscription OnCreateCategory {
    onCreateCategory {
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
  subscription OnUpdateCategory {
    onUpdateCategory {
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
  subscription OnDeleteCategory {
    onDeleteCategory {
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
  subscription OnCreateTask {
    onCreateTask {
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
  subscription OnUpdateTask {
    onUpdateTask {
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
  subscription OnDeleteTask {
    onDeleteTask {
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
  subscription OnCreateComment {
    onCreateComment {
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
  subscription OnUpdateComment {
    onUpdateComment {
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
  subscription OnDeleteComment {
    onDeleteComment {
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
