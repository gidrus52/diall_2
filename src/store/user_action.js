import {API, graphqlOperation} from 'aws-amplify'
import * as graphQlQueries from '../graphql/queries'

export default {
    state: {
        usersList: [],
        displayList: [],
        currentDisplay: {},
        projectList: [],
        currentProject: [],
        taskList: [],
        currentTask: {},
        chatList: []

    },
    getters: {
        displayList: state => state.displayList,
        currentDisplayItem: state => state.currentDisplay,
        listUserGetter: state => state.usersList,
        listCompanyGetter: state => state.companysList,
        listCurrentProject: state => state.currentProject,
        listTaskGetter: state => state.taskList,
        currentTaskGetter: state => state.currentTask,
        readyList: state => state.readyList,
        chatListGetter: state => state.chatList,
    },
    mutations: {
        SET_USER_LIST: async (state, data) => {
            state.usersList = await data.data.listUsers.items
        },
        SET_DISPLAY_LIST: async (state, data) => {
            state.displayList = await data.data.listDisplays.items
        },
        SET_CURRENT_DISPLAY: async (state, element) => {
            state.currentDisplay = element
        },
        SET_PROJECT_LIST: async (state, data) => {

            state.currentProject = await data.data.listProjects.items
        },
        SET_TASK_LIST: async (state, data) => {
            state.taskList = data.data.listTasks.items
        },
        SET_CHAT_LIST: async (state, data) => {
            console.log(data)
            state.chatList = data.data.listTasks.items
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
        listDisplay: async ({commit, dispatch}) => {
            API.graphql((graphqlOperation(graphQlQueries.listDisplays))).then(async data => {
                await commit('SET_DISPLAY_LIST', data)
                dispatch('currentDisplay', data.data.listDisplays.items[0])
            }).catch(err => console.log(err))
        },
        currentDisplay: async ({commit, dispatch}, element) => {
            console.log('fibnd bug 1')
            console.log('elementelementelementelementelementelement')
            console.log(element)
            await commit('SET_CURRENT_DISPLAY', element)
            dispatch('listProject', element)
        },
        listProject: ({commit, dispatch}, filter) => {
            let current_id = filter.id
            let prepare_filter = {
                display: {
                    eq: current_id
                }
            }
            API.graphql({query: graphQlQueries.listProjects, variables: {filter: prepare_filter}}).then(async data => {

                await commit('SET_PROJECT_LIST', data)
            }).catch(err => console.log(err))
        },
        listTasks: async ({commit, dispatch}) => {
            console.log('list')
            console.log('list')
            console.log('list')
            console.log('list')
            console.log('list')
            console.log('list')
            API.graphql((graphqlOperation(graphQlQueries.listTasks))).then(async data => {
                await commit('SET_TASK_LIST', data)
            }).catch(err => console.log(err))
        },
        ListTaskForChat: async ({commit, dispatch}, display) => {
            console.log('ListTaskForChat')
            let current_id = display.id
            let prepare_filter = {
                display: {
                    eq: current_id
                }
            }
            API.graphql({query: graphQlQueries.listTasks, variables: {filter: prepare_filter}}).then(async data => {
                console.log(data)
                await commit('SET_CHAT_LIST', data)
            }).catch(err => console.log(err))
        }

    },

}