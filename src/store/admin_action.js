import {queries} from '../constants/queries'
import {API, graphqlOperation} from 'aws-amplify'
import store from '../store/index'
import * as mutations from '../graphql/mutations'
import * as graphQlMutations from '../graphql/mutations'

const findUsersData = async (fieldName, fieldEmail, arr) => {
    let user = {}
    arr.forEach(item => {
        if (item.Name === fieldName) {
            user[`${fieldName}`] = item.Value
        }
        if (item.Name === fieldEmail) {
            user[`${fieldEmail}`] = item.Value
        }
    })
    return user
}

export default {
    state: {
        current_user_noCognito: {}
    },
    getters: {
        currentUserNoCognito: state => state.current_user_noCognito
    },
    mutations: {
        SET_USER_NOCOGNITO: (state, data) => {
            console.log('SET_USER_NOCOGNITO')
            console.log(data)
            state.current_user_noCognito = data.data.getUser
        }
    },
    actions: {
        addUser: async ({commit, dispatch}, userData) => {
            const jwt = store.getters['is_JWTtoken']
            API.post(queries.AdminQueries.name, queries.AdminQueries.createUser.path, {
                headers: {
                    'Authorization': `${jwt}`
                },
                body: {
                    'name': `${userData['first name']} ${userData['last name']}`,
                    'email': userData.email,
                    'password': userData.password,
                    'group': 'User',
                }

            }).then(async (response) => {
                let UserDetails = {
                    companyID: userData.company.id != null ? userData.company.id : '',
                    companyName: userData.company.name != null ? userData.company.name : '',
                    name: `${userData['first name']} ${userData['last name']}`,
                    email: userData.email,
                    jobTitle: userData.jobTitle

                }
                API.graphql((graphqlOperation(mutations.createUser, {
                    input: {
                        ...UserDetails,
                        id: response.result.User.Username
                    }
                }))).then((data => {
                })).catch(err => console.log(err))
                let user = await findUsersData('name', 'email', response.result.User.Attributes)
                dispatch('dialog_end')
                dispatch('create_allert', {name: 'success', msg: user, type: 'user'})
            }).catch((e) => {
                dispatch('dialog_end')
                dispatch('create_allert', {name: 'error', msg: e.response.data.message, type: 'user'}
                )
            })
        },
        getUser: async ({commit, dispatch}, userData) => {
            const jwt = store.getters['is_JWTtoken']
            API.get(queries.AdminQueries.name, queries.AdminQueries.getUser.path, {
                headers: {
                    'Authorization': `${jwt}`
                },
                queryStringParameters: {
                    username: userData.id
                }

            }).then(data => {
                console.log(data)

            })
        },

        deleteUser: async ({commit, dispatch}, userData) => {
            const jwt = store.getters['is_JWTtoken']
            API.post(queries.AdminQueries.name, queries.AdminQueries.deleteUser.path, {
                headers: {
                    'Authorization': `${jwt}`
                },
                body: {
                    userName: userData['id']
                }

            }).then(API.graphql((graphqlOperation(mutations.deleteUser, {
                input: {
                    id: userData.id
                }
            }))).then(data => {
                dispatch('listUser')
            })).catch(err => console.log(err))
        },

        createDisplay: ({commit, dispatch}, data) => {
            API.graphql((graphqlOperation(graphQlMutations.createDisplay, {
                input: {
                    ...data
                }
            }))).then(data => {
                dispatch('create_event', {event: 'success_create_display'})
            }).catch(err => console.log(err))
        },
        createProject: ({commit, dispatch}, data) => {
            let count = ["Срочно", "Текущие", "Назначенные"]
            console.log(data)
            count.forEach(async (el, index) => {
                console.log(el, index)
                API.graphql((graphqlOperation(graphQlMutations.createProject, {
                    input: {
                        name: el,
                        display: data.display,
                        position: index
                    }
                }))).then(data => {
                    console.log(data)
                }).catch(err => console.log(err))
                if(index===count.length-1){
                     dispatch('create_event', {event: 'success_create_project'})
                }
            })


        },
        createTask: async ({commit, dispatch}, data) => {

            let user = store.getters.is_current_user.username

            API.graphql((graphqlOperation(mutations.createTask, {
                input: {
                    'title': data.name,
                    'author': user,
                    'project': data.targetEl.id,
                    'display': data.targetEl.display,
                    'assigned': data.assigned ? data.assigned : 'null',
                    'priority': data.priority ? data.priority : 'null'
                }
            }))).then(data => {
                console.log(data)
                dispatch('create_event', {event: 'success_create_task'})
            })
        },
        zeroAction: async ({commit, dispatch}, data) => {
            console.log(data)
            if (data === 'project') {
                console.log('zero')
                commit('SET_PROJECT_LIST', {
                    data: {
                        listProjects: {items: []}
                    }
                })
            }
        }
    }

}