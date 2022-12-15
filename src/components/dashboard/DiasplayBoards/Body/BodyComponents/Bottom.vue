<template>
    <v-row class="">
        <v-col>
            <v-card
                    max-height="630"
                    max-width="400"
                    class="mx-auto"
            >
                <v-system-bar
                        color="pink darken-2"
                        dark
                        height="45"
                >
                    <v-spacer></v-spacer>

                    <v-icon large>mdi-menu</v-icon>
                </v-system-bar>
                <v-container>
                    <v-row dense>
                        <v-col cols="12">
                            <v-card
                                    color="#385F73"
                                    dark
                            >
                                <v-card-title class="text-h5">
                                    text text text  text text text text
                                    text text text  text text text text
                                    text text text  text text text text
                                </v-card-title>

                                <v-card-subtitle>
                                    text text text  text text text text
                                    text text text  text text text text
                                    text text text  text text text text
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn text>
                                        button
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col
                                v-for="(item, i) in items"
                                :key="i"
                                cols="12"
                        >
                            <v-card
                                    :color="item.color"
                                    dark
                            >
                                <div class="d-flex flex-no-wrap justify-space-between">
                                    <div>
                                        <v-card-title
                                                class="text-h5"
                                                v-text="item.title"
                                        ></v-card-title>

                                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                                        <v-card-actions>
                                            <v-btn
                                                    v-if="item.artist === 'Ellie Goulding'"
                                                    class="ml-2 mt-3"
                                                    fab
                                                    icon
                                                    height="40px"
                                                    right
                                                    width="40px"
                                            >
                                                <v-icon>mdi-play</v-icon>
                                            </v-btn>

                                            <v-btn
                                                    v-else
                                                    class="ml-2 mt-5"
                                                    outlined
                                                    rounded
                                                    small
                                            >
                                                Button
                                            </v-btn>
                                        </v-card-actions>
                                    </div>

                                    <v-avatar
                                            class="ma-3"
                                            size="125"
                                            tile
                                    >
                                        <v-img :src="item.src"></v-img>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Bottom",
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    src: 'https://i.pinimg.com/originals/92/cb/40/92cb406de0821af43ac3d9cb582f8414.jpg',
                    title: 'text',
                    artist: 'text text text',
                },
                {
                    color: '#952175',
                    src: 'https://i.pinimg.com/originals/92/cb/40/92cb406de0821af43ac3d9cb582f8414.jpg',
                    title: 'text text text',
                    artist: 'text text text text text text',
                },
            ],
        })
    }
</script>

<style scoped>

</style>