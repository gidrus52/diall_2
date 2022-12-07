<template>
    <v-simple-table w class="ma-8 ml-15">
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Название задания
                </th>
                <th class="text-left">
                    Автор
                </th>
                <th class="text-left">
                    Исполнители
                </th>
                <th class="text-left">
                    Категория
                </th>
                <th class="text-left">
                    Дата создания
                </th>
                <th class="text-left">
                    Действия
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    class="text-left"
                    v-for="item in list"
                    :key="item.name"
                    style="height: 80px;"
            >
                <td class="text-left">{{ item.title }}</td>
                <td
                        @click="authorClick(item.authorData)"
                        class="text-left"
                >

                    <span class="black--text text-h7">{{ item.authorData.name}}</span>


                </td>
                <td class="text-left">
                    <v-badge
                            :content="item.assignedData.length"
                            :value="item.assignedData.length"
                    >
                        <v-icon
                                large
                                v-if="item.assignedData.length">
                            mdi-account-multiple
                        </v-icon>
                    </v-badge>
                    <v-icon
                            large
                            v-if="!item.assignedData.length">
                        {{icon.nothing}}
                    </v-icon>
                </td>
                <td class="text-left">{{ item.categoryData.title }}</td>
                <td class="text-left">{{ prepareTime(item.createdAt) }}</td>
                <td class="text-left">
                    <template>
                        <v-menu
                                left
                                min-width="150"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-for="(icon, i) in icon.action"
                                       icon
                                       v-bind="attrs"
                                       v-on="on"
                                       @click="actionEvent(item,icon.name)"
                                >
                                    <v-icon>{{ icon.data }}</v-icon>
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
    import {eventBus} from "../../../../../main"
    import {mdiArrowExpandAll, mdiCloseOutline, mdiFileCog, mdiPlusBoxMultipleOutline} from '@mdi/js'

    export default {
        name: "TaskTable",
        data() {
            return {
                tasks: [],
                users: [],
                list: [],
                category: [],
                icon: {
                    action: [
                        {
                            name: 'open',
                            data: mdiArrowExpandAll
                        },
                        {
                            name: 'delete',
                            data: mdiCloseOutline
                        },
                        {
                            name: 'update',
                            data: mdiFileCog
                        }],
                    nothing: mdiPlusBoxMultipleOutline
                },
            }
        },
        computed: {
            ...
                mapGetters(['listTaskGetter', 'listUserGetter', 'is_current_user', 'listCategoryGetter']),
            taskListComputed() {
                this.tasks = this.listTaskGetter
                return this.listTaskGetter
            }
            ,
            listCategoryComputed() {
                this.category = this.listCategoryGetter
            }
            ,
            userListComputed() {
                this.users = this.listUserGetter
                return this.listUserGetter
            }
            ,
            listComputed() {
                let defineAssign = []
                let defineCategory
                this.tasks.forEach(el => {
                    this.users.forEach(item => {
                        if (el.author === item.id) {
                            defineAssign.push({
                                ...el,
                                authorData: {...item},
                                assignedData: [],
                                categoryData: {}
                            })
                        }
                    })
                })
                defineAssign.forEach(listEl => {
                    listEl.assigned.forEach(assign => {
                        this.users.forEach(user => {
                            if (user.id === assign) {
                                listEl.assignedData.push({
                                    ...user
                                })
                            }
                        })

                    })
                    this.category.forEach(categoryEl => {
                        if (listEl.category === categoryEl.id) {
                            listEl.categoryData = {
                                ...categoryEl
                            }
                        }
                    })
                })
                this.list = defineAssign
            }

        }
        ,
        methods: {
            ...mapActions(['listTask', 'listUser']),
            authorClick(data) {
                console.log(data)
            },
            prepareTime(data) {
                return data.split('T')[0]
            },
            emitElse(){

            },
           async actionEvent(data, action) {
                let event = await action + 'FullscreenDialog'
                await eventBus.$emit(event,{
                    event: event , data: data, dialog: true
                })
               await eventBus.$emit( 'commentWindowData',{
                    ...data
                })
            }
        }
        ,
        watch: {
            taskListComputed(e) {
            }
            ,
            userListComputed(e) {
            }
            ,
            listComputed(e) {
            }
            ,
            listCategoryComputed() {
            }
        }
        ,
        async mounted() {
            this.listTask()
            this.listUser()
            console.log(this)
        }
        ,
        created() {
            eventBus.$on('taskEvent', () => {
                this.listTask()
                console.log('taskevent')
            })
        }
    }
</script>

<style scoped>

</style>