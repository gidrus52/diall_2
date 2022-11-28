<template>
    <div>
        <v-dialog
                v-model="dialogCreate"
                persistent
                max-width="600px"
                transition="dialog-bottom-transition"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">Профиль пользователя</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <template>
                                    <v-form class=""
                                            ref="formUser"
                                            v-model="valid"
                                            lazy-validation>
                                        <v-text-field v-for="(item,index) in isAdminField" :key="item.email"
                                                      v-model="item.value"
                                                      :label=item.title
                                                      :name=item.name
                                                      :rules=item.rules
                                                      :required=item.required
                                        ></v-text-field>

                                        <v-checkbox
                                                v-model="checkbox"
                                                :label="`Добавить компанию`"
                                        ></v-checkbox>
                                       <div v-if="checkbox">
                                            <v-switch
                                                v-model="create_new_company"
                                                :label="create_new_company_computed"
                                        ></v-switch>
                                        <v-select
                                                v-if="!create_new_company"
                                                v-model="selectCompany"
                                                :items="company"
                                                :rules="[v => (v && v.length <= 16) || 'Название компании должно содержать не более 16 символов']"
                                                label="Выберите компанию из списка"
                                        ></v-select>
                                        <v-text-field
                                                v-else
                                                v-model="select"
                                                label="Введите название компании"
                                                :rules="[v => (v && v.length <= 16) || 'Название компании должно содержать не более 16 символов']"
                                                clearable
                                        ></v-text-field>
                                       </div>
                                        <v-select
                                                v-model="selectJob"
                                                :items="jobTitleList"
                                                :rules="[v => !!v || 'Выберите должность']"
                                                label="Должность"
                                        ></v-select>
                                        <v-overlay :value="overlayDialog">
                                            <v-progress-circular
                                                    indeterminate
                                                    size="64"
                                            ></v-progress-circular>
                                        </v-overlay>
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
                            @click="createEventClose"
                    >
                        Закрыть
                    </v-btn>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="createEventSave"
                            :disabled="false"
                    >
                        Создать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        props: {
            dialogCreate: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            overlayDialog: {
                type: Boolean,
                default: () => {
                    return false
                }
            }
        },
        name: "UserCreateDialog",
        data: () => ({
            valid: true,
            select: null,
            create_cmpny: false,
            create_new_company: false,
            checkbox: false,
            admin_s_fields: [
                {
                    name: 'email', value: '', title: 'почта', required: true, rules: [
                        v => !!v || 'Адрес почты обязателен',
                        v => /.+@.+\..+/.test(v) || 'почта должна соответсвовать стандарту ...example@domain.com',
                    ]
                },
                {
                    name: 'password', value: '',title: 'пароль', required: true, rules: [
                        v => !!v || 'Пароль - обязательный атрибут',
                        v => (v && v.length <= 16) || 'пароль должен быть менее 16 символов',
                    ]
                },
                {
                    name: 'first name', value: '', title: 'Имя', required: true, rules: [
                        v => !!v || 'Имя пользователя - обязательный атрибут',
                        v => (v && v.length <= 45) || 'Имя должно содержать менее 45 символов',
                    ]
                },
                {
                    name: 'last name', value: '', title: 'Фамилия',required: true, rules: [
                        v => !!v || 'Name is required',
                        v => (v && v.length <= 45) || 'Фамилия должна содержать менее 45 символо',
                    ],

                },
            ],
            valid: true,
            selectCompany: null,
            selectJob: null,
            company: [],
            jobTitleList: ["инженер"]
        }),
        computed: {
            ...mapGetters(['is_admin', 'listCompanyGetter']),
            isAdminField() {
                if (this.is_admin) {
                    return this.admin_s_fields
                }
            },
            create_new_company_computed() {
                return !this.create_new_company ? 'Включите параметр если хотите создать новую компанию' : 'Выключите параметр если не хотите создавать компанию'
            },
            companiesComputed() {
                return this.listCompanyGetter
            }
        },
        methods: {
            ...mapActions(['addUser', 'create_event_save', 'dialog_end', 'listCompany']),
            async createEventSave() {

                let cmpId = null
                await Array.from(this.companiesComputed).forEach(item => {
                    this.selectCompany === item.name ? cmpId = item.id : cmpId = null
                })
                if (this.$refs.formUser.validate()) {
                    const testFunc = (arr) => {
                        let keysarr
                        let bufferObg = new Object()
                        arr.forEach(async (item) => {
                            keysarr = Object.keys(item)
                            bufferObg[item[keysarr[0]]] = item[keysarr[1]]
                        })
                        return bufferObg
                    }
                    this.create_event_save()
                    this.addUser({...testFunc(this.admin_s_fields), jobTitle: this.selectJob, company: {name: this.selectCompany, id: cmpId}})
                }
                setTimeout(()=>{
                    this.$refs.formUser.reset()
                }, 1800)
            },
            createEventClose() {
                this.dialog_end()
            }
        },
        watch: {
            create_new_company(e) {
                this.select = null
            },
            companiesComputed(e) {
                Array.from(e).forEach(item => this.company.push(item.name))
            }
        },
        async mounted() {
            await this.listCompany()
        },
    }
</script>

<style scoped>

</style>