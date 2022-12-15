import {queries} from '../constants/queries'
import {API, graphqlOperation} from 'aws-amplify'
import store from '../store/index'
import * as mutations from '../graphql/mutations'
import * as graphQlMutations from '../graphql/mutations'
import * as graphQlQueries from "../graphql/queries";

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
            state.current_user_noCognito = data.data.getUser
        }
    },
    actions: {
        addUser:
            async ({commit, dispatch}, userData) => {
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
        getUserNoCognito: async ({commit, dispatch}, userData) => {
            API.graphql((graphqlOperation(graphQlQueries.getUser, {
                id: userData.id
            })))
                .then(async data => await commit('SET_USER_NOCOGNITO', data))
                .catch(err => console.log(err))

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
        listUserEvents: async (data) => {
            const jwt = store.getters['is_JWTtoken']

            API.post(queries.AdminQueries.name, queries.AdminQueries.listEvents.path, {
                headers: {
                    'Authorization': `${jwt}`
                },
                body: {
                    username: 'e2f774a3-710e-47e7-bb80-5b879dd3a7be'
                }

            }).then(data => {

            })
        },
        createDisplay: ({commit, dispatch}, data) => {
            console.log(data)
            API.graphql((graphqlOperation(graphQlMutations.createDisplay, {
                input: {
                    ...data
                }
            }))).then(data => {
                dispatch('create_event',{event: 'success_create_display'})
                console.log(data)
            }).catch(err => console.log(err))
        },
        createTask: async ({commit, dispatch}, data) => {
            API.graphql((graphqlOperation(mutations.createTask, {
                input: {
                    ...data
                }
            }))).then(data => {
                dispatch('create_allert', {name: 'success', msg: data, type: 'task'})
                dispatch('dialog_end')
                dispatch('listTaskEvent')
            })

        },
        createCategory: async ({commit, dispatch}, data) => {
            API.graphql((graphqlOperation(mutations.createCategory, {
                input: {
                    ...data
                }
            }))).then(data => {
                dispatch('create_allert', {name: 'success', msg: data, type: 'category'})
                dispatch('dialog_end')
                dispatch('listTaskEvent')
            })

        },
        updateCategory: async ({commit, dispatch}, data) => {
            API.graphql((graphqlOperation(mutations.updateCategory, {
                input: {
                    ...data
                }
            }))).then(data => {
                dispatch('create_allert', {name: 'success', msg: data, type: 'category'})
                dispatch('dialog_end')
                dispatch('listTaskEvent')
            })

        }
    }

}