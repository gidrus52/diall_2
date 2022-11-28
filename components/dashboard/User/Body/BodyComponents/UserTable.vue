<template>
    <v-simple-table fixed-header class="ma-8">
        <template v-slot:default>
            <thead  title="basic fields">
            <tr>
                <th class="text-center">
                    Имя
                </th>
                <th class="text-center">
                    Почта
                </th>
                <th class="text-center">
                    Телефон
                </th>
                <th class="text-center">
                    Должность
                </th>
                <th class="text-center">
                    Компания
                </th>
                <th class="text-center">
                    Действия
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="user in users"
                    :key="user.id"
                    class="ma-10 text-h5"
                    style="height: 8vh;"

            >
                <td class="ma-10 text-body-1">{{ user.name}}</td>
                <td class="ma-10 text-body-1">{{ user.email}}</td>
                <td class="ma-10 text-body-1">{{ user.tel}}</td>

                <td class="ma-10 text-body-1">{{ user.jobTitle}}</td>
                <td class="ma-10 text-body-1">{{ user.companyName}}</td>
                <td class="text-center text-body-1">
                    <template>
                        <v-menu
                                left
                                min-width="150"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-for="(item, i) in actionIitems"
                                       icon
                                       v-bind="attrs"
                                       v-on="on"
                                       @click="makeTablesEvent({event: item.event, user: user})"
                                >
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-btn>
                            </template>
                        </v-menu>
                    </template>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {mdiCloseOutline, mdiDotsHorizontal, mdiFileCog} from '@mdi/js'
    import {eventBus} from "../../../../../main";

    export default {
        name: "UserTable",
        data: () => {
            return {
                users: [],
                companies: [],
                actionIitems: [
                    {title: 'Make update', icon: 'mdi-file-cog', event: 'update'},
                    {title: 'Delete User', icon: 'mdi-close-outline', event: 'delete'},
                ],
                icons: {
                    mdiDotsHorizontal,
                    mdiCloseOutline,
                    mdiFileCog
                },
            }
        },
        computed: {
            ...mapGetters(['listUserGetter','is_current_user']),
            userComputed() {
                // this.users = this.listUserGetter
                 this.users = []
                let username =  this.currentUserComputed.username
                this.listUserGetter.forEach(el=>{
                    if(username != el.id){
                        this.users.push(el)
                    }
                })
                return this.listUserGetter
            },
            currentUserComputed(){
                console.log(this.is_current_user)
                return this.is_current_user
            }

        },
        methods: {
            ...mapActions(['listUser']),
            makeTablesEvent(data) {
                if (data.event == 'update') {
                    eventBus.$emit('tableEventUpdate', {
                        type: data.event, user: data.user
                    })
                }
                if(data.event == 'delete'){
                    eventBus.$emit('tableEventDelete', {
                        type: data.event, user: data.user
                    })
                }

            },
        },
        watch: {
            async userComputed(value) {

            },
            companiesComputed(value) {
                this.companies = value
            }
        },
        created() {
          eventBus.$on('dialog_end',()=>{
              this.listUser()
          })
        },
        async mounted() {
            await this.listUser()
        },
    }
</script>

<style scoped>

</style>