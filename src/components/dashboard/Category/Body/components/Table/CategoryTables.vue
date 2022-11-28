<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Название категории
                </th>
                <th class="text-left">
                    Создано
                </th>
                <th width="100" class="text-left">
                    <v-btn @click="dialog_start({event: 'create_dialog_category'})"
                           icon>
                        <v-icon>{{icons.mdiLinkVariantPlus}}</v-icon>
                    </v-btn>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-left"
                v-for="item in categories"
                :key="item.name"
            >
                <td>{{ item.title }}</td>
                <td>{{ item.createdAt }}</td>
                <td>
                    <v-btn
                            @click="update_category(item)"
                            icon>
                        <v-icon>{{icons.mdiFileCog}}</v-icon>
                    </v-btn>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {mdiFileCog, mdiLinkVariantPlus} from '@mdi/js';
    import {eventBus} from "../../../../../../main";

    export default {
        name: "CategoryTables",
        data: () => {
            return {
                categories: [],
                icons: {
                    mdiLinkVariantPlus: mdiLinkVariantPlus,
                    mdiFileCog: mdiFileCog
                }
            }
        },
        computed: {
            ...mapGetters(['listCategoryGetter']),
            listCategoryComputed() {
                this.categories = this.listCategoryGetter
                return this.listCategoryGetter
            }
        },
        methods: {
            ...mapActions(['listCategory', 'dialog_start']),
            update_category(item) {
                this.dialog_start({event: 'update_dialog_category', data: item})
            }
        },
        watch: {
            listCategoryComputed() {

            }
        },
        created() {
            eventBus.$on('dialog_end', () => {
                this.listCategory()
            })
        },
        mounted() {
            this.listCategory()
        }
    }
</script>

<style scoped>

</style>