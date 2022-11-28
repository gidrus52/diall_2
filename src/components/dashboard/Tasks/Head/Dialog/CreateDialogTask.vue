<template>
    <v-dialog
            v-model="createTaskProps"
            persistent
            max-width="900px"
            width="900"
            transition="dialog-bottom-transition"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">Создать задачу</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <template>
                                <v-form class=""
                                        ref="formTask"
                                        >
                                    <v-text-field v-for="(item,index) in isTaskField" :key="item.email"
                                                  v-model="item.value"
                                                  :label=item.title
                                                  :name=item.name
                                                  :rules=item.rules
                                                  :required=item.required
                                    ></v-text-field>
                                    <v-textarea v-for="(item,index) in isTaskTextField" :key="item.name"
                                                filled
                                                auto-grow
                                                label="Four rows"
                                                rows="4"
                                                row-height="30"
                                                shaped
                                                v-model="item.value"
                                                :label=item.title
                                                :name=item.name
                                                :rules=item.rules
                                                :required=item.required
                                    ></v-textarea>
                                    <v-select
                                            :items="categories"
                                            v-model="categorySelect"
                                            item-text="title"
                                            item-value="id"
                                            label="Категория"
                                            :rules="[v => !!v || 'Выберите категорию']"
                                            required
                                            clearable
                                    ></v-select>
                                    <v-autocomplete
                                            v-model="usersSelected"
                                            :disabled="isUpdating"
                                            :items="users"
                                            filled
                                            chips
                                            color="blue-grey lighten-2"
                                            label="Назначить исполнителей"
                                            item-text="email"
                                            item-value="email"
                                            multiple
                                    >
                                        <template v-slot:selection="data">
                                            <v-chip
                                                    v-bind="data.attrs"
                                                    :input-value="data.selected"
                                                    close
                                                    @click="itemClick(data)"
                                                    @click:close="remove(data.item)"

                                            >
                                                <v-avatar left>
                                                    <v-img :src="data.item.avatar"></v-img>
                                                </v-avatar>

                                                <div>
                                                    {{ data.item.name }}
                                                </div>
                                            </v-chip>
                                        </template>
                                        <template v-slot:item="data">
                                            <template v-if="typeof data.item !== 'object'">
                                                <v-list-item-content v-text="data.item"></v-list-item-content>
                                            </template>
                                            <template v-else>
                                                <v-list-item-avatar>
                                                    <img :src="data.item.avatar">
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title v-html="data.item.email"></v-list-item-title>
                                                    <v-list-item-subtitle
                                                            v-html="data.item.name"></v-list-item-subtitle>
                                                    <v-list-item-subtitle
                                                            v-html="data.item.group"></v-list-item-subtitle>
                                                </v-list-item-content>
                                            </template>
                                        </template>
                                    </v-autocomplete>
                                </v-form>
                            </template>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="blue darken-1"
                        text
                        @click="createTaskEvent()"

                >
                    Закрыть
                </v-btn>
                <v-btn
                        color="blue darken-1"
                        text
                        :disabled="false"
                        @click="createTaskDialog"
                >
                    Создать
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    const srcs = {
        1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }

    export default {
        name: "CreateDialogTask",
        props: {
            createTaskProps: {
                type: Boolean,
                required: true,
                default: () => {
                    return false
                }
            }
        },
        data: () => {

            return {
                dialog: false,

                isTaskField: [
                    {
                        name: 'title', value: '', title: 'название задачи', required: true, rules: [
                            v => !!v || 'Название обязательно',
                            v => (v && v.length <= 45) || 'Название должно быть не более 45 символов',
                        ]
                    }
                ],
                isTaskTextField: [
                    {
                        name: 'describe', value: '', title: 'описание задачи', required: true, rules: [
                            v => !!v || 'Описание обязательно',
                            v => (v && v.length <= 245) || 'Описание должно быть не более 245 символов',
                        ]
                    }
                ],
                autoUpdate: true,
                isUpdating: false,
                name: 'Midnight Crew',
                users: [],
                usersSelected: [],
                categories: [],
                categorySelect: undefined,
                title: 'The summer breeze',
            }
        },
        computed: {
            ...mapGetters(['listUserGetter','listCategoryGetter','is_current_user']),
            currentUser() {
                return this.is_current_user
            },
            listUserComputed() {
                return this.listUserGetter
            },
            ListCategoryComputed(){
                return this.listCategoryGetter
            },
            listTaskComputed(){
                return this.listTaskGetter
            }
        },
        methods: {
            ...mapActions(['dialog_end', 'listUser', 'createTask', 'listCategory', 'listTask']),
            createTaskEvent() {
                this.dialog_end()
            },
            remove(item) {
                const index = this.usersSelected.indexOf(item.email)
                if (index >= 0) this.usersSelected.splice(index, 1)
            },
            itemClick(data) {
                console.log(data)
            },
            async createTaskDialog() {
                const findValue = (targetString, arr) => {
                    let value = ''
                    arr.forEach(item => {
                        item.name == targetString ? value = item.value : undefined
                    })
                    return value
                }
                if (this.$refs.formTask.validate()) {
                    let author = this.currentUser.username.toString()
                    let assigned =  new Set()
                    await this.usersSelected.forEach(item => {
                        this.users.forEach(el => {
                            if (item === el.email) {
                                assigned.add(el.id)
                            }
                        })
                    })
                    let fields = await this.isTaskField.concat(this.isTaskTextField).map(el => {
                        return {
                            name: el.name,
                            value: el.value
                        }
                    })
                    let title = await findValue('title', fields)
                    let text = await findValue('describe', fields)
                    await this.createTask({
                        title: title,
                        text: text,
                        author: author,
                        assigned: Array.from(assigned),
                        category: this.categorySelect
                    })
                    setTimeout(()=>{
                        this.$refs.formTask.reset()
                    }, 1500)
                }


            },

        },
        watch: {
            isUpdating(val) {
                if (val) {
                    setTimeout(() => (this.isUpdating = false), 3000)
                }
            },
            listUserComputed(e) {
                Array.from(e).forEach(item => {
                    this.users.push({
                        ...item,
                        avatar: srcs[Math.floor(Math.random() * (5 - 1) + 1).toString()],
                        group: 'User'
                    })
                })
            },
            ListCategoryComputed(e){
                this.categories = e
            },
            listTaskComputed(){

            }
        },
        async mounted() {
            await this.listUser()
            await this.listCategory()
            await this.listTask()
        }

    }
</script>

<style scoped>

</style>