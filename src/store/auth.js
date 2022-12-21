import {AmplifyEventBus} from 'aws-amplify-vue';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import store from './index';
import {cognito_properties} from "../constants/cognito_s_variable";
import * as graphQlQueries from "../graphql/queries";

export default {
    state: {
        is_current_user: null,
        is_loading: null,
        is_admin: null,
        is_user: null,
        is_JWTtoken: null,
        user_atributes: null
    },
    getters: {
        is_current_user: state => state.is_current_user,
        is_admin: state => state.is_admin,
        is_user: state => state.is_user,
        is_JWTtoken: state => state.is_JWTtoken,
        is_current_users_attributes: state => state.user_atributes
    },
    mutations: {
        SET_USER: (state, data) => {
            state.is_current_user = data
            data != null ? AmplifyEventBus.$emit('authState', 'signedIn') : AmplifyEventBus.$emit('authState', 'signedErr')
        },
        SET_CURRENT_USER: (state, data) => state.is_current_user = data,
        SET_ADMIN_CLAIM: (state, data) => {
            console.log('store')
            console.log(store)
            state.is_JWTtoken = data.signInUserSession.accessToken.jwtToken
            data.compare ? (state.is_admin = true) && (state.is_user = false) : (state.is_admin = false) && (state.is_user = true)
        },
        SET_USER_ATTRIBUTES: (state, data) => {
            console.log(data)
        }
    },
    actions: {
        sign_in: async ({commit, dispatch}, data) => {
            await Auth.signIn(data.name, data.psw).then((user) => {
                if (user.challengeName == "NEW_PASSWORD_REQUIRED") {
                    Auth.completeNewPassword(user, data.psw,
                        {
                            name: user.challengeParam.userAttributes.name
                        }).then(() => {
                            commit("SET_USER", user.username)
                            store.dispatch('setAdmin', user)
                        }
                    ).catch(err => console.log(err))
                } else {
                    // this.loading = false
                    commit("SET_USER", user)
                    store.dispatch('setAdmin', user)
                }
            }).catch(e => {
                commit("SET_USER", null)
            })
        },
        sign_out: async ({commit, dispatch}, data) => {
            await Auth.signOut().then().catch()
        },
        set_current_user: async ({commit, dispatch}, data) => {

            commit("SET_CURRENT_USER", data)
        },
        setAdmin({commit, dispatch}, data) {

            const compare_group = (name) => {
                let compare = data.signInUserSession.idToken.payload['cognito:groups'].includes(name)
                compare ? (commit('SET_ADMIN_CLAIM', {
                    ...data,
                    compare: compare
                })) : (commit('SET_ADMIN_CLAIM', {...data, compare: compare}))
            }
            compare_group(cognito_properties.adminGroup)
        },
        getUserDataAtributes:async ()=>{
             API.graphql((graphqlOperation(graphQlQueries.getUser))).then(async data => {
                // await commit('SET_USER_ATTRIBUTES', data)
            }).catch(err => console.log(err))
        }
    }
}