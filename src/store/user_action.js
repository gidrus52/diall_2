import {API, graphqlOperation} from 'aws-amplify'
import * as graphQlQueries from '../graphql/queries'
import * as graphQlMutations from '../graphql/mutations'

export default {
    state: {
        usersList: [],
        companysList: [],
        readyList: [],
        taskList: [],
        categoryList: [],
        currentTask: {},
        displayList: []

    },
    getters: {
        listUserGetter: state => state.usersList,
        listCompanyGetter: state => state.companysList,
        listCategoryGetter: state => state.categoryList,
        listTaskGetter: state => state.taskList,
        currentTaskGetter: state => state.currentTask,
        readyList: state => state.readyList,
        displayList: state => state.displayList
    },
    mutations: {
        SET_USER_LIST: async (state, data) => {
            state.usersList = await data.data.listUsers.items
        },
        SET_COMPANY_LIST: async (state, data) => {
            state.companysList = await data.data.listCompanies.items
        },
        SET_DISPLAY_LIST: async (state, data) => {
            state.displayList = await data.data.listDisplays.items
        },
        SET_TASK_LIST: async (state, data) => {
            console.log(data.data.listTasks.items)
            state.taskList = data.data.listTasks.items
        },
        SET_CATEGORY_LIST: (state, data) => {
            state.categoryList = data.data.listCategories.items
        },
        SET_CURRENT_TASK: (state, data) => {
            state.currentTask = data.data.getTask
        }
    },
    actions: {
        listUser: async ({commit, dispatch}) => {
            API.graphql((graphqlOperation(graphQlQueries.listUsers))).then(async data => {
                await commit('SET_USER_LIST', data)
            }).catch(err => console.log(err))

        },
        listDisplay: async ({commit}) => {
            API.graphql((graphqlOperation(graphQlQueries.listDisplays))).then(async data => await commit('SET_DISPLAY_LIST', data)).catch(err => console.log(err))
        },
        listCompany: async ({commit, dispatch}) => {
            API.graphql((graphqlOperation(graphQlQueries.listCompanies))).then(async data => await commit('SET_COMPANY_LIST', data)).catch(err => console.log(err))
        },
        listTask: ({commit, dispatch}) => {
            console.log('listtask')
            API.graphql((graphqlOperation(graphQlQueries.listTasks))).then(async data => {
                console.log(data)
                // dispatch('listTaskEvent')
                await commit('SET_TASK_LIST', data)

            }).catch(err => console.log(err))
        },
        listCategory: ({commit, dispatch}) => {
            API.graphql((graphqlOperation(graphQlQueries.listCategories))).then(async data => await commit('SET_CATEGORY_LIST', data)).catch(err => console.log(err))
        },
        getTask: ({commit, dispatch}, id) => {
            API.graphql((graphqlOperation(graphQlQueries.getTask, {id: id}))).then(async data => await commit('SET_CURRENT_TASK', data)).catch(err => console.log(err))
        },
        createComment: ({commit, dispatch}, data) => {
            console.log(data)
            API.graphql((graphqlOperation(graphQlMutations.createComment, {
                input: {
                    ...data
                }
            }))).then(data => {
                console.log(data)
            }).catch(err => console.log(err))
        },
    },

}